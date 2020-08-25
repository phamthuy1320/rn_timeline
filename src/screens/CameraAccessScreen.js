import React,{useState,useEffect,useRef} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Linking} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera} from 'react-native-camera';
import QRCode from 'react-native-qrcode-svg';


export default function CameraAccessScreen(){
    const navigation = useNavigation();

    const onSuccess = (e) =>{
        console.log('Scan successed',e.data);
        /*Linking.openURL(e.data).catch(err =>
            console.err(err)
            )*/
    }
    return (
        <View>
            <Header
                    title = 'QR Scan'
                    iconLeft = 'arrow-back'
                    backgroundColor = 'blue'
                    color='#fff'
                    fontSize = {30}
                    onPressLeft={()=>navigation.goBack()}
            />
            {<QRCodeScanner
                onRead={onSuccess}
                //flashMode={RNCamera.Constants.FlashMode.torch}
                //cameraStyle={{height:200,margin:20,}}
                //cameraType='back'
                topViewStyle={{margin:20}}
                
            />}
            
        </View>

    )
}

const styles={container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },}