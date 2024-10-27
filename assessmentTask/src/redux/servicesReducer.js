// servicesReducer.js
import { SERVICES_LIST, SET_SERVICES_LIST } from "./servicesActions";

const initialState = {
  data: [],
  loading: false, // Track loading state
};

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SERVICES_LIST:
      return { ...state, loading: true }; // Set loading when services are requested
    case SET_SERVICES_LIST:
      return { data: action.data, loading: false }; // Update data and reset loading
    default:
      return state;
  }
};

export default servicesReducer;
