import { LOAD_ENTRIES, FETCH_SINGLE_ENTRY } from '../actions/types';

const initialState = {
  entries: [],
  entry:[]
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
      return {
        ...state,
        entries: action.payload
      };
    case FETCH_SINGLE_ENTRY:
      return {
        ...state,
        entry: action.payload
      };

    default:
      return state;
  }
}
