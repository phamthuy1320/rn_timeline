import React,{useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/LoginScreen';
import HomeStack from './HomeStack';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

export default function LoginStack(){
    return(
      
        <Stack.Navigator >
          <Stack.Screen
                  name='Login'
                  component={Login}
                  options = {
                      {headerTitle:'',
                      headerStyle:{
                          height:0
                      }
                  }
                  }
                />
          <Stack.Screen
                  name='HomeStack'
                  component = {HomeStack}
                  options={
                      {headerTitle:'',
                      headerStyle:{
                          height:0
                      },
                      headerLeft:''
                  }
                  }
              />  
                 
            <Stack.Screen
                name='SignUpScreen'
                component={SignUpScreen}
                options={{
                    headerTitle:'',
                    headerStyle:{
                        height:0
                    },
                    headerLeft:''
                }}
              />
          </Stack.Navigator>
    )
  }