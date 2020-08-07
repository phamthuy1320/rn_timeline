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
const Stack = createStackNavigator();



function Login() {
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
            

           <Button title = 'Login' onPress={()=>navigation.navigate('HomeScreen')}/>
            

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