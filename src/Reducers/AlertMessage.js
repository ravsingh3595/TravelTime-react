import { ADD_ALERT_MESSAGE } from "../Actions/types";
import shortid from 'shortid';

export default (state = [], action = {}) => {
    switch(action.type){
        case (ADD_ALERT_MESSAGE):
            return[
                ...state,
                {
                    id: shortid.generate(),
                    type: action.message.type,
                    text: action.message.text
                }
            ];
        default: return state;
    }
    
}