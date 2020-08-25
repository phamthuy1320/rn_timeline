
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Logout from '../screens/Logout';
import SignUpScreen from '../screens/SignUpScreen';
import HomeStack from './HomeStack';

const Stack = createStackNavigator();


export default function LogoutStack (){
    return (
      <Stack.Navigator >
          <Stack.Screen
            name='Logout'
            component={Logout}
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