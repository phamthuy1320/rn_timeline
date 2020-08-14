import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; 

const Header = (props)=> {
    return(
        <View style={[styles.headerContainer,{backgroundColor:props.backgroundColor?props.backgroundColor:'#fff'}]}>
           {props.iconLeft? <TouchableOpacity style={styles.headerNavigation} onPress={props.onPressLeft}>
                <Ionicons name={props.iconLeft} size={props.fontSize?props.fontSize:30} color={props.color?props.color:'#000'}/>
            </TouchableOpacity>:null}
            
            {props.title?<Text style={[styles.headerContent,{color:props.color?props.color:'#000',fontSize:props.fontSize?props.fontSize:30}]}>
                {props.title.toUpperCase()}
            </Text>:<Text/>}

            {props.iconRight?<TouchableOpacity style={styles.headerNavigation} onPress={props.onPressRight}>
                <Ionicons name={props.iconRight} size={props.fontSize?props.fontSize:30} color={props.color?props.color:'#000'}/>
            </TouchableOpacity>:<Text/>}

        </View>
    )
}

const styles=StyleSheet.create({
    headerContainer:{
        
        elevation:5,
        height:80,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10
    },
    headerNavigation:{
        
    },
    headerContent:{
        
        fontWeight:'bold',
        textAlign:'center',
        
    }
})

export default Header;