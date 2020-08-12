import React from 'react';
import {View,Text,Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
//import HomeScreen from './src/screens/HomeScreen';
import HomeDetail from './src/screens/HomeDetail';
import ScanScreen from './src/screens/ScanScreen';
import CameraAccessScreen from './src/screens/CameraAccessScreen';
import Home from './src/screens/HomeScreen';
import MenuScreen from './src/screens/MenuScreen';
import Logout from './src/screens/Logout';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HeaderDrawer = () =>{
  return (
    <View 
      style={{
        marginTop:20,
        marginHorizontal:10, 
        marginBottom:50,
        justifyContent:'center', 
        alignItems:'center',
        width:'100%',
        
        }}>
      <Image
            source = {{uri:'https://iupac.org/wp-content/uploads/2018/05/default-avatar-300x300.png'}}
            style={{height:150,aspectRatio:1/1,borderRadius:90}}
        />
        <Text style={{fontSize:18}}>Rogger Hoffman</Text>
        <Text>San Francissco,CA</Text>
    </View>
  )
}

function DrawerHome(){
  return ( 
    <Drawer.Navigator 
      initialRouteName='Home'
      
    >
      <Drawer.Screen
        name='MenuScreen'
        component={MenuScreen}
        options={{
          drawerLabel:()=>
            <View>
              <HeaderDrawer/>
              <View  style={{flexDirection:'row'}}>
                <MaterialCommunityIcons name='account' size={20} />
                <Text style={{marginHorizontal:5}}>My Account</Text>
              </View>
              
            </View>
          
        }}
      />
      <Drawer.Screen 
        name='Home'
        component={Home}
        options={{
          drawerLabel:()=>
            <View style={{flexDirection:'row'}}>
              <MaterialCommunityIcons name='home' size={20} />
              <Text style={{marginHorizontal:5}}>Home</Text>
            </View>
          
        
        }}
        />
      
      {<Drawer.Screen
        name='LoginStack'
        component={LoginStack}
        options={{
          drawerLabel:()=>
            <View style={{flexDirection:'row'}}>
              <MaterialCommunityIcons name='logout' size={20} />
              <Text style={{marginHorizontal:5}}>Log out</Text>
            </View>
        }}
      />}
    </Drawer.Navigator>
  )
}

function HomeStack(){
  return (
          <Stack.Navigator>
              <Stack.Screen 
                  name = 'DrawerHome'
                  component = {DrawerHome}
                 
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

function LoginStack(){
  return(
    <NavigationContainer>
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
      </NavigationContainer>
  )
}

export default function App() {
  return (
    <LoginStack/>
  );
}


