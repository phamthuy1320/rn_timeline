import * as ActionTypes from '../actionTypes/Home/ActionTypes';
import * as _ from 'lodash';

const initialContact = [];

export default function homeReducer (state = initialContact, action){
    switch (action.type) {
        case ActionTypes.GET_DATA:
            return _.sortBy( _.uniqWith(_.concat(state, action.payload.data),_.isEqual),[obj =>obj.user.name.charAt(0)])
        case ActionTypes.ADD_CONTACT:
            return _.sortBy([
               { user:{
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email,
                    phone: action.payload.phone,
                    website: action.payload.website
                },img:{thumbnailUrl:action.payload.uri}}, ...state
            ],[obj =>obj.user.name.charAt(0)]    )

        case ActionTypes.DELETE_CONTACT:
            return _.remove(state, obj => obj.user.id!=action.payload.id);
        case ActionTypes.CLONE_CONTACT:
            let _state =_.cloneDeep(state);//copy and create new object 
            let _find =  _.cloneDeep(_.find(_state, obj=>obj.user.id == action.payload.id));
            const _prev =  _.cloneDeep(_.find(_state, obj=>obj.user.id == action.payload.id));
            let __state =_.filter(_state, (obj)=>obj.user.id!=_prev.user.id);
           
            _.update(_find, _find.user.id, ()=>_find.user.id=action.payload.id+action.payload.name)
            _.update(_find, _find.img.id, ()=>_find.img.id=action.payload.id+action.payload.name)
            _.update(_find, _find.user.name, ()=>_find.user.name=action.payload.name)
            _.update(_find, _find.user.email, ()=>_find.user.email=action.payload.email )
            _.update(_find, _find.user.website, ()=>_find.user.website=action.payload.website )
            _.update(_find, _find.user.phone, ()=>_find.user.phone=action.payload.phone )
            _.update( _find, _find.img.thumbnailUrl, ()=>_find.user.uri=action.payload.uri )
           
            console.log('find', _find.user.name);
            console.log('find', _prev.user.id);
            console.log('state', __state.length);
           
            return _.update(...state, state,()=>{return [_find, __state]});
 
        default:
            return state;
    }
}