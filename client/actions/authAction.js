import axios from 'axios';
import { GET_ERRORS } from './types';

// eslint-disable-next-line import/prefer-default-export
export const registerUser = userData => (dispatch) => {
  axios
    .post('/api/v1/auth/signup', userData)
    .then(response => console.log(response.data))
    .catch((error) => {
      // console.log('error from action', error.response.data);
      dispatch({
       type: GET_ERRORS,
        payload: error.response.data
      });
   });
};
