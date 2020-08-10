import React,{useState,useEffect,useRef} from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header';
import {RNCamera} from 'react-native-camera';

export default function CameraAccessScreen(){
    const navigation = useNavigation();
    const [errorMsg,setErrorMsg] =useState(null);
    const camera= useRef(null);
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

            <View>
            <RNCamera
                ref={camera}
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                onGoogleVisionBarcodesDetected={({ barcodes }) => {
                    console.log(barcodes);
                }}>

                   
               
            
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={()=><RNCamera.takePictureAsync quality={0.5} base64={true}/>} style={styles.capture}>
                    <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>
                
            </View>
            </RNCamera>
            </View>

            <View>
            

            </View>
            
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