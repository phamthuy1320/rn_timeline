import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {deleteContact} from '../../actions/Home';


export default function DeleteButton(props){
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const confirmDelete = (id) =>{
        Alert.alert(
            "Delete", 'You want delete this contact?',[
                {
                    text: "Cancel",
                    onPress:()=>{},
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => {
                      dispatch(deleteContact(id));
                      navigation.popToTop()
                } }
            ]
        )
    }
    return (
        <TouchableOpacity onPress = {confirmDelete(props.id)} style = {styles.button}>
            <Text style = {styles.titleButton}>Delete this Contact</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'red',
        height:40,
        borderRadius:15,
        width:'40%',
        alignSelf:'center',
        alignContent:'center',
        justifyContent:'center'
      },
      titleButton:{
        color:'#fff',
        textAlign:'center',
      }
})