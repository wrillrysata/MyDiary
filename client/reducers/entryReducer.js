import { LOAD_ENTRIES } from '../actions/types';

const initialState = {
  entries: {}
};
  /**
   * Fetch entries
   * @param {state} state
   * @param {action} action
   * @returns {reducer} Returns reducer
   */
export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_ENTRIES:
      console.log(action.payload);

      break;
    default:
      return state;
      // ...state,
      //  entries: action.payload

    // default:
       // return state;
  }
}
