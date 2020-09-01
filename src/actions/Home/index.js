import * as ActionTypes from '../../actionTypes/Home/ActionTypes';

let idContact = Math.random()

export function getData (data){
    return {
        type:ActionTypes.GET_DATA,
        payload:{
            data
        }
    }
}
export function addContact (name, email, website, phone,uri){
    return {
        type: ActionTypes.ADD_CONTACT,
        payload:{
            name, email, website, phone, id:idContact++ + name,uri
        }
    }
}

export function deleteContact (id){
    return {
        type: ActionTypes.DELETE_CONTACT,
        payload:{
            id
        }
    }
}

export function cloneContact (id,name, email, website, phone,uri ) {
    return {
        type:ActionTypes.CLONE_CONTACT,
        payload:{
            user:{
               id,name, email, website, phone 
            },img:{
                id:id,
                thumbnailUrl:uri
            }
        }
    }
}


