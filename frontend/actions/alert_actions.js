import { AppDispatcher } from '../dispatcher/dispatcher';
import { ADD_BUTTON_HOVER } from '../constants/alert_constants';

export const toggleAddHover = () => {
  let payload = { actionType: ADD_BUTTON_HOVER };
  AppDispatcher.dispatch(payload);
};
