import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        backgroundColor:'#fff'
    },
    welcomeContainer:{
        //justifyContent:'center',
        //alignContent:'center'
        marginTop:50,
        flex:1
    },
    welcome:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        color:'#f85c5e'
    },
    inputContainer:{
        //justifyContent:'center',
        alignContent:'center',
        flex:5
    },
    input:{
        height:50,
       // width:'90%',
        borderRadius:25,
        borderWidth:1,
        borderColor:'grey',
        backgroundColor:'#fff',
        elevation:4,
        margin:10,
        paddingLeft:20,
        fontWeight:'bold',
        fontSize:16,
        color:'#000'
    },
    button:{
        height:50,
        //width:'90%',
        borderWidth:1,
        borderColor:'#f85c5e',
        backgroundColor:'#f85c5e',
        borderRadius:25,
        margin:10,
        justifyContent:'center'
    },
    labelButton:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        color:'#000',
    },
    othersContainer:{
        justifyContent:'center',
        marginBottom:25,
        flex:3
        
    },
    other:{
        textAlign:'center',
        color:'#000',
        fontWeight:'bold',
    },

    alert:{
        color:'#f85c5e',
        fontWeight:'bold',
        marginHorizontal:20
    }
})