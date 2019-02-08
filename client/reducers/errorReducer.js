import { GET_ERRORS } from '../actions/types';

const initialState = {
  errors: {}
};
/**
 * Handles errors
 * @param {state} state
 * @param {action} action
 * @returns {reducer} Returns reducer
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
}
