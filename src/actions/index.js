import * as ActionTypes from '../actionTypes/ActionTypes';

export function setToken(uri,accessToken){
    return {
        type:ActionTypes.SET_TOKEN,
        payload:{
            uri,accessToken
        }
    }
}

export function removeToken(){
    return {
        type:ActionTypes.REMOVE_TOKEN
    }
}

