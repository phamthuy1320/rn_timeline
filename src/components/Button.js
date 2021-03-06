import React,{pr} from 'react';
import {TouchableOpacity,Text,StyleSheet} from 'react-native'

// Note: must have return when use props
const Button = (props)=>{
    return(
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.labelButton}>
            {props.title}
        </Text>
    </TouchableOpacity>)
};

const styles=StyleSheet.create({
    button:{
        height:40,
        borderWidth:1,
        borderColor:'#f85c5e',
        backgroundColor:'#f85c5e',
        borderRadius:25,
        margin:30,
        justifyContent:'center'
    },
    labelButton:{
        textAlign:'center',
        // fontSize:20,
        fontWeight:'bold',
        color:'#fff',
    },
});

export default Button;