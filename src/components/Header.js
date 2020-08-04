import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {Feather} from 'react-native-vector-icons';

export default Header = (props)=> {
    return(
        <View style={styles.headerContainer}>
            
          
           {props.iconLeft? <TouchableOpacity style={styles.headerNavigation} onPress={props.onPressLeft}>
                <Feather name={props.iconLeft} size='30' color='white'/>
            </TouchableOpacity>:<Text></Text>}
            
            {props.title?<Text style={styles.headerContent}>
                {props.title.toUpperCase()}
            </Text>:<Text></Text>}

            {props.iconRight?<TouchableOpacity style={styles.headerNavigation} onPress={props.onPressRight}>
                <Feather name={props.iconRight} size='30'/>
            </TouchableOpacity>:<Text></Text>}

        </View>
    )
}

const styles=StyleSheet.create({
    headerContainer:{
        backgroundColor:'#000',
        height:80,
        flexDirection:'row'
    },
    headerNavigation:{

    },
    headerContent:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:30,
        textAlign:'center'
    }
})