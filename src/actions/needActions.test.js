import expect from 'expect';
import * as needActions from './needActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// Test a sync action
describe('Need Actions', () => {
  describe('createNeedSuccess', () => {
    it('should create a CREATE_NEED_SUCCESS action', () => {
      //arrange
      const need = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_NEED_SUCCESS,
        need: need
      };

      //act
      const action = needActions.createNeedSuccess(need);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_NEEDS_SUCCESS when loading needs', (done) => {
    // Here's an example call to nock.
    // nock('http://example.com/')
    //   .get('/needs')
    //   .reply(200, { body: { need: [{ id: 1, firstName: 'Cory', lastName: 'House'}] }});

    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_NEEDS_SUCCESS, body: {needs: [{id: 'clean-code', title: 'Clean Code'}]}}
    ];

    const store = mockStore({needs: []}, expectedActions, done);
    store.dispatch(needActions.loadNeeds()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_NEEDS_SUCCESS);
      done();
    });
  });
});
