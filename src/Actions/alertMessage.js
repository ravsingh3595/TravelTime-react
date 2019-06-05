import { ADD_ALERT_MESSAGE } from './types';

export function addAlertMessage(message) {
  return {
    type: ADD_ALERT_MESSAGE,
    message
  }
}
