import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch } from 'react-redux';
import LoginStack from '../navigations/LoginStack';
import {removeToken} from '../actions';

export default function Logout (){
    const navigation = useNavigation();
    const dispatch = useDispatch();
    dispatch(removeToken())
    return (
        <LoginStack/>
    )
}