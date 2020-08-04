import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createNavigator} from '@react-navigation/native'
import {createDraweNavigator} from '@react-navigation/drawer';


import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';



const Stack = createStackNavigator();
const Navigator = createNavigator();
//const Drawer = createDrawerNavigator();


const LoginStack = () =>{
    return (
            <Stack.Navigator>
                <Stack.Screen
                    name='LoginScreen'
                    component={LoginScreen}
                />
                <Stack.Screen
                    name='SignUpScreen'
                    component={SignUpScreen}
                />      
            </Stack.Navigator>
    );
}

export default LoginStack;



