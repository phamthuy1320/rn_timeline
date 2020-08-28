import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import Login from '../screens/LoginScreen';
import HomeStack from './HomeStack';
import SignUpScreen from '../screens/SignUpScreen';
import {setToken} from '../actions';

const Stack = createStackNavigator();

export default function LoginStack(){
    const token = useSelector(state=>state);
    console.log(token.tokenReducer)
    const dispatch = useDispatch();
    dispatch(setToken('Thuy'))
    if(token.tokenReducer==''){
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
    )}
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name = 'HomeStack'
                component = {HomeStack}
                options = {
                    {headerTitle:'',
                    headerStyle:{
                        height:0
                    }}
                }
            />
        </Stack.Navigator>
    )
  }