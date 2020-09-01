import React,{useState} from 'react';
import {View, Text, TouchableOpacity,TextInput, StyleSheet,Image, ScrollView, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as _ from 'lodash';

import {addContact, cloneContact, deleteContact} from '../../actions/Home';
import {GetImage} from '../GetImage';
import Header from '../Header';
export default function AddContact(){
    const dispatch = useDispatch();
    const route = useRoute();
    let isEdit = route.params?.name?true: false;
    const [name, setName] =  route.params?.name?useState(route.params?.name): useState('');
    const [email, setEmail] = route.params?.email?useState(route.params?.email): useState('');
    const [website, setWebsite] =route.params?.website?useState(route.params?.website): useState('');
    const [phone, setPhone] = route.params?.phone?useState(route.params?.phone): useState('');
    const [avatarSource,setAvatarSource] = route.params?.avatarSource?useState(route.params?.avatarSource):useState('https://iupac.org/wp-content/uploads/2018/05/default-avatar-300x300.png')
    const navigation = useNavigation();
    const onDoneAdd = () =>{
      if(name!=''|| email!=''|| website!=''|| phone!=''){
        dispatch(addContact(name, email, website, phone,avatarSource));
        
      }else {
        alert('contact can\'t create' )
      }
      navigation.goBack();
      
    }
    const onDoneEdit = () =>{
      if(name!=''|| email!=''|| website!=''|| phone!=''){
        dispatch(cloneContact(route.params?.id,name, email, website, phone,avatarSource))
      }else {
        alert('contact can\'t edit' )
      }
      navigation.popToTop();
      
    }
    const confirmDelete = () =>{
      Alert.alert(
          "Delete", 'You want delete this contact?',[
              {
                  text: "Cancel",
                  onPress:()=>{},
                  style: "cancel"
                },
                { text: "OK", onPress: () => {
                    dispatch(deleteContact(route.params?.id));
                    navigation.popToTop()
              } }
          ]
      )
  }
    
    return (   
               <View style={styles.modalView}>
                    <View style = {styles.header}>
                      <Header
                        iconLeft = 'arrow-back'
                        iconRight = 'md-checkmark-done'
                        onPressLeft = {()=>navigation.goBack()}
                        onPressRight = {isEdit?onDoneEdit:onDoneAdd}
                        title = {isEdit?'Edit Contact':'Add New Contact'}
                        fontSize = {22}
                        backgroundColor = 'blue'
                        color = '#fff'
                      />
                    </View>
                   <ScrollView style = {{flex:1, width:'100%'}}> 
                    <Image 
                        source={{uri:avatarSource!==''?avatarSource:'https://iupac.org/wp-content/uploads/2018/05/default-avatar-300x300.png'}}
                        style={styles.avatar}
                    
                    />
                    <TouchableOpacity onPress={()=>{GetImage(setAvatarSource)}}>
                        <Text style={{color:'blue', textAlign:'center'}}>Edit avatar</Text>
                    </TouchableOpacity>
                    <View style={styles.infoContainer}>
                        <TextInput
                                style={styles.input}
                                placeholder='name...'
                                onChangeText = {(text)=>setName(text)}
                                value={name}
                        />
                        <TextInput
                                style={styles.input}
                                placeholder='email...'
                                onChangeText = {(text)=>setEmail(text)}
                                value={email}
                        />
                        <TextInput
                                style={styles.input}
                                placeholder='website...'
                                onChangeText = {(text)=>setWebsite(text)}
                                value={website}
                        />
                        <TextInput
                                style={styles.input}
                                placeholder='phone...'
                                onChangeText = {(text)=>setPhone(text)}
                                value={phone}
                        />
                       {/* <DeleteButton id={route.params?.idDelete}/> */}
                       <TouchableOpacity onPress = {confirmDelete} style = {styles.button}>
                          <Text style = {styles.titleButton}>Delete this Contact</Text>
                      </TouchableOpacity>
                      </View>
                    </ScrollView>
                   
                 </View>
    )
}

const styles= StyleSheet.create({
  modalView: {
    flex:1,
    width:'100%',
    backgroundColor: "#fff",
    alignItems: "center",
    shadowColor: "#000",
    elevation: 5
  },
  header:{
    width:'100%'
  },
  avatar:{
    height:200,width:'100%'
  },
  infoContainer:{
    width:'100%'
  },
  input:{
    height:40,
    borderBottomWidth:1,
    borderColor:'grey',
    backgroundColor:'#fff',
    margin:10,
    paddingLeft:20,
    color:'#000'
  },
  headerStyle:{
    width:'100%',
    flexDirection:'row', 
    justifyContent:'space-between',
    paddingHorizontal:10},
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