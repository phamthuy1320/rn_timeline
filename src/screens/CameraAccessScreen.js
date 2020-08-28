import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header';
import QRCodeScanner from 'react-native-qrcode-scanner';


export default function CameraAccessScreen(){
    const navigation = useNavigation();
    const onSuccess = (e) =>{
        console.log('Scan successed',e.data);
        if(e.data!=null) {
            navigation.navigate('QRScanSuccess', {content:e.data})
        }else {
            alert('scan failed');
            navigation.goBack();
    }
    }
    return (
        <View>
            <Header
                    title = 'QR Scan'
                    iconLeft = 'arrow-back'
                    backgroundColor = 'blue'
                    color='#fff'
                    fontSize = {22}
                    onPressLeft={()=>navigation.goBack()}
            />
            <QRCodeScanner
                onRead={onSuccess}
                topViewStyle={{margin:20}}
                
            />
            
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