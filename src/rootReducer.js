import { combineReducers } from "redux";

import alertMessages from "./Reducers/AlertMessage";
import bookingInfo from "./Reducers/BookingInfo";

export default combineReducers({
  alertMessages,
  bookingInfo
});
