import React,{useState,useEffect} from 'react';
import {View,TextInput,Text,TouchableOpacity, Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {styles} from './Styles/MainStyles';
import Button from '../components/Button';
import database from '../services/firebase';
import {setToken} from '../actions';
import {GetImage} from '../components/GetImage';

//alert?
function checkFillError({e,p,r}){
    if(e!=''&&p!=''&&r!='') return false;
    return true;
}
const addAccountFb = (e,p,uri) =>{
    database.ref('account').push({'name':e,'password':p,'uri':uri })
}
export default function SignUpScreen(){
    const navigation = useNavigation();
    const dispatch = useDispatch();
    // const token = useSelector(state=>state);

    const [email,setEmail]= useState('');
    const [password,setPassword] = useState(''); 
    const [repassword, setRepassword] = useState('');
    const [alertem,setAlertem] = useState('');
    const [alertpw,setAlertpw] = useState('');
    const [alertrpw,setAlertrpw] = useState('');
    const [avatar, setAvatar] = useState('https://iupac.org/wp-content/uploads/2018/05/default-avatar-300x300.png')
  
    useEffect( ()=>{
            email==''?setAlertem('please fill email'):setAlertem('');
            password==''?setAlertpw('please fill password'):setAlertpw('');
            repassword ==''?setAlertrpw('please fill verify password'):setAlertrpw('');
    },[email,password,repassword]);

   const checkPassword = () =>{
    if (password==repassword&&checkFillError({email,password,repassword})==false){
        addAccountFb(email,password, avatar);
        alert('successed,press "return to Login" to Login ');
        // dispatch(setToken(avatar,email));
        dispatch(setToken(avatar, email));
    }else{
        return alert('password and verify are different!')
    }
   }

    return (
    <ScrollView style={styles.container}>
        <View style={styles.welcomeContainer}>
            <Text style={styles.welcome}>
                Sign up
            </Text>
        </View>
        <View style = {styles.inputContainer}>
            <View style = {styles.avatarContainer}>
                <Image source = {{uri:avatar}} style = {styles.avatar}/>
                <TouchableOpacity  onPress={()=>GetImage(setAvatar)}>
                    <Text style={{textAlign:'center', color:'blue'}}>Set image</Text>
                </TouchableOpacity>
            </View>
            <TextInput
                style={styles.input}
                onChangeText={text=>setEmail(text)}
                placeholder = 'User name...'
                value={email}
            />
            <Text style={styles.alert}>{alertem}</Text>
            <TextInput
                style={styles.input}
                onChangeText={text=>setPassword(text)}
                placeholder='Password...'
                secureTextEntry={true}
                value={password}
            />
            <Text style={styles.alert}>{alertpw}</Text>
            <TextInput
                style={styles.input}
                onChangeText={text=>setRepassword(text)}
                placeholder='Verify password...'
                secureTextEntry={true}
                value={repassword}
            />
            <Text style={styles.alert}>{alertrpw}</Text>
        <Button onPress={checkPassword} title='Sign Up'/>
       <TouchableOpacity onPress={()=>navigation.goBack()}>
           <Text style={{textAlign:'center',}}>Return to Login</Text>
       </TouchableOpacity>
       </View>

    </ScrollView>);
}