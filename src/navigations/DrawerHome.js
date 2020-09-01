import React, {useState} from 'react';
import {createDrawerNavigator } from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import {View,Text, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

import Home from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import Logout from '../screens/Logout';
import CameraAccessScreen from '../screens/CameraAccessScreen';
import {GetImage} from '../components/GetImage';

const Stack = createStackNavigator();

const StackHome = () =>{
  return (
    <Stack.Navigator>
      <Stack.Screen
        name = 'Home'
        component = {Home}
      />
      <Stack.Screen
        name = 'MenuScreen'
        component = {MenuScreen}
      />
      <Stack.Screen
        name = 'Logout'
        component = {Logout}
      />
    </Stack.Navigator>
  )
}

const HeaderDrawer = ()=>{
  const token = useSelector(state=>state);
  const navigation = useNavigation()
  return (
    <View>
    <View style = {styles.headerDrawer}>
        <Image
          source = {{uri:token.tokenReducer.uri}}
          style = {styles.avatarDrawer}
        />
      <Text style = {styles.userName}>{token.tokenReducer.user}</Text>
    </View>
    <ScrollView style = {styles.listItem}>
      <TouchableOpacity style = {styles.buttonDrawer} onPress = {()=>navigation.navigate('MenuScreen')}>
        <MaterialCommunityIcons name = 'account' size ={22}/>
        <Text style = {styles.buttonTitle}>My Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.buttonDrawer} onPress = {()=>navigation.navigate('Home')}>
        <MaterialCommunityIcons name = 'home' size = {22} />
        <Text style = {styles.buttonTitle}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.buttonDrawer} onPress = {()=>navigation.navigate('Logout')}>
        <MaterialCommunityIcons name = 'logout' size = {22} />
        <Text style = {styles.buttonTitle}>Log Out</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const Drawer = createDrawerNavigator()

export default function DrawerHome (){
  return (
    <Drawer.Navigator 
      drawerContent = {()=><HeaderDrawer/>}
    >
      {/* <Drawer.Screen
        name = 'StackHome'
        component = {StackHome}
      /> */}
      <Drawer.Screen
        name = 'Home'
        component = {Home}
      />
      <Drawer.Screen
        name = 'MenuScreen'
        component = {MenuScreen}
      />
      <Drawer.Screen
        name = 'Logout'
        component = {Logout}
      />
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  buttonDrawer:{
    flexDirection:'row',
    height:40,
    width:'90%',
    
  },
  buttonTitle:{
    paddingHorizontal:20
  },
  headerDrawer:{
   height:200,
   borderBottomWidth:1,
   marginTop:50
    
  },
  avatarDrawer:{
    height:150,
    aspectRatio:1/1,
    borderRadius:90,
    backgroundColor:'gray',
    alignSelf:'center'
  },
  userName:{
    textAlign:'center'
  },
  listItem:{
    marginLeft:20,
    marginTop:20
  }
})