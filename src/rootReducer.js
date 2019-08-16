import { combineReducers } from "redux";

import alertMessages from "./Reducers/AlertMessage";
import bookingInfo from "./Reducers/BookingInfo";
import isLoggedIn from "./Reducers/IsLoggedInReducer";

export default combineReducers({
  alertMessages,
  bookingInfo,
  isLoggedIn
});
