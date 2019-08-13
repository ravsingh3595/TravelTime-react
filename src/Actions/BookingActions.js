import {
  SET_NUMBER_OF_TRAVELLERS,
  SET_FROM_DATE,
  SET_TO_DATE,
  SET_EMAIL,
  SET_CONTACT_NUM,
  SET_FULL_NAME
} from "./types";

export function setUpNumberOfTravellers(value) {
  return {
    type: SET_NUMBER_OF_TRAVELLERS,
    payload: value
  };
}
export function setFullName(value, index) {
  return {
    type: SET_FULL_NAME,
    payload: { value, index }
  };
}
export function setFromDate(value) {
  return {
    type: SET_FROM_DATE,
    payload: value
  };
}
export function setToDate(value) {
  return {
    type: SET_TO_DATE,
    payload: value
  };
}
export function setEmail(value) {
  return {
    type: SET_EMAIL,
    payload: value
  };
}
export function setContactNum(value) {
  return {
    type: SET_CONTACT_NUM,
    payload: value
  };
}
