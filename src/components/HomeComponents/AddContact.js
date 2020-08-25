import React,{useState} from 'react';
import {View, Text, TouchableOpacity,TextInput, StyleSheet,Modal,Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {addContact} from '../../actions/Home';

const HeaderModal = (props) =>{
    return (
        <View style={{width:'100%',flexDirection:'row', justifyContent:'space-between',paddingHorizontal:10}}>
            <TouchableOpacity onPress={props.setModalVisible}>
                <Text style={{color:'blue'}}>Cancel</Text>
            </TouchableOpacity>
           
            <Text style={{fontSize:16}}>New Contact</Text>
            <TouchableOpacity  onPress={props.onDone}>
                <Text style={{color:'blue'}}>OK</Text>
            </TouchableOpacity>
           
        </View>
    )
}
export default function AddContact(props){
    const dispatch = useDispatch();
    const [name, setName] =  props.name?useState(props.name): useState('');
    const [email, setEmail] = props.email?useState(props.email): useState('');
    const [website, setWebsite] =props.website?useState(props.website): useState('');
    const [phone, setPhone] = props.phone?useState(props.phone): useState('');
    return (   
            <Modal
             animationType="slide"
             transparent={true}
             visible={props.modalVisible}
             onRequestClose={() => {
               Alert.alert("Modal has been closed.");
             }}
           >
               <View style={styles.modalView}>
                   <HeaderModal setModalVisible={props.setModalVisible} onDone = {
                       ()=>{
                        dispatch(addContact(name, email, website, phone));
                        props.setModalVisible
                       }
                    }
                        />
                    <View style={{flexDirection:'row', width:'90%',marginHorizontal:10}}>
                        <View>
                            <Image
                                source = {{uri:props.url?props.url:'https://iupac.org/wp-content/uploads/2018/05/default-avatar-300x300.png'}}
                                style={{height:50,aspectRatio:1/1,borderRadius:90, marginTop:20}}
                            />
                            <TouchableOpacity onPress={()=>props._imagePicker}>
                                <Text style={{fontSize:10, color:'blue'}}>Edit avatar</Text>
                            </TouchableOpacity>
                        </View>
                        
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
                    </View>
                   
                 </View>
               
           </Modal>
       
    )
}

const styles= StyleSheet.create({
    input:{
        height:40,
        borderBottomWidth:1,
        borderColor:'grey',
        backgroundColor:'#fff',
        margin:10,
        paddingLeft:20,
        color:'#000'
    },
    
      modalView: {
        flex:1,
        backgroundColor: "#fff",
        alignItems: "center",
        shadowColor: "#000",
        elevation: 5
      },
})