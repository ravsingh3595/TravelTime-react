import {
    IS_LOGGED_IN,
    CURRENT_URL,
    EMAIL_FOR_LOGGED_USER
  } from "../Actions/types";
  
  export default (state = [], action = {}) => {
    console.log("action", action.type);
    switch (action.type) {
      case IS_LOGGED_IN:
        return {
          ...state,
          isLoggedIn: action.payload
        };
  
      case CURRENT_URL:
        return {
          ...state,
          currentURL: action.payload
        };

      case EMAIL_FOR_LOGGED_USER:
        return {
          ...state,
          emailForLoggedUser: action.payload
        };
  
      default:
        return state;
    }
  };
  