// servicesSaga.js
import { put, takeEvery, call } from "redux-saga/effects";
import { SERVICES_LIST, SET_SERVICES_LIST } from "./servicesActions";

// Fetch services data
function* getServices() {
  try {
    const response = yield call(
      fetch,
      "https://admin.naxa.com.np/api/services"
    );
    const data = yield response.json(); // Convert response to JSON
    yield put({ type: SET_SERVICES_LIST, data: data });
  } catch (error) {
    console.error("Failed to fetch services:", error);
    // Optionally, you could dispatch an error action here
  }
}

// Watcher saga
function* servicesSaga() {
  yield takeEvery(SERVICES_LIST, getServices);
}

export default servicesSaga;
