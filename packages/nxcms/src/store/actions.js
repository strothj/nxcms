/* eslint-disable */
import axios from 'axios';

const apiUrl = process.env.NODE_ENV === 'development'
  ? '/api'
  : 'https://nxcms-api.herokuapp.com/api';
let authToken = null;

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = (token, profile) => {
  authToken = token;
  return { type: LOGIN_SUCCESS, profile };
};

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const loginError = message => {
  authToken = null;
  return { type: LOGIN_ERROR, message };
};

export const login = (username, password) => async (dispatch, getState) => {
  const res = await axios.post(`${apiUrl}/session`, { username, password });
  console.log(res); // eslint-disable-line no-console
};
