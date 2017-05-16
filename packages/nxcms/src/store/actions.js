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
