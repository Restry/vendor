import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageNeedPage} from './ManageNeedPage';

describe ('Manage Need Page', () => {
  it('sets error message when trying to save empty title', () => {
    const props = {
      authors: [],
      actions: { saveNeed: () => { return Promise.resolve(); }},
      need: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
    };

    const wrapper = mount(<ManageNeedPage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');

  });
});
