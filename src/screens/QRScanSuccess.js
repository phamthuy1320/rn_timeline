import React from 'react';
import {View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Header from '../components/Header';

export default function QRScanSuccess() {
    const route = useRoute()
    return (
        <View>
            <Text>{route?.params.content}</Text>
        </View>
    )
}