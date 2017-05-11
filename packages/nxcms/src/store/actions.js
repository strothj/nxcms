import axios from 'axios';

const UNKNOWN_ERR = 'internal server error';
const apiUrl = process.env.NODE_ENV === 'development'
  ? '/api'
  : 'https://nxcms-api.herokuapp.com/api';
let authToken = null; // eslint-disable-line
const apiPost = (resource, params) =>
  axios.post(`${apiUrl}/${resource}`, params);

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = (token, profile) => {
  authToken = token;
  return { type: LOGIN_SUCCESS, profile };
};

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const loginError = (message = UNKNOWN_ERR) => {
  authToken = null;
  return { type: LOGIN_ERROR, message };
};

export const login = (username, password) => async dispatch => {
  try {
    const { data } = await apiPost('session', { username, password });
    dispatch(loginSuccess(data.token, data.profile));
  } catch (e) {
    dispatch(loginError(e.response.data.message));
  }
};
