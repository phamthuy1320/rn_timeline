import React,{useState,useEffect} from 'react';
import {View,TextInput,Text,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './Styles/MainStyles';
import Button from '../components/Button';
import FBLoginButton from '../components/FBLoginButton';
import database from '../services/firebase';

//alert?
function checkFillError({e,p,r}){
    if(e==''||p==''||r=='') return true;
    return false;
}
const addAccountFb = (e,p) =>{
    database.ref('account').push({'name':e,'password':p})
}
export default function SignUpScreen(){
    const [email,setEmail]= useState('');
    const [password,setPassword] = useState(''); 
    const [repassword, setRepassword] = useState('');
    const [alertem,setAlertem] = useState('');
    const [alertpw,setAlertpw] = useState('');
    const [alertrpw,setAlertrpw] = useState('');
  

    const navigation = useNavigation();

    

    useEffect( ()=>{
            email==''?setAlertem('please fill email'):setAlertem('');
            password==''?setAlertpw('please fill password'):setAlertpw('');
            repassword ==''?setAlertrpw('please fill verify password'):setAlertrpw('');
    },[email,password,repassword]);

   const checkPassword = () =>{
    if (password==repassword&&checkFillError({email,password,repassword})==false){
        addAccountFb(email,password);
        setEmail('');
        setPassword('');
        setRepassword('');
        return alert('successed,press "return to Login" to Login ')
    }else{
        return alert('password and verify are different!')
    }
   }

    return (
    <View style={styles.container}>
        <View style={styles.welcomeContainer}>
            <Text style={styles.welcome}>
                Welcome to Sign up
            </Text>
        </View>
        <View style = {styles.inputContainer}>
            <TextInput
                style={styles.input}
                onChangeText={text=>setEmail(text)}
                placeholder = 'Email...'
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
           <Text style={{textAlign:'center',fontWeight:'bold'}}>Return to Login</Text>
       </TouchableOpacity>
       <FBLoginButton/>
       </View>

    </View>);
}