import React from 'react';
import {View,Text,Button,StyleSheet,ScrollView,Image,TouchableOpacity} from 'react-native';
import {useRoute,useNavigation} from '@react-navigation/native'
import Header from '../components/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
export default function HomeDetail(){
    const route=useRoute();
    const navigation= useNavigation();
    return (
        <View >
            <Header
                title={route.params?._name}
                iconLeft = 'arrow-back'
                onPressLeft={()=>navigation.goBack()}
            />
            <Image
                    source = {{uri:route.params?._background}}
                    style={styles.detailBackground}
                />
                
                <Image
                    source = {{uri:route.params?._avatar}}
                    style={styles.detailAvatar}
                    
                />

                <TouchableOpacity onPress={()=>navigation.navigate('ScanScreen',{name:route.params?._name, avatar:route.params?._avatar,qrCode:route.params?._qrCode})}>
                    <Text style={{color:'blue',textAlign:'center',marginBottom:20}}>You want add friend with me?</Text>
                    
                </TouchableOpacity>
                
            
                <Text style={styles.name}>{route.params?._name?route.params?._name:'detail'}</Text> 
            
                <Status content = {route.params?._status?route.params?._status:'this is detail'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    detailContainer:{
    
    },
    detailBackground:{
        height:200,

    },
    detailAvatar:{
        borderRadius:90,
        height:120,
        aspectRatio:1/1,
        borderWidth:6,
        borderColor:'#fff',
        alignSelf:'center'
        
    },
    avatarContainer:{
        alignSelf:'center',
        //borderBottomWidth:1,
        //borderBottomColor:'grey',
       // elevation:4
    },
    active:{
        position:'relative',
        bottom:50,
        left:40, 
        alignSelf:'center'
    },
    name:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
       
    },
    status:{
        textAlign:'center',
        fontSize:20,
        //padding:1000
    }
})