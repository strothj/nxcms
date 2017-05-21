import axios from 'axios';

let authToken = null; // eslint-disable-line

export const setToken = token => {
  authToken = token;
  localStorage.setItem('session', token);
};

export const removeToken = () => {
  authToken = null;
  localStorage.removeItem('session');
};

export const loadToken = () => {
  const token = localStorage.getItem('session');
  if (!token) return false;
  authToken = token;
  return true;
};

const request = async (method, resource, data) => {
  let res;
  const headers = authToken ? { Authorization: `Bearer ${authToken}` } : {};

  try {
    res = await axios({ method, url: `/api/${resource}`, headers, data });
  } catch (e) {
    if (e.response && e.response.status === 401) removeToken();
    throw e;
  }
  return res.data;
};

export const get = (resource, params) => request('get', resource, params);

export const post = (resource, params) => request('post', resource, params);

export const put = (resource, params) => request('put', resource, params);

export const del = (resource, params) => request('delete', resource, params);

export const extractError = e => {
  if (e.response && e.response.data && e.response.data.validationErrors) {
    const { validationErrors } = e.response.data;
    e.message = validationErrors[Object.keys(validationErrors)[0]];
  }
  return e;
};
