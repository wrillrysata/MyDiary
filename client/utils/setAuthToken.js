import axios from 'axios';

const setAuthToken = (token) => {
  token ? axios.defaults.headers.common.Authorization = token :
    delete axios.defaults.headers.common.Authorization;
};
export default setAuthToken;
