import '../style.css'
import { getShipments } from './libs/shipments';
import getTimeAgo from './utils/getTimeAgo';


const generateShipmentHTML = ({ id, time }) => `<article class="bg-white shadow-xl flex justify-between items-center rounded-xl p-1 min-h-20">
<div class="flex gap-2 w-full items-center justify-between p-3">
  <div class="w-8/12">
    <h3 class="text-secondary font-extrabold">Envío #${id}</h3>
    <p class="text-[#989898] text-xs">En proceso ${getTimeAgo(time)}.
    </p>
  </div>
  <div class="flex items-center justify-center rounded-full w-14 h-14 bg-[#f5f5f5]">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 relative -top-[2.5px] left-[0.5px]" viewBox="0 0 50 50">
      <path
        d="M 2.84375 13 C 1.273438 13 0 14.277344 0 15.84375 L 0 42 C 0 43.566406 1.429688 45 3 45 L 7.09375 45 C 7.570313 47.835938 10.03125 50 13 50 C 15.96875 50 18.429688 47.835938 18.90625 45 L 28.15625 45 C 29.722656 45 31 43.722656 31 42.15625 L 31 15.90625 C 31 14.304688 29.738281 13 28.1875 13 Z M 33 20 L 33 45 C 33.480469 47.832031 36.03125 50 39 50 C 41.96875 50 44.429688 47.832031 44.90625 45 L 47 45 C 48.570313 45 50 43.570313 50 42 L 50 32.375 C 50 30.363281 48.550781 28.308594 48.375 28.0625 L 44.21875 22.5 C 43.265625 21.351563 41.769531 20 40 20 Z M 38 25 L 43.59375 25 L 46.78125 29.25 C 47.121094 29.730469 48 31.203125 48 32.375 L 48 33 L 38 33 C 37 33 36 32 36 31 L 36 27 C 36 25.894531 37 25 38 25 Z M 13 40 C 15.207031 40 17 41.792969 17 44 C 17 46.207031 15.207031 48 13 48 C 10.792969 48 9 46.207031 9 44 C 9 41.792969 10.792969 40 13 40 Z M 39 40 C 41.207031 40 43 41.792969 43 44 C 43 46.207031 41.207031 48 39 48 C 36.792969 48 35 46.207031 35 44 C 35 41.792969 36.792969 40 39 40 Z">
      </path>
    </svg>
  </div>
</div>
</article>`;

const addShipments = () => {
  const shipmentsContainer = document.querySelector("#shipmentsContainer");
  const shipments = getShipments();

  if (!shipments?.length) {
    shipmentsContainer.insertAdjacentHTML("afterbegin", `<article class="bg-white shadow-xl flex justify-between items-center rounded-xl p-1 min-h-20">
    <div class="flex gap-2 w-full items-center justify-between p-3">
      <div class="w-8/12">
        <h3 class="text-secondary font-extrabold">Haz tu primer envío</h3>
        <p class="text-[#989898] text-xs">Dirigase a la pestaña de nuevo envío.
        </p>
      </div>
      <div class="flex items-center justify-center rounded-full w-14 h-14 bg-[#f5f5f5]">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 relative -top-[2.5px] left-[0.5px]" viewBox="0 0 50 50">
          <path
            d="M 2.84375 13 C 1.273438 13 0 14.277344 0 15.84375 L 0 42 C 0 43.566406 1.429688 45 3 45 L 7.09375 45 C 7.570313 47.835938 10.03125 50 13 50 C 15.96875 50 18.429688 47.835938 18.90625 45 L 28.15625 45 C 29.722656 45 31 43.722656 31 42.15625 L 31 15.90625 C 31 14.304688 29.738281 13 28.1875 13 Z M 33 20 L 33 45 C 33.480469 47.832031 36.03125 50 39 50 C 41.96875 50 44.429688 47.832031 44.90625 45 L 47 45 C 48.570313 45 50 43.570313 50 42 L 50 32.375 C 50 30.363281 48.550781 28.308594 48.375 28.0625 L 44.21875 22.5 C 43.265625 21.351563 41.769531 20 40 20 Z M 38 25 L 43.59375 25 L 46.78125 29.25 C 47.121094 29.730469 48 31.203125 48 32.375 L 48 33 L 38 33 C 37 33 36 32 36 31 L 36 27 C 36 25.894531 37 25 38 25 Z M 13 40 C 15.207031 40 17 41.792969 17 44 C 17 46.207031 15.207031 48 13 48 C 10.792969 48 9 46.207031 9 44 C 9 41.792969 10.792969 40 13 40 Z M 39 40 C 41.207031 40 43 41.792969 43 44 C 43 46.207031 41.207031 48 39 48 C 36.792969 48 35 46.207031 35 44 C 35 41.792969 36.792969 40 39 40 Z">
          </path>
        </svg>
      </div>
    </div>
    </article>`);
  } else {
    shipmentsContainer.insertAdjacentHTML("afterbegin",
      shipments.map(shipment => generateShipmentHTML(shipment)).join("\n"));
  }

};

document.addEventListener("DOMContentLoaded", () => {
  addShipments();
});
