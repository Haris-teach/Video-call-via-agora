import {LOGIN_REQUEST, LOGOUT_REQUEST} from './actionType';

export function Login(token) {
  return {
    type: LOGIN_REQUEST,
    payload: {token},
  };
}

export function logout() {
  return {type: LOGOUT_REQUEST};
}
