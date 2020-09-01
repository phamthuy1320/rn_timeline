import * as ActionTypes from '../actionTypes/Home/ActionTypes';
import * as _ from 'lodash';

const initialContact = [];
export default function homeReducer (state = initialContact, action){
    switch (action.type) {
        case ActionTypes.GET_DATA:
            return _.sortBy( _.uniqWith(_.concat(state, action.payload.data),_.isEqual),[obj =>obj.user.name.charAt(0)])
        case ActionTypes.ADD_CONTACT:
            const add_contact =  _.sortBy([
               { user:{
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email,
                    phone: action.payload.phone,
                    website: action.payload.website
                },img:{
                    id:action.payload.id,
                    thumbnailUrl:action.payload.uri}}, ...state
            ],[obj =>obj.user.name.charAt(0)]    )
            return add_contact;

        case ActionTypes.DELETE_CONTACT:
            const objDelete =_.find(state, function(obj){return obj.user.id == action.payload.id})
            return _.remove(state,function(obj){return !_.isEqual(obj, objDelete)});
        case ActionTypes.CLONE_CONTACT:
            return state.map(
                (obj)=>{ 
                    if(typeof obj =='object'){
                        if(obj.user.id == action.payload.user.id){
                        return {user:{...obj.user, ...action.payload.user},img:{...obj.img,...action.payload.img}}
                    }
                    return obj;
                }
                }
            );
        default:
            return state;
    }
}