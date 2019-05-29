import { ADD_ALERT_MESSAGE } from './types';

export function addFlashMessage(message) {
  return {
    type: ADD_ALERT_MESSAGE,
    message
  }
}
