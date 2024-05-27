const SHIPMENTS_NAME_LOCAL_STORAGE = "shipments";

export const getShipments = () => {
  const shipmentsString = localStorage.getItem(SHIPMENTS_NAME_LOCAL_STORAGE);

  return JSON.parse(shipmentsString);
}

export const setShipments = (shipments) => {
  localStorage.setItem(SHIPMENTS_NAME_LOCAL_STORAGE, JSON.stringify(shipments));
}