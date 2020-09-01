import * as ActionTypes from '../actionTypes/ActionTypes';
import * as _ from 'lodash';

const initialState = {
    uri:'https://iupac.org/wp-content/uploads/2018/05/default-avatar-300x300.png',
    user:''
}
export default function tokenReducer (state = initialState , action){
    switch (action.type) {
        case ActionTypes.SET_TOKEN:
            return {uri:action.payload.uri,user:action.payload.accessToken};
        case ActionTypes.REMOVE_TOKEN:
            return initialState;
        
        default:
            return state;
    }
}