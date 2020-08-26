import React,{useState,useEffect} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import {styles} from './Styles/MainStyles';
import Button from '../components/Button';
import {useNavigation, useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch, useSelector} from 'react-redux';

import database from '../services/firebase';
import FBLoginButton from '../components/FBLoginButton';
import {setToken} from '../actions';

//const ACCOUNT_LOGIN ={'email':'','password':''};
//const account ={'name':'0','password':'0'};
export default function Login() {
    const [email,setEmail]= useState(null);
    const [password,setPassword] = useState(null); 
    const [alertEmail,setAlertEmail] = useState('');
    const [alertPassword, setAlertPassword] = useState('');
    const navigation = useNavigation();
    const [hasAccount, setHasAccount] = useState(false);

    const dispatch = useDispatch();
    const token = useSelector(state =>state);
    
    const saveToken = async(accessToken) =>{
        //account thuong
        await AsyncStorage.setItem('@accessToken', accessToken);
        const token = await AsyncStorage.getItem('@accessToken');
       
    }

    useEffect(()=>{
        try{
             database.ref('account').orderByValue().startAt(0).once("value", function(snapshot) {
                  snapshot.forEach(function(data) {
                      if(data.child('name').val()==email&&data.child('password').val()==password){
                            setHasAccount(true)
                        }
                   })
                 });
        }catch(err){console.log(err)}
        email==''? setAlertEmail('please fill email'):setAlertEmail('');
        password==''?setAlertPassword('please fill password'):setAlertPassword('');
    },[email,password]);

    const accountCanLogin = () =>{
        if(hasAccount===true){
            saveToken(email);
            dispatch(setToken(email));
            console.log(token.tokenReducer)
            navigation.navigate('HomeStack')}
        else if(hasAccount===false){
            alert("password or user wrong")}
        else alert("fill all please");
    }
    return(
        <View style={styles.container}>
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcome}>
                    Welcome to Login
                </Text>
            </View>

            <View style = {styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={text=>setEmail(text)}
                    placeholder='Email...'
                    textContentType='emailAddress'
                    value={email}
                />
                <Text style={styles.alert}>{alertEmail}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text=>setPassword(text)}
                    placeholder='Password...'
                    secureTextEntry={true}
                    value={password}
                />
                <Text style={styles.alert}>{alertPassword}</Text>
                <TouchableOpacity  onPress={()=>{alert('forgot password')}}>
                    <Text style={styles.other}>Forgot Password?</Text>
                </TouchableOpacity>
                <Button title = 'Login' onPress={accountCanLogin}/>
                <TouchableOpacity onPress={()=>navigation.navigate('SignUpScreen')}>
                    <Text style={styles.other}>Sign up</Text>
                </TouchableOpacity>
                <FBLoginButton/>
            </View>
        </View>
    );
}
