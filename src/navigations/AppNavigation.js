import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import Home from '../screens/HomeScreen';
//import DetailScreen from '../screens/DetailScreen';
import HomeDetail from '../screens/HomeDetail';
import MenuScreen from '../screens/MenuScreen';
import ScanScreen from '../screens/ScanScreen';
import CameraAccessScreen from '../screens/CameraAccessScreen';



const Stack = createStackNavigator();


 const HomeScreen = () =>{
    return (
            <Stack.Navigator>
                <Stack.Screen 
                    name = 'Home'
                    component = {Home}
                    options = {{
                        headerTitle:'',
                        headerStyle: {
                            height:0
                        }
                
                    }}
                />
                <Stack.Screen 
                    name = 'HomeDetail'
                    component = {HomeDetail}
                    options={{
                        headerTitle:'',
                        headerStyle:{
                            height:0
                        }
                    }}
                />
                <Stack.Screen 
                    name = 'ScanScreen'
                    component = {ScanScreen}
                    options={{
                        headerTitle:'',
                        headerStyle:{
                            height:0
                        }
                    }}
                />
                 <Stack.Screen 
                    name = 'CameraAccessScreen'
                    component = {CameraAccessScreen}
                    options={{
                        headerTitle:'',
                        headerStyle:{
                            height:0
                        }
                    }}
                   
                />
                <Stack.Screen
                    name = 'MenuScreen'
                    component = {MenuScreen}
                    options= {{
                        headerTitle:'',
                        headerStyle:{
                            height:0
                        }
                    }}
                />
               
            </Stack.Navigator>
        
    )
}

export default function AppNavigation(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='LoginScreen'
                    component={LoginScreen}
                />
                <Stack.Screen
                    name='SignUpScreen'
                    component={SignUpScreen}
                />      
                <Stack.Screen
                    name='HomeScreen'
                    component = {HomeScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
        
    );
}




