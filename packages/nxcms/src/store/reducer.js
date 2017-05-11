import * as actions from './actions';

const initialState = {
  profile: null,
};

const handlers = {
  [actions.LOGIN_SUCCESS]: (state, { profile }) => ({ ...state, profile }),
};

const reducer = (state = initialState, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

export default reducer;
