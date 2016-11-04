import * as types from '../actions/actionTypes';
import initialState from './initialState';
import jwt_decode from 'jwt-decode';

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.USER_LOGIN_SUCCESS:
      let userData = action.userinfo;
      let _token = userData.token;
      let _decoded = jwt_decode(_token);
      userData.user.decodeToken = _decoded;

      return Object.assign({}, state, userData.user);

    case types.USER_REGISTER_SUCCESS:
      userData = action.userinfo;
      _token = userData.token;
      _decoded = jwt_decode(_token);
      userData.user.decodeToken = _decoded;

      return Object.assign({}, state, userData.user);

    case types.GET_USER_SUCCESS:

      return Object.assign({}, state, { allUser: action.usres });
    default:
      return state;
  }
}
