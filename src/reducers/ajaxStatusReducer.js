import * as types from '../actions/actionsTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
    return type.indexOf('_SUCCESS') !== -1;
}

export default function ajaxStatusReducer(state = initialState.ajaxCallInProgress, action) {
    if (action.type === types.BEGIN_AJAX_CALL) {
        return state + 1;
    } else if (action.type === types.AJAX_CALL_ERROR
        || actionTypeEndsInSuccess(action.type)) {
        return state -1;
    }
    return state;
}