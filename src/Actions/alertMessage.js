import { ADD_ALERT_MESSAGE, DELETE_ALERT_MESSAGE} from './types';

export function addAlertMessage(message) {
  return {
    type: ADD_ALERT_MESSAGE,
    message
  }
}
export function deleteAlertMessage(id){
  return{
    type: DELETE_ALERT_MESSAGE,
    id
  }
}