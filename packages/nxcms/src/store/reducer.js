import * as actions from './actions';

const initialState = {
  profile: null,
  loginError: null,
  showLoginDialog: false,
  showSideBar: false,
  sessionLoading: false,
};

const handlers = {
  [actions.SHOW_SIDE_BAR]: state => ({ ...state, showSideBar: true }),
  [actions.HIDE_SIDE_BAR]: state => ({ ...state, showSideBar: false }),

  [actions.SESSION_LOADING]: state => ({ ...state, sessionLoading: true }),
  [actions.SESSION_LOADED]: state => ({ ...state, sessionLoading: false }),

  [actions.SHOW_LOGIN_DIALOG]: state => ({ ...state, showLoginDialog: true }),
  [actions.HIDE_LOGIN_DIALOG]: state => ({ ...state, showLoginDialog: false }),

  [actions.LOGIN_SUCCESS]: (state, { profile }) => ({
    ...state,
    profile,
    loginError: null,
  }),

  [actions.LOGIN_ERROR]: (state, { message }) => ({
    ...state,
    loginError: message,
  }),
};

const reducer = (state = initialState, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

export default reducer;
