import React,{useState} from 'react';
import {View, Text, TouchableOpacity,TextInput, StyleSheet,Modal,Image, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as _ from 'lodash';

import {addContact, cloneContact, deleteContact} from '../../actions/Home';
import {GetImage} from '../GetImage';
import Header from '../Header';
// const HeaderModal = (props) =>{
//     return (
//         <View style={styles.headerStyle}>
//             <TouchableOpacity onPress={props.setModalVisible}>
//                 <Text style={{color:'blue'}}>Cancel</Text>
//             </TouchableOpacity>
           
//             <Text style={{fontSize:16}}>New Contact</Text>
//             <TouchableOpacity  onPress={props.dispatch}>
//                 <Text style={{color:'blue'}}>OK</Text>
//             </TouchableOpacity>
           
//         </View>
//     )
// }

export default function AddContact(){
    const dispatch = useDispatch();
    const route = useRoute();
    const [isEdit, setIsEdit] = route.params?.name?useState(true): useState(false);
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
        // dispatch(addContact(name, email, website, phone,avatarSource));
        // dispatch(deleteContact(route.params?.id))
        
        dispatch(cloneContact(route.params?.id, name, email, website, phone,avatarSource))
        
          
      }else {
        alert('contact can\'t edit' )
      }
      navigation.popToTop();
      
    }
    return (   
          //   <Modal
          //    animationType="slide"
          //    transparent={true}
          //    visible={props.modalVisible}
          //    onRequestClose={() => {
          //      Alert.alert("Modal has been closed.");
          //    }}
          //  >
               <View style={styles.modalView}>
                   {/* <HeaderModal setModalVisible={props.setModalVisible} 
                        dispatch = {onDone}
                    /> */}
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
                    <View style={{width:'90%'}}>
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
                    </View>
                    </ScrollView>
                   
                 </View>
               
          //  </Modal>
       
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
      
})