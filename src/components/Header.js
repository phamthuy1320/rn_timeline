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
        <View style={styles.headerContainer}>
           {props.iconLeft? <TouchableOpacity style={styles.headerNavigation} onPress={props.onPressLeft}>
                <Ionicons name={props.iconLeft} size={30} color='#000'/>
            </TouchableOpacity>:<Text/>}
            
            {props.title?<Text style={styles.headerContent}>
                {props.title.toUpperCase()}
            </Text>:<Text/>}

            {props.iconRight?<TouchableOpacity style={styles.headerNavigation} onPress={props.onPressRight}>
                <Ionicons name={props.iconRight} size={30} color='#000'/>
            </TouchableOpacity>:<Text/>}

        </View>
    )
}

const styles=StyleSheet.create({
    headerContainer:{
        backgroundColor:'#fff',
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
        color:'#000',
        fontWeight:'bold',
        fontSize:30,
        textAlign:'center',
        
    }
})

export default Header;