import React,{useState} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    
} from 'react-native';

import {styles} from './Styles/MainStyles';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native'


export default function LoginScreen() {
    const [email,setEmail]= useState('');
    const [password,setPassword] = useState(''); 
    const navigation = useNavigation();
    return(
        <View 
            style={styles.container}
        >
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
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text=>setPassword(text)}
                    placeholder='Password...'
                    value={password}
                />
            </View>
            
            <TouchableOpacity style={styles.othersContainer} onPress={()=>{alert('forgot password')}}>
                <Text style={styles.other}>Forgot Password?</Text>
            </TouchableOpacity>
            

           <Button onPress={()=>navigation.navigate('HomeScreen')}/>
            

            <TouchableOpacity style={styles.others} onPress={()=>navigation.navigate('SignUpScreen')}>
                <Text style={styles.other}>Sign up</Text>
            </TouchableOpacity>
            
        </View>
    );
}
