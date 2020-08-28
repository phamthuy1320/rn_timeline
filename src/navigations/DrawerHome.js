import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View,Text, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

import Home from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
// import LoginStack from './LoginStack';
import Logout from '../screens/Logout';
import {GetImage} from '../components/GetImage';
// import FBLogoutButton from '../components/FBLogoutButton';
// import AsyncStorage from '@react-native-community/async-storage';

const Drawer = createDrawerNavigator();

const HeaderDrawer = (props) =>{
    const [image, setImage] = useState('https://iupac.org/wp-content/uploads/2018/05/default-avatar-300x300.png')
    
    const getImage = () =>{
      console.log('image',image)
      GetImage(setImage)
    }
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
              source = {{uri:image}}
              style={{height:150,aspectRatio:1/1,borderRadius:90}}
          />
          <TouchableOpacity onPress = {getImage}>
            <Text>Edit Avatar</Text>
          </TouchableOpacity>
          <Text style={{fontSize:18}}>{props?.name}</Text>
          <Text>{props?.address}</Text>
      </View>
    )
  }
  
export default function DrawerHome(){
  const token = useSelector(state =>state);
  console.log('tokenrd',token.tokenReducer );

    return ( 
      <Drawer.Navigator initialRouteName = 'Home'>
         
         <Drawer.Screen
          name='MenuScreen'
          component={MenuScreen}
          options={{
            drawerLabel:()=>
              <View>
                <HeaderDrawer name = {token.tokenReducer}/>
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
        
        <Drawer.Screen
          name='Logout'
          component={Logout}
          options={{
            drawerLabel:()=>
              <View style={{flexDirection:'row'}}>
                <MaterialCommunityIcons name='logout' size={20} />
                <Text style={{marginHorizontal:5}}>Log out</Text>
              </View>
          }}
        />
          {/* <Drawer.Screen
          name='FBLogoutButton'
          component={FBLogoutButton}
          options={{
            drawerLabel:()=>
              <View style={{flexDirection:'row'}}>
                <MaterialCommunityIcons name='logout' size={20} />
                <Text style={{marginHorizontal:5}}>Log out fb</Text>
              </View>
          }}
        /> */}
      </Drawer.Navigator>
    )
  }
  