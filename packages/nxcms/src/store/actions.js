/* eslint-disable no-underscore-dangle */
import * as client from './client';

const UNKNOWN_ERR = 'internal server error';

export const SHOW_SIDE_BAR = 'SHOW_SIDE_BAR';
export const showSideBar = () => ({ type: SHOW_SIDE_BAR });
export const HIDE_SIDE_BAR = 'HIDE_SIDE_BAR';
export const hideSideBar = () => ({ type: HIDE_SIDE_BAR });

export const SHOW_LOGIN_DIALOG = 'SHOW_LOGIN_DIALOG';
export const showLoginDialog = () => ({ type: SHOW_LOGIN_DIALOG });
export const HIDE_LOGIN_DIALOG = 'HIDE_LOGIN_DIALOG';
export const hideLoginDialog = () => ({ type: HIDE_LOGIN_DIALOG });

export const SHOW_PROFILE_EDIT_DIALOG = 'SHOW_PROFILE_EDIT_DIALOG';
export const showProfileEditDialog = () => ({ type: SHOW_PROFILE_EDIT_DIALOG });
export const HIDE_PROFILE_EDIT_DIALOG = 'HIDE_PROFILE_EDIT_DIALOG';
export const hideProfileEditDialog = () => ({ type: HIDE_PROFILE_EDIT_DIALOG });

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = (profile, token) => {
  if (token) client.setToken(token);
  return { type: LOGIN_SUCCESS, profile };
};

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const loginError = (message = UNKNOWN_ERR) => {
  client.removeToken();
  return { type: LOGIN_ERROR, message };
};

export const SESSION_LOADING = 'SESSION_LOADING';
export const sessionLoading = () => ({ type: SESSION_LOADING });
export const SESSION_LOADED = 'SESSION_LOADED';
export const sessionLoaded = () => ({ type: SESSION_LOADED });
export const loadSession = () => async dispatch => {
  dispatch(sessionLoading());
  try {
    if (client.loadToken()) {
      const { profile } = await client.get('session');
      dispatch(loginSuccess(profile));
    }
  } catch (e) {
    dispatch(sessionLoaded());
    throw e;
  }
  dispatch(sessionLoaded());
};

export const login = (username, password) => async dispatch => {
  try {
    const { profile, token } = await client.post('session', {
      username,
      password,
    });
    dispatch(loginSuccess(profile, token));
  } catch (e) {
    dispatch(loginError('Invalid username or password'));
    throw e;
  }
};

export const logout = () => {
  localStorage.removeItem('session');
  document.location.href = '/';
};

export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const updateProfileSuccess = profile => ({
  type: UPDATE_PROFILE_SUCCESS,
  profile,
});
export const UPDATE_PROFILE_ERROR = 'UPDATE_PROFILE_ERROR';
export const updateProfileError = message => ({
  type: UPDATE_PROFILE_ERROR,
  message,
});
export const updateProfile = userUpdate => async dispatch => {
  try {
    await client.put(`users/${userUpdate._id}`, userUpdate);
    dispatch(updateProfileSuccess(userUpdate));
    dispatch(hideProfileEditDialog());
  } catch (e) {
    client.extractError(e);
    dispatch(updateProfileError(e.message));
    throw e;
  }
};

export const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS';
export const getArticlesSuccess = articles => ({
  type: GET_ARTICLES_SUCCESS,
  articles,
});

export const GET_ARTICLES_ERROR = 'GET_ARTICLES_ERROR';
export const getArticlesError = () => ({ type: GET_ARTICLES_ERROR });

export const getArticles = () => async dispatch => {
  try {
    const articles = await client.get('articles');
    dispatch(getArticlesSuccess(articles));
  } catch (e) {
    dispatch(getArticlesError(e.message));
    throw e;
  }
};

export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const getUsersSuccess = users => ({ type: GET_USERS_SUCCESS, users });
export const GET_USERS_ERROR = 'GET_USERS_ERROR';
export const getUsersError = message => ({ type: GET_USERS_ERROR, message });
export const getUsers = () => async dispatch => {
  try {
    const users = await client.get('users');
    dispatch(getUsersSuccess(users));
  } catch (e) {
    dispatch(getUsersError(e.message));
    throw e;
  }
};

export const SELECT_ARTICLE = 'SELECT_ARTICLE';
export const selectArticle = id => ({ type: SELECT_ARTICLE, id });

export const EDIT_ARTICLE_SUCCESS = 'EDIT_ARTICLE_SUCCESS';
export const editArticleSuccess = () => ({
  type: EDIT_ARTICLE_SUCCESS,
});
export const EDIT_ARTICLE_ERROR = 'EDIT_ARTICLE_ERROR';
export const editArticleError = message => ({
  type: EDIT_ARTICLE_ERROR,
  message,
});
export const editArticle = article => async dispatch => {
  try {
    const method = article._id ? 'put' : 'post';
    const path = article._id ? `/${article._id}` : '';
    await client[method](`articles${path}`, article);
    dispatch(editArticleSuccess());
    dispatch(getArticles());
  } catch (e) {
    client.extractError(e);
    dispatch(editArticleError(e));
    throw e;
  }
};
