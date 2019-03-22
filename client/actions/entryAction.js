import axios from 'axios';
import { LOAD_ENTRIES, GET_ERRORS, FETCH_SINGLE_ENTRY } from './types';

// eslint-disable-next-line import/prefer-default-export
export const saveNote = (newNote, history) => (dispatch) => {
  // GET ID FROM REQUEST OBJECT
  const Request = {
    text: newNote
  };
  axios
    .post('/api/v1/entries', Request)
    .then(response => 
      window.location.href = '/dashboard')
    .catch((error) => {
      dispatch({
        type: GET_ERRORS,
        payload: error.data.message
      });
    });
};
export const getNotes = () => (dispatch) => {
  axios
    .get('/api/v1/entries')
    .then((response) => {
      dispatch({
        type: LOAD_ENTRIES,
        payload: response.data.entries
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_ERRORS,
        payload: error.data
      });
    });
};
export const editPost = (id, history) => (dispatch) =>{
  history.push(`/edit/${id}`);
}
export const getOne = (id) => (dispatch) => {
  const url = `/api/v1/entries/${id}`;
  axios
    .get(url)
    .then((response) => {
      dispatch({
        type: FETCH_SINGLE_ENTRY,
        payload: response.data.entry
      });
     // history.push(`/edit/${id}`);
    })
    .catch((error) => {
      dispatch({
        type: GET_ERRORS,
        payload: error.data
      });
    });
};
export const updateNote = (newNote, id) => (dispatch) => {
  const Request = {
    id,
    body: newNote
  };
  const url = '/api/v1/entries/';
  axios
    .put(url, Request)
    .then((response) => {
      window.location.href = '/dashboard'
    })
    .catch((error) => {
      dispatch({
        type: GET_ERRORS,
        payload: error.data
      });
    });
    
}
export const deleteNote = (id, history) => (dispatch) => {
  const url = `/api/v1/entries/${id}`;
  axios
    .delete(url)
    .then(response => 
      window.location.href = '/dashboard')
    .catch((error) => {
      dispatch({
        type: GET_ERRORS,
        payload: error.data
      });
    });

}