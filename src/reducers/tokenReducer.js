import * as ActionTypes from '../actionTypes/ActionTypes';
import * as _ from 'lodash';

export default function tokenReducer (state = '', action){
    switch (action.type) {
        case ActionTypes.SET_TOKEN:
            return action.payload.accessToken;
        case ActionTypes.REMOVE_TOKEN:
            return '';
        default:
            return state;
    }
}