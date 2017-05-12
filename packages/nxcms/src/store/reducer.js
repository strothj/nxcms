import * as actions from './actions';

const initialState = {
  profile: null,
  loginError: null,
  loginRedirect: null,
};

const handlers = {
  [actions.LOGIN_SUCCESS]: (state, { profile }) => ({
    ...state,
    profile,
    loginError: null,
  }),

  [actions.LOGIN_ERROR]: (state, { message }) => ({
    ...state,
    loginError: message,
  }),

  [actions.LOGIN_REDIRECT]: (state, { url }) => ({
    ...state,
    loginRedirect: url,
  }),
};

const reducer = (state = initialState, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

export default reducer;
