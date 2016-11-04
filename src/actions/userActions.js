import * as types from './actionTypes';

import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import axios from 'axios';

export function getUserSuccess(users) {
  return { type: types.GET_USER_SUCCESS, users };
}

export function userLoginSuccess(userinfo) {
  return { type: types.USER_LOGIN_SUCCESS, userinfo };
}

export function userRegisterSuccess(userinfo) {
  return { type: types.USER_REGISTER_SUCCESS, userinfo };
}

export function getAllUser(token) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return axios.get('/api/users?token='+token).then(res=>{
      dispatch(getUserSuccess(res.data));
    }).catch(error=>{
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

export function login(user) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return axios.post('/api/users/auth', user).then((res) => {
      dispatch(userLoginSuccess(res.data));
    }).catch((error) => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

export function registration(user) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return axios.post('/api/users', user).then(res => {
      dispatch(userRegisterSuccess(res.data));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}
