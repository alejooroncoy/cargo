const SHIPMENT_NAME_LOCAL_STORAGE = "shipment";

export const getShipment = () => {
  const shipmentString = localStorage.getItem(SHIPMENT_NAME_LOCAL_STORAGE);

  return JSON.parse(shipmentString || "{}");
}

export const setShipment = (shipment) => {
  const storageEvent = new Event("storage");

  localStorage.setItem(SHIPMENT_NAME_LOCAL_STORAGE, JSON.stringify(shipment));
  window.dispatchEvent(storageEvent);
}

export const addEventListenerShipment = (cb) => {
  window.addEventListener("storage", (e) => {
    if (e instanceof StorageEvent) {
      if (e.key === SHIPMENT_NAME_LOCAL_STORAGE)
        return cb(e)
      return;
    }
    cb(e);
  })

}