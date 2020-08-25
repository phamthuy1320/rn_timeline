import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    itemContainer:{
        flexDirection:'row',
        padding:10,
        elevation:4,
        backgroundColor:'#fff',
        margin:10,
        borderRadius:15,
    },
    avatarContainer:{

    },
    imageAvatar:{
        height:50,
        aspectRatio:1 / 1,
        borderWidth:1,
        borderRadius:50,
        margin:10,
    },
    name:{
        fontSize:20,
        marginBottom:10,
        fontWeight:'bold',

    },
    status:{

    },
    active:{
        position:'relative',
        bottom:22,
        left:19,
        alignSelf:'center',

    },

});
export default styles;