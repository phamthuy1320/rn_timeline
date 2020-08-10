import React,{useState} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    
} from 'react-native';

import {styles} from './Styles/MainStyles';
import Button from '../components/Button';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation, NavigationContainer} from '@react-navigation/native';

import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';
import Header from '../components/Header';
import userAccount from '../constants/userAccounts';

const Stack = createStackNavigator();

const ACCOUNT_LOGIN ={'email':'thuy','password':'12345678'};

function Login() {
    const [email,setEmail]= useState(null);
    const [password,setPassword] = useState(null); 
    const navigation = useNavigation();
    
    const accountCanLogin = () =>{
        if(email!==null&&password!==null){
            if(email==ACCOUNT_LOGIN.email&&password==ACCOUNT_LOGIN.password){
            return navigation.navigate('HomeScreen')}
            else return alert('password or user wrong');
        }
        return alert("fill all please");
    }
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
                    secureTextEntry={true}
                    value={password}
                />
            </View>
            
            <TouchableOpacity style={styles.othersContainer} onPress={()=>{alert('forgot password')}}>
                <Text style={styles.other}>Forgot Password?</Text>
            </TouchableOpacity>
            

           <Button title = 'Login' onPress={accountCanLogin}/>
            

            <TouchableOpacity style={styles.others} onPress={()=>navigation.navigate('SignUpScreen')}>
                <Text style={styles.other}>Sign up</Text>
            </TouchableOpacity>
            
        </View>
    );
}

export default function LoginScreen(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='LoginScreen'
                    component={Login}
                    options = {
                        {headerTitle:'',
                        headerStyle:{
                            height:0
                        }
                    }
                    }
                />
                <Stack.Screen
                    name='SignUpScreen'
                    component={SignUpScreen}
                    options={{
                        headerTitle:'',
                        headerStyle:{
                            height:0
                        },
                        headerLeft:''
                    }}
                />
                <Stack.Screen
                    name='HomeScreen'
                    component = {HomeScreen}
                    options={
                        {headerTitle:'',
                        headerStyle:{
                            height:0
                        },
                        headerLeft:''
                    }
                    }
                />      
            </Stack.Navigator>
        </NavigationContainer>
        
    );
}