import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        // justifyContent:'center',
        backgroundColor:'#fff'
    },
    welcomeContainer:{
        //justifyContent:'center',
        //alignContent:'center'
        marginTop:50,
        // flex:1
    },
    welcome:{
        fontSize:22,
        // fontWeight:'bold',
        textAlign:'center',
        color:'#f85c5e'
    },
    inputContainer:{
        //justifyContent:'center',
        alignContent:'center',
        flex:1
    },
    input:{
        height:40,
       // width:'90%',
        // borderRadius:25,
        // borderWidth:1,
        borderBottomWidth:1,
        borderColor:'grey',
        backgroundColor:'#fff',
        // elevation:4,
        marginVertical:10,
        marginHorizontal:20,
        paddingLeft:20,
        // fontWeight:'bold',
        // fontSize:16,
        color:'#000'
    },
    button:{
        height:40,
        //width:'90%',
        borderWidth:1,
        // borderColor:'#f85c5e',
        // backgroundColor:'#f85c5e',
        borderRadius:25,
        margin:10,
        justifyContent:'center'
    },
    labelButton:{
        textAlign:'center',
        // fontSize:20,
        // fontWeight:'bold',
        color:'#fff',
    },
    othersContainer:{
        justifyContent:'center',
        marginBottom:10,
        // flex:1
        
    },
    other:{
        textAlign:'center',
        color:'#000',
        // fontWeight:'bold',
    },

    alert:{
        color:'#f85c5e',
        fontWeight:'bold',
        marginHorizontal:20
    },
    avatarContainer:{
        height:100,
    },
    avatar:{
        height:100,
        aspectRatio:1/1,
        borderRadius:90,
        alignSelf:'center',
        marginVertical:10
    }
})