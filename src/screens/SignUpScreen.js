import React,{useState,useCallback,useEffect,useMemo} from 'react';
import {View,TextInput,Text} from 'react-native';

import {styles} from './Styles/MainStyles';
import Button from '../components/Button';
import Header from '../components/Header';
//import {Feather} from 'react-native-vector-icons';
import BankCard from '../components/BankCard';


//alert?

export default function SignUpScreen(){
    const [email,setEmail]= useState('');
    const [password,setPassword] = useState(''); 
    const [repassword, setRepassword] = useState('');
    const [alertem,setAlertem] = useState('');
    const [alertpw,setAlertpw] = useState('');
    const [alertrpw,setAlertrpw] = useState('');
    const [success,setSuccess] = useState(false);

    const cp =  useEffect(()=>{
            setSuccess(false);
            email==''?setAlertem('please fill email'):setAlertem('');
            password==''?setAlertpw('please fill password'):setAlertpw('');
            repassword==''?setAlertrpw('please fill verify password'):setAlertrpw('');
    })

    return(
    <View style={styles.container}>
        {/*<BankCard
            curBalance='$123456789'
            numberCard='123456789'
            holder='Pham Thuy'
            expires='08/2020'
        />*/}
        <View style={styles.welcomeContainer}>
            <Text style={styles.welcome}>
                Welcome to Sign up
            </Text>
        </View>
        
        <View style = {styles.inputContainer}>
            <TextInput
                style={styles.input}
                onChangeText={text=>setEmail(text)}
                placeholder='Email...'
                value={email}
            />
            <Text style={styles.alert}>{alertem}</Text>
            <TextInput
                style={styles.input}
                onChangeText={text=>setPassword(text)}
                placeholder='Password...'
                value={password}
            />
            <Text style={styles.alert}>{alertpw}</Text>
            <TextInput
                style={styles.input}
                onChangeText={text=>setRepassword(text)}
                placeholder='Verify password...'
                value={repassword}
            />
            <Text style={styles.alert}>{alertrpw}</Text>
        </View>

        <Button onPress={()=>{
            cp;
            (password==repassword)?alert('successed'):alert('failed')
        }} label='Sign Up'/>

    </View>);
}