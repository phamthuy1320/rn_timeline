//github taoquynh
import React from 'react';
import { View, StyleSheet, TouchableOpacity , Text} from 'react-native';
import {  AccessToken, LoginManager } from 'react-native-fbsdk';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from  '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {setToken} from '../actions';


// const  saveToken = async (accessToken) =>{
//   try {
//     await AsyncStorage.setItem('@token', accessToken);
//   } catch (error) {
//     console.log(error)
//   }
// }

export default function FBLoginButton (){
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onLogin = async() =>{await LoginManager.logInWithPermissions(['public_profile', 'email']);
    const data = await AccessToken.getCurrentAccessToken();
    const name  =  await AccessToken.userID;
    
    console.log(data.accessToken.toString())
    console.log('permission', name.toString())
    if(data!=null){
      // saveToken(data.accessToken.toString());
      
      // navigation.navigate('HomeStack');
      dispatch(setToken(data.accessToken.toString()));
      // dispatch(setToken(JSON.stringify(permission.grantedPermissions[1])));
    }else {
      alert('Can\'t login with facebook, try sign up with new account' )
    }
  }
        
    return (
      <View style={styles.container}>
        <TouchableOpacity style = {styles.loginButton} onPress = {onLogin} >
          <AntDesign name = 'facebook-square' color = '#fff' size = {20}/>
          <Text style= {styles.title} > Login with Facebook</Text>
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
      borderWidth:1,
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