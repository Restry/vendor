import {combineReducers} from 'redux';
import needs from './needReducer';
import authors from './authorReducer';
import user from './userReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  needs,
  authors,
  user,
  ajaxCallsInProgress
});

export default rootReducer;
