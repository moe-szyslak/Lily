import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_UPDATE } from './../constants/constants';

function auth(state = {}, action) {
  switch(action.type) {
    case AUTH_LOGIN:
      return action.auth;
    break;

    case AUTH_UPDATE:
      return Object.assign({}, state, action.auth);
    break;

    case AUTH_LOGOUT:
      return {};
    break;

    default:
      return state;
    break;
  }
}

module.exports = auth;