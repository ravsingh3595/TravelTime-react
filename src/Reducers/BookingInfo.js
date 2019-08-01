import {
  SET_NUMBER_OF_TRAVELLERS,
  SET_FULL_NAME,
  SET_EMAIL,
  SET_CONTACT_NUM,
  SET_FROM_DATE,
  SET_TO_DATE
} from "../Actions/types";

export default (state = { numOfTravellers: "" }, action = {}) => {
  console.log("action", action.type);
  switch (action.type) {
    case SET_NUMBER_OF_TRAVELLERS:
      return {
        ...state,
        numOfTravellers: action.payload,
        travellers: {}
      };

    case SET_FULL_NAME:
      const ind = action.payload.index;
      const obj = {};
      obj[ind] = action.payload.value;
      return {
        ...state,
        travellers: {
          ...state.travellers,
          ...obj
        }
      };

    case SET_EMAIL:
      return {
        ...state,
        email: action.payload
      };

    case SET_CONTACT_NUM:
      return {
        ...state,
        contactNum: action.payload
      };

    case SET_FROM_DATE:
      return {
        ...state,
        fromDate: action.payload
      };

    case SET_TO_DATE:
      return {
        ...state,
        toDate: action.payload
      };

    default:
      return state;
  }
};
