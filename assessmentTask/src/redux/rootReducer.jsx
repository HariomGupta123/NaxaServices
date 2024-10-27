// rootReducer.js
import { combineReducers } from "redux";
import servicesReducer from "./servicesReducer";

const rootReducer = combineReducers({
  services: servicesReducer, // Name the reducer key appropriately
});

export default rootReducer;
