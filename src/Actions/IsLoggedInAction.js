import {
    IS_LOGGED_IN, CURRENT_URL
  } from "./types";
  
  export function setUserLoggedIn(value) {
    return {
      type: IS_LOGGED_IN,
      payload: value
    };
  }
  export function setCurrentURL(value, index) {
    return {
      type: CURRENT_URL,
      payload: { value, index }
    };
  }