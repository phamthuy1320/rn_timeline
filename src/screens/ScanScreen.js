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
    Image
 } from 'react-native';
import Header from '../components/Header';

const Profile=(props)=>{
    return(
        <View style={styles.profileContainer}>
            <View style={styles.avatar}>
                <Image
                    source={props.uri}
                />
                <Text style={styles.name}>{props.name}</Text>
                <TouchableOpacity style={styles.verify}>
                    <Text>Verify User</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.QRcode}>
                <Text>QR code</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    profileContainer:{

    },
    name:{

    },
    verify:{

    },
    QRcode:{
        
    }
})
