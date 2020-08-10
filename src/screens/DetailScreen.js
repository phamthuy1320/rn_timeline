import React,{useState, useEffect} from 'react';
import {View, Text,StyleSheet,ScrollView,Image} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Header from '../components/Header';
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
/*export default function DetailScreen(){
    const route = useRoute();
    const navigation = useNavigation();


    let {_name} = route.params;
    let {_background} = route.params;
    let {_avatar} = route.params;
    let {_active} = route.params;
    let {_status} = route.params;
    return (
        <View style={styles.detailContainer}>
            <Header
                title = {_name?_name:'detail'}
                iconLeft = 'angle-left'
                onPressLeft = {()=>navigation.goBack()}
           />
            {_background?<Image
                    source = {{uri:_background}}
                    style={styles.detailBackground}
                />:null }
            <View style={styles.avatarContainer}>
                {_avatar?<Image
                    source = {{uri:_avatar}}
                    style={styles.detailAvatar}
                />:null }
                <View style = {styles.active}>
                    {_active?<ActiveState active = {_active}/>:null}
                </View>
                <Text style={styles.name}>{_name?_name:'detail'}</Text> 
            </View>
            <Status content = {_status?_status:'this is detail'}/>
        </View>
        
    )
}*/
export default function DetailScreen(){
    const navigation=useNavigation();
    return (
        <View style={styles.detailContainer}>
            <Header
                title = 'detail'
                iconLeft = 'angle-left'
                onPressLeft = {()=>navigation.goBack()}
           />
           
            <View style={styles.avatarContainer}>
                <Text style={styles.name}>'detail'</Text> 
            </View>
           // <Status content = 'this is detail'/>
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
        position:'relative',
        bottom:30,
        borderWidth:6,
        borderColor:'#fff',
        alignSelf:'center',
        marginHorizontal:'10'
    },
    avatarContainer:{
        justifyContent:'center',
        borderBottomWidth:1,
        borderBottomColor:'grey',
        elevation:4
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
    }
})
