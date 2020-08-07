import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

export default function AppNavigation(){
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




