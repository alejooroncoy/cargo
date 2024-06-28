const SHIPMENTS_NAME_LOCAL_STORAGE = "shipments";

export const getShipments = () => {
  const shipmentsString = localStorage.getItem(SHIPMENTS_NAME_LOCAL_STORAGE);

  return JSON.parse(shipmentsString || "{}");
}

export const setShipments = (shipments) => {
  const storageEvent = new Event("storage");
  storageEvent.newValue = shipments;
  storageEvent.key = SHIPMENTS_NAME_LOCAL_STORAGE;

  window.dispatchEvent(storageEvent);
  localStorage.setItem(SHIPMENTS_NAME_LOCAL_STORAGE, JSON.stringify(shipments));
}

export const addEventListenerShipments = (cb) => {
  window.addEventListener("storage", (e) => {
    if (e.key === SHIPMENTS_NAME_LOCAL_STORAGE) cb(e);
  })

}