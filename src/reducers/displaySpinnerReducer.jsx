import { HIDE_SPINNER } from '../actions';

export default function displaySpinnerReducer(state = false, action) {
  
  switch (action.type) {
    case HIDE_SPINNER:
      return action.payload;
    default:
      return state;
  }
}