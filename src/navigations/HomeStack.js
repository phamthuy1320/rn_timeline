import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeDetail from '../screens/HomeDetail';
import ScanScreen from '../screens/ScanScreen';
import CameraAccessScreen from '../screens/CameraAccessScreen';
import MenuScreen from '../screens/MenuScreen';
import DrawerHome from './DrawerHome';
import QRScanSuccess from '../screens/QRScanSuccess';


const Stack = createStackNavigator();

export default function HomeStack(){
    
    return (
            <Stack.Navigator>
                <Stack.Screen 
                    name = 'DrawerHome'
                    component = {DrawerHome}
                />
                {/* <Stack.Screen 
                    name = 'Home'
                    component = {Home}
                   
                /> */}
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
                    name = 'QRScanSuccess'
                    component = {QRScanSuccess}
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