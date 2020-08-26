import React from 'react';
import { View, StyleSheet, TouchableOpacity , Text} from 'react-native';
import {  AccessToken, LoginManager } from 'react-native-fbsdk';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from  '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';


const  removeToken = async () =>{
  try {
    await AsyncStorage.removeItem('@token');
  } catch (error) {
    console.log(error)
  }
}

export default function FBLoginButton (){
  const navigation = useNavigation();
  const onLogout = async() =>{
    await LoginManager.logOut();
    console.log('logout');
    removeToken();
    navigation.navigate('LoginStack')
  }
        
    return (
      <View style={styles.container}>
        <TouchableOpacity style = {styles.loginButton} onPress = {onLogout} >
          <AntDesign name = 'facebook-square' color = '#fff' size = {20}/>
          <Text style= {styles.title} > Log out </Text>
        </TouchableOpacity>
      </View>
    );
  
};
;
const styles = StyleSheet.create({
    container:{
      marginTop:10,
      alignItems:'center',
      height:40,
      backgroundColor:'blue',
      marginHorizontal:10,
      borderRadius:20,
      justifyContent:'center',
     
    },
    loginButton:{
      alignContent:'center',
      alignSelf:'center',
      flexDirection:'row'
    },
    title:{
      color:'#fff',
      textAlign:'center',
      fontWeight:'bold'

    }
})