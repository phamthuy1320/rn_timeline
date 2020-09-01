import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Header from '../components/Header';

export default function QRScanSuccess() {
    const navigation = useNavigation();
    const route = useRoute();
    return (
        <View style = {styles.container}>
            <Header
                title = 'QR Content'
                iconLeft = 'arrow-back'
                onPressLeft = {()=>navigation.goBack()}
                backgroundColor = 'blue'
                color = '#fff'
                fontSize = {22}
            />
            <Text style = {styles.content}>{route?.params.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        
    },
    content:{
        textAlign:'center',
    }
})