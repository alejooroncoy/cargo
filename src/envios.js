import "../style.css"
import { addEventListenerShipment, getShipment, setShipment } from "./libs/shipment";
import "./libs/menu"

const formAdd = document.querySelector("#formAdd");
const content = document.querySelector("#content");


const updateHTMLShipment = (shipment = {}) => {
  content.innerHTML = shipment.products?.map(product => (`<article class="bg-[#FFDBAD] rounded-xl p-4">
  <div class="w-full flex items-center justify-center">
    <ul class="flex gap-2 font-bold">
      <li class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 30 30">
          <path
            d="M 5 4 C 3.895 4 3 4.895 3 6 L 3 8 L 27 8 L 27 6 C 27 4.895 26.105 4 25 4 L 5 4 z M 4 10 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 10 L 4 10 z M 12 13 L 18 13 C 18.552 13 19 13.448 19 14 C 19 14.552 18.552 15 18 15 L 12 15 C 11.448 15 11 14.552 11 14 C 11 13.448 11.448 13 12 13 z">
          </path>
        </svg>
        <span>${product.name}</span>
      </li>
      <li class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 30 30">
          <path
            d="M21.66 0H9.34C8.6 0 8 .6 8 1.34v9.9c0 1.48 1.2 2.69 2.69 2.69H20c1.66 0 3-1.34 3-3V1.34C23 .6 22.4 0 21.66 0zM18 4h-5c-.55 0-1-.45-1-1s.45-1 1-1h5c.55 0 1 .45 1 1S18.55 4 18 4zM21.66 16.07H9.34C8.6 16.07 8 16.67 8 17.42v9.89C8 28.8 9.2 30 10.69 30H20c1.66 0 3-1.34 3-3v-9.58C23 16.67 22.4 16.07 21.66 16.07zM18 20h-5c-.55 0-1-.45-1-1s.45-1 1-1h5c.55 0 1 .45 1 1S18.55 20 18 20z">
          </path>
        </svg>
        <span>${product.amount}u.</span>
      </li>
      <li class="flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 30 30">
          <path
            d="M25,5H5c0,1.65-1.35,3-3,3v14c1.65,0,3,1.35,3,3h20c0-1.65,1.35-3,3-3V8C26.35,8,25,6.65,25,5z M21,14H9 c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1h12c0.552,0,1,0.448,1,1C22,13.552,21.552,14,21,14z M21,18H9c-0.552,0-1-0.448-1-1 c0-0.552,0.448-1,1-1h12c0.552,0,1,0.448,1,1C22,17.552,21.552,18,21,18z">
          </path>
        </svg>
        <span>${product.category}</span>
      </li>
      <li class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 30 30">
          <path
            d="M 11.001953 3 C 8.3494988 3 6.4090959 5.6099931 7.171875 8.1503906 L 8.4589844 12.445312 C 6.343182 14.278864 5 16.980377 5 20 C 5 23.275756 7.047218 25.781792 7.3867188 26.177734 A 2 2 0 0 0 7.5 26.320312 C 7.5002572 26.320598 7.5117188 26.333984 7.5117188 26.333984 A 2 2 0 0 1 7.5136719 26.333984 A 2 2 0 0 0 8.8476562 26.992188 L 8.8632812 27 L 15 27 L 21.136719 27 L 21.150391 26.992188 A 2 2 0 0 0 22.488281 26.333984 C 22.488281 26.333984 22.494065 26.326256 22.494141 26.326172 A 2 2 0 0 0 22.607422 26.1875 C 22.930923 25.811431 25 23.291783 25 20 C 25 16.980377 23.656818 14.278864 21.541016 12.445312 L 22.828125 8.1503906 L 22.828125 8.1484375 C 23.589304 5.6086604 21.649813 3 18.998047 3 L 15 3 L 11.001953 3 z M 11.001953 5 L 15 5 L 18.998047 5 C 20.365592 5 21.307283 6.2646162 20.914062 7.5742188 L 19.814453 11.236328 C 18.386083 10.450094 16.745729 10 15 10 C 13.254271 10 11.613917 10.450094 10.185547 11.236328 L 9.0859375 7.5742188 C 8.6927166 6.2646163 9.6344076 5 11.001953 5 z">
          </path>
        </svg>
        <span>${product.weight} kg</span>
      </li>
    </ul>
  </div>
</article>`)).join("\n") || "";
}

document.addEventListener("DOMContentLoaded", () => {

  const shipment = getShipment();
  updateHTMLShipment(shipment)

  addEventListenerShipment(e => {
    if (e instanceof StorageEvent) {
      const shipment = JSON.parse(e.newValue || "{products: []}");

      updateHTMLShipment(shipment);


      return;
    }

    const shipment = getShipment();
    updateHTMLShipment(shipment)
  });

  const handleFormAdd = (e) => {
    const formData = new FormData(e.target);
    const newProduct = Object.fromEntries(formData.entries());

    e.preventDefault();

    const oldShipment = getShipment();

    const shipment = {
      ...oldShipment,
      products: [
        ...(oldShipment?.products || []),
        newProduct
      ]
    }

    setShipment(shipment);

  };

  formAdd.addEventListener("submit", handleFormAdd)
})