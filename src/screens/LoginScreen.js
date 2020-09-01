import React,{useState,useEffect} from 'react';
import {View,Text,TextInput,TouchableOpacity,Image, ScrollView} from 'react-native';

import {styles} from './Styles/MainStyles';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import database from '../services/firebase';
import FBLoginButton from '../components/FBLoginButton';
import {setToken} from '../actions';
import {GetImage} from '../components/GetImage';

export default function Login() {
    const [email,setEmail]= useState(null);
    const [password,setPassword] = useState(null); 
    const [alertEmail,setAlertEmail] = useState('');
    const [alertPassword, setAlertPassword] = useState('');
    const [hasAccount, setHasAccount] = useState(false);
    const [avatar, setAvatar] = useState('https://iupac.org/wp-content/uploads/2018/05/default-avatar-300x300.png')

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const token = useSelector(state =>state);

    useEffect(()=>{
        try{
             database.ref('account').orderByValue().startAt(0).once("value", function(snapshot) {
                  snapshot.forEach(function(data) {
                      if(data.child('name').val()==email&&data.child('password').val()==password){
                            setHasAccount(true);
                            setAvatar(data.child('uri').val())
                            // dispatch(setToken(avatar, email))
                        }
                   })
                 });
        }catch(err){console.log(err)}
        email==''? setAlertEmail('please fill email'):setAlertEmail('');
        password==''?setAlertPassword('please fill password'):setAlertPassword('');
    },[email,password]);
    const getImage = ()=>{
        GetImage(setAvatar);
        
    }

    const accountCanLogin = () =>{
        if(hasAccount===true){
            dispatch(setToken(avatar,email));
            console.log(token.tokenReducer)
            navigation.navigate('HomeStack')}
        else if(hasAccount===false){
            alert("password or user wrong")}
        else alert("fill all please");
    }
    return(
        <ScrollView style={styles.container}>
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcome}>
                    Login
                </Text>
            </View>
            

            <View style = {styles.inputContainer}>
                <View style = {styles.avatarContainer}>
                    {/*<Image source = {{uri:avatar}} style = {styles.avatar}/>
                     <TouchableOpacity  onPress={getImage}>
                        <Text style={{textAlign:'center', color:'blue'}}>Set image</Text>
                    </TouchableOpacity> */}
                </View>
                <TextInput
                    style={styles.input}
                    onChangeText={text=>setEmail(text)}
                    placeholder='User name...'
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
        </ScrollView>
    );
}
