import axios from 'axios';
import { LOAD_ENTRIES, GET_ERRORS } from './types';

// eslint-disable-next-line import/prefer-default-export
export const saveNote = newNote => (dispatch) => {
  // GET ID FROM REQUEST OBJECT
  const Request = {
    text: newNote
  };
  axios
    .post('/api/v1/entries', Request)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
      // error.data.message
    });
};
export const getNotes = () => (dispatch) => {
  axios
    .get('/api/v1/entries')
    .then((response) => {
      console.log(response);
      // dispatch({
      // type: LOAD_ENTRIES,
      // payload: response.json()
    //  });
    })
    .catch((error) => {
      dispatch({
        type: GET_ERRORS,
        payload: error.data
      });
    });
};
