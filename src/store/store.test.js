import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', function () {
    it('Should handle creating courses', () => {
        //arrange
        const store = createStore(rootReducer, initialState);
        const course = { title: "Clean Code" };
        const course2 = { title: "New Title" };
        //act
        const action = courseActions.createCourseSuccess(course);
        store.dispatch(action);
        const action2 = courseActions.createCourseSuccess(course2);
        store.dispatch(action2);
        //assert
        const actual = store.getState().courses[0];
        expect(actual).toEqual(course);

        const actual2 = store.getState().courses[1];
        expect(actual2).toEqual(course2);
    });
});