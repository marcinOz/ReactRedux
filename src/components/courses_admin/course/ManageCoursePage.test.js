import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from "./ManageCoursePage";

describe('Manage Course Page', () => {
    it('sets error massage when trying to save empty title', () => {
        const props = {
            authors: [],
            actions: {saveCourse: () => { return Promise.resolve(); }},
            course: {id: '', watchHref: '', title: '', authorId: '', category: ''}
        };
        const wrapper = mount(<ManageCoursePage {...props}/>);
        const saveBtn = wrapper.find('input').last();
        expect(saveBtn.prop('type')).toBe('submit');
        saveBtn.simulate('click');
        expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters');
    });
});