import {LOGIN_REQUEST, LOGOUT_REQUEST} from '../Actions/actionType';

const INITIAL_STATE = {
  id: 1,
  userName: 'M.Haris',
  firstName: 'Muhammad',
  lastName: 'Haris',
  email: 'muhammadharis4999@gmail.com',
  password: '123456',
  token: null,
  loading: false,
  isLogin: false,
  externalId: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLogin: true,
        token: action.payload.token,
      };
      break;

    case LOGOUT_REQUEST:
      return {
        ...state,
        isLogin: false,
        token: null,
        userName: 'M.Haris',
        firstName: 'Muhammad',
        lastName: 'Haris',
        id: 1,
        email: 'muhammadharis4999@gmail.com',
      };
      break;

    default:
      return state;
  }
};
