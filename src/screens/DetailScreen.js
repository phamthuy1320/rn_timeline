import React from 'react';
import {View,Image, Text,StyleSheet,ScrollView} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Header from '../components/Header';
//Detail item for HomeScreen


export default function DetailScreen(){
    const route = useRoute();
    const navigation = useNavigation();
    const ActiveState = (active) =>{
        if (active =='active'){return  <FontAwesome name ='circle' size={20} color='green'/>}
        if (active == 'busy'){
            return <FontAwesome name ='circle' size={20} color='yellow'/>
        }
       if (active =='no active')
            {return <FontAwesome name ='circle' size={20} color='red'/>}
        };
    const Status = (props) =>{
        return (
        <ScrollView>
            <Text style={styles.status}>{props.content}</Text>
        </ScrollView>
        )
    }
    return (
        <View style={styles.detailContainer}>
            <Header
                title = {route.params.name}
                iconLeft = 'angle-left'
                onPressLeft = {()=>navigation.goBack()}
            />
            <Image
                    source = {{uri:route.params.background}}
                    style={styles.detailBackground}
                /> 
            <View style={styles.avatarContainer}>
                <Image
                    source = {{uri:route.params.avatar}}
                    style={styles.detailAvatar}
                /> 
                <View style = {styles.active}>
                    {ActiveState(route.params.active)}
                </View>
                <Text style={styles.name}>{route.params.name}</Text> 
            </View>
            <Status content = {route.params.status}/>
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
