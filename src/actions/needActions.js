import * as types from './actionTypes';
import needApi from '../api/mockNeedApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import axios from 'axios';

export function loadNeedsSuccess(needs) {
  return { type: types.LOAD_NEEDS_SUCCESS, needs};
}

export function createNeedSuccess(need) {
  return {type: types.CREATE_NEED_SUCCESS, need};
}

export function updateNeedSuccess(need) {
  return {type: types.UPDATE_NEED_SUCCESS, need};
}

export function loadNeeds() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return axios.get('/api/needs').then(res => {
      dispatch(loadNeedsSuccess(res.data));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveNeed(need) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return axios.post('/api/needs',need).then(res => {
        dispatch(createNeedSuccess(res.data.need));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
