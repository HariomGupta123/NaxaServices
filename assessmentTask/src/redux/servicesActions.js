// actions.js
export const SERVICES_LIST = "SERVICES_LIST";
export const SET_SERVICES_LIST = "SET_SERVICES_LIST"; // Corrected to match the action

export const servicesList = () => ({
  type: SERVICES_LIST,
  data: "hello", // You might want to replace this with relevant data
});

export const setServicesList = (data) => ({
  type: SET_SERVICES_LIST,
  data: data,
});
