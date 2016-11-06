import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function needReducer(state = initialState.needs, action) {
  switch (action.type) {
    case types.LOAD_NEEDS_SUCCESS:
      return action.needs;

    case types.CREATE_NEED_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.need)
      ];

    case types.UPDATE_NEED_SUCCESS:
      return [
        ...state.filter(need => need.id !== action.need.id),
        Object.assign({}, action.need)
      ];

    default:
      return state;
  }
}
