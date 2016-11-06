import expect from 'expect';
import needReducer from './needReducer';
import * as actions from '../actions/needActions';

describe('Need Reducer', () => {
  it('should add need when passed CREATE_NEED_SUCCESS', () => {
    // arrange
    const initialState = [
      {title: 'A'},
      {title: 'B'}
    ];

    const newNeed = {title: 'C'};

    const action = actions.createNeedSuccess(newNeed);

    //act
    const newState = needReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');
  });

  it('should update need when passed UPDATE_NEED_SUCCESS', () => {
    // arrange
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'}
    ];

    const need = {id: 'B', title: 'New Title'};
    const action = actions.updateNeedSuccess(need);

    // act
    const newState = needReducer(initialState, action);
    const updatedNeed = newState.find(a => a.id == need.id);
    const untouchedNeed = newState.find(a => a.id == 'A');

    // assert
    expect(updatedNeed.title).toEqual('New Title');
    expect(untouchedNeed.title).toEqual('A');
    expect(newState.length).toEqual(3);
  });
});
