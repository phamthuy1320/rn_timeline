import * as ActionTypes from '../actionTypes/Home/ActionTypes';
import * as _ from 'lodash';

const initialContact = [];

export default function homeReducer (state = initialContact, action){
    switch (action.type) {
        case ActionTypes.GET_DATA:
            return _.sortedUniq(action.payload.data)
        case ActionTypes.ADD_CONTACT:
            return [
                ...state,
               { user:{
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email,
                    phone: action.payload.phone,
                    website: action.payload.website
                },img:{}}
            ]    

        case ActionTypes.DELETE_CONTACT:
            return _.remove(state, obj => obj.user.id!=action.payload.id);
        default:
            return state;
    }
}