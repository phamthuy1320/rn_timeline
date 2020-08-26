import React,{useCallback, useState} from 'react';
import {View,Text,Button,StyleSheet,ScrollView,Image,TouchableOpacity,ImageBackground, Alert} from 'react-native';
import {useRoute,useNavigation} from '@react-navigation/native'
import Header from '../components/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {deleteContact} from '../actions/Home';

//Detail item for HomeScreen
const ActiveState = ({active})=>{
    if (active =='active'){return  <FontAwesome name ='circle' size={20} color='green'/>}
    if (active == 'busy'){
        return <FontAwesome name ='circle' size={20} color='yellow'/>
    }
   if (active =='no active')
        {return <FontAwesome name ='circle' size={20} color='red'/>}
    };

const Status = ({content})=>{
    return (
    <ScrollView>
        <Text style={styles.status}>{content}</Text>
    </ScrollView>
    )
}

const Avatar = (props) =>{
    return (
        <View style={{flexDirection:'row'}}>
            <Image
                    source = {{uri:props?._avatar}}
                    style={styles.detailAvatar}
                />
            
            {props._active? <ActiveState active={props?._active}/>:null}
        </View>
        
    )
}

export default function HomeDetail(){
    const route=useRoute();
    const navigation= useNavigation();
    const dispatch = useDispatch();
    const confirmDelete = () =>{
        Alert.alert(
            "Delete", 'You want delete this contact?',[
                {
                    text: "Cancel",
                    onPress: () => {},
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => {
                      dispatch(deleteContact(route.params?._idDelete));
                      
                      navigation.goBack()
                } }
            ]
        )
    }
    return (
        <View >
            <Header
                title={' Profile'}
                iconLeft = 'arrow-back'
                titleRight = 'delete'
                fontSize={20}
                onPressRight={confirmDelete}
                onPressLeft={()=>navigation.goBack()}
            />
          
            <ImageBackground source={{uri:route.params?._background}} style={styles.detailBackground}>
               <View style={{position:'absolute',top:120, flexDirection:'row'}}>
                     <Avatar
                        _avatar={route.params?._avatar}
                        // _active={route.params?._active}
                        />
                        
                    <View style={styles.notification}>
                        <Text style={styles.name}>{route.params?._name?route.params?._name:'no name'}</Text>
                        <Text style={styles.notify}><Text style={{fontWeight:'bold'}}>Email:</Text> {route.params?._email?route.params?._email:'no email'}</Text> 
                        <Text style={styles.notify}><Text style={{fontWeight:'bold'}}>Website:</Text> {route.params?._website?route.params?._website:'no website'}</Text> 
                        <Text style={styles.notify}><Text style={{fontWeight:'bold'}}>Phone:</Text> {route.params?._phone?route.params?._phone:'no phone'}</Text>  
                    </View>
                </View>
            </ImageBackground>
            

            <View style={{marginTop:60, backgroundColor:'#fff',paddingTop:10, marginHorizontal:10}}>
                <TouchableOpacity onPress={()=>navigation.navigate('ScanScreen',{name:route.params?._name, avatar:route.params?._avatar,qrCode:route.params?._qrCode})}>
                    <Text style={{color:'blue',textAlign:'center',marginBottom:20}}>Go to QRCode?</Text>
                    
                </TouchableOpacity>
            </View>
                <View  style={styles.statusContainer}/>
                    <Status content = {route.params?._status?route.params?._status:'this is detail'}/>
                </View>
    )
}

const styles = StyleSheet.create({
    detailContainer:{
    
    },
    detailBackground:{
        height:200,
        flexDirection:'row'
    },
    detailAvatar:{
        borderRadius:90,
        height:120,
        aspectRatio:1/1,
        borderWidth:6,
        borderColor:'#fff',
        alignSelf:'center',
    },
    avatarContainer:{
        alignSelf:'center',
        //borderBottomWidth:1,
        //borderBottomColor:'grey',
       // elevation:4
    },
    active:{
        alignSelf:'center'
    },
    name:{
        textAlign:'center',
        fontSize:22,
        fontWeight:'bold',
        borderBottomWidth:1,
        borderColor:'#fff',
        marginVertical:24,
        marginHorizontal:10
    },
    statusContainer:{
        padding:10,
        flexWrap:'wrap'
    },
    status:{
        textAlign:'center',
        fontSize:20,
        paddingBottom:1000,
        color:'#f85c5e',
        backgroundColor:'#fff',
        marginHorizontal:10,
        paddingHorizontal:20,
    
    },
    notify:{
        
       
    },
    notification:{
        alignSelf:'center',
        
        marginHorizontal:10, 
        paddingBottom:5
    }

})