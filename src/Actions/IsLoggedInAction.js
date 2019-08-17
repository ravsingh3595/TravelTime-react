import {
    IS_LOGGED_IN, CURRENT_URL, EMAIL_FOR_LOGGED_USER
  } from "./types";
  
  export function setUserLoggedIn(value) {
    return {
      type: IS_LOGGED_IN,
      payload: value
    };
  }
  export function setCurrentURL(value) {
    return {
      type: CURRENT_URL,
      payload: value
    };
  }
  export function setEmailForLoggedUser(value) {
    return {
      type: EMAIL_FOR_LOGGED_USER,
      payload: value
    };
  }