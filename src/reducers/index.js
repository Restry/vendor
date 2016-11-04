import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import user from './userReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  user,
  ajaxCallsInProgress
});

export default rootReducer;
