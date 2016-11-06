import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as needActions from '../actions/needActions';

describe('Store', function() {
  it('Should handle creating needs', function() {
    // arrange
    const store = createStore(rootReducer, initialState);
    const need = {
      title: "Clean Code"
    };

    // act
    const action = needActions.createNeedSuccess(need);
    store.dispatch(action);

    // assert
    const actual = store.getState().needs[0];
    const expected = {
      title: "Clean Code"
    };

    expect(actual).toEqual(expected);
  });
});
