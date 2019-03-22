import { SET_CURRENT_USER } from '../actions/types';
import isEmpty from '../helpers/is-empty';

const initialState = {
  isAuthenticated: false,
  user: {}
};
/**
 * Handle user authentication
 * @param {state} state
 * @param {action} action
 * @returns {reducer} Returns reducer
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
