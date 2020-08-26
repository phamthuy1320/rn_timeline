import * as ActionTypes from '../actionTypes/ActionTypes';

export function setToken(accessToken){
    return {
        type:ActionTypes.SET_TOKEN,
        payload:{
            accessToken
        }
    }
}

export function removeToken(){
    return {
        type:ActionTypes.REMOVE_TOKEN
    }
}