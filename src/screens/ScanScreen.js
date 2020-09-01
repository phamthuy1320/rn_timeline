// access camera
//Stack navigation
//3 feature:
//1. scan
//2. display 
//3.myQR code

import React from 'react';
import {
    View, 
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ViewBase,
 } from 'react-native';
import Header from '../components/Header';
import InoIcons from 'react-native-vector-icons/Ionicons';
import {useNavigation,useRoute} from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';
const Profile=(props)=>{
    const navigation=useNavigation();
    return(
        <View style={styles.profileContainer}>
            <Header
                    title = {props.name}
                    iconLeft = 'arrow-back'
                    backgroundColor = 'blue'
                    color='#fff'
                    fontSize = {22}
                    onPressLeft={()=>navigation.goBack()}
                />
            <View style={styles.avatar}>
                <Image
                    source={{uri:props.avatar}}
                    style={styles.imgAvatar}
                />
                <Text style={styles.name}>{props.name}</Text>
                <View >
                    <Text style={styles.verify}>Verify User</Text>
                </View>
            </View>

            <View style={styles.QRcode}>
                {/*<Image
                    source={{uri:props.qrCode}}
                    style={styles.QRcode}
                />*/}

                <QRCode
                    value='some string value'
                    color={'#000'}
                    backgroundColor={'white'}
                    size={150}
                    logo={{uri:props.qrCode}}
                    logoMargin={2}
                    logoSize={20}
                    logoBorderRadius={10}
                    logoBackgroundColor={'transparent'}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('CameraAccessScreen')}>
                
                <InoIcons name="camera-outline" size={25} color='blue'/>
                <Text style={styles.title}>
                     QRCode Scan
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default function ScanScreen(){
    const route = useRoute();
    return (
        <View style={{ flex: 1 }}>
        <Profile
            name={route.params?.name}
            avatar={route.params?.avatar}
            qrCode={route.params?.qrCode}
        />
        </View>)
}

const styles=StyleSheet.create({
    profileContainer:{
        justifyContent:'center',
        flexDirection:'column'
    },
    avatar:{
        justifyContent:'center',
        marginVertical:20
    },
    imgAvatar:{
        height:150,
        aspectRatio:1/1,
        alignSelf:'center',
        borderRadius:95
    },
    name:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        marginVertical:10
    },
    verify:{
        textAlign:'center',
        color:'blue'
    },
    QRcode:{
        alignSelf:'center',
        //height:300,
        //aspectRatio:1/1,
    },
    button:{
        borderWidth:1,
        borderColor:'blue',
        borderRadius:20,
        alignSelf:'center',
        marginVertical:30, 
        flexDirection:'row',
        justifyContent:'center',
        paddingVertical:10,
        paddingHorizontal:20,
        width:'90%',
    },
    title:{
        color:'blue',
        fontSize:16,
        textAlign:'center',
        marginHorizontal:10
    }
})
