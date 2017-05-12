import axios from 'axios';

const UNKNOWN_ERR = 'internal server error';
let authToken = null; // eslint-disable-line
const apiPost = (resource, params) => axios.post(`/api/${resource}`, params);

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
  apiPost('session', { username, password })
    .then(({ data }) => dispatch(loginSuccess(data.token, data.profile)))
    .catch(() => dispatch(loginError('Invalid username or password')));
};

export const LOGIN_REDIRECT = 'LOGIN_REDIRECT';
export const loginRedirect = url => ({ type: LOGIN_REDIRECT, url });
