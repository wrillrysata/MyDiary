import { TEST_DISPATCH } from '../actions/types';

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
    case TEST_DISPATCH:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
