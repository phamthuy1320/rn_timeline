import * as ActionTypes from '../../actionTypes/Home/ActionTypes';



export function getData (data){
    return {
        type:ActionTypes.GET_DATA,
        payload:{
            data
        }
    }
}
export function addContact (name, email, website, phone){
    return {
        type: ActionTypes.ADD_CONTACT,
        payload:{
            name, email, website, phone, id:phone
        }
    }
}

export function deleteContact (id){
    return {
        type: ActionTypes.DELETE_CONTACT,
        payload:{
            id,
        }
    }
}