import React from 'react';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Login} from './LoginScreen';

export default function Logout (){
    const navigation = useNavigation();
    return (
        <Login/>
    )
}