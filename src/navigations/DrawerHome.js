import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View,Text, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Home from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import LoginStack from './LoginStack';

const Drawer = createDrawerNavigator();

const HeaderDrawer = (props) =>{
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
          <Text style={{fontSize:18}}>{props?.name}</Text>
          <Text>{props?.address}</Text>
      </View>
    )
  }
  
export default function DrawerHome(){
    return ( 
      <Drawer.Navigator 
        initialRouteName='Home'
        
      >
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
  