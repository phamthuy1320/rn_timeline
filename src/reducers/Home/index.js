import * as ActionTypes from '../../actionTypes/Home/ActionTypes';
import * as _ from 'lodash';
import getDataInitial from '../../components/HomeComponents/getHomeData';

const initialContact = [];

export function reducers (state = initialContact, action){
    switch (action.type) {
        case ActionTypes.ADD_CONTACT:
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email,
                    phone: action.payload.phone,
                    website: action.payload.website
                }
            ]    

        case ActionTypes.DELETE_CONTACT:
            return _.remove(state, obj => obj.id!=action.payload.id);

        case ActionTypes.SEARCH_CONTACT:
            return _.find(state, obj =>obj.name = action.payload.name)
        default:
            return state;
    }


}