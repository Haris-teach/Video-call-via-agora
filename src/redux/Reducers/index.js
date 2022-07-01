import {combineReducers} from 'redux';
import authReducer from './authReducer';

import notPresistReducer from './notPresistReducer';

const rootReducer = combineReducers({
  authReducer,

  notPresistReducer,
});

export default rootReducer;
