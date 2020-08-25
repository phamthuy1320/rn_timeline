import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';


const BankCard = (props) =>{
    return(
        <View style={styles.cardContainer}>
            <View style={styles.detailCard}>
                <View style={styles.currentBalance}>
                    <Text style={styles.labelItem}>Current Balance</Text>
                    {props.curBalance? <Text style={[styles.labelItem,{fontWeight:'bold',fontSize:20}]}>{props.curBalance}</Text>:<Text/>}
                </View>

                {props.numberCard?<Text style={styles.numberCard}>{props.numberCard}</Text>:<Text></Text>}

                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={styles.cardHoder}>
                        <Text style={styles.labelItem}>Card Holder</Text>
                        {props.holder? <Text style={[styles.labelItem,{fontWeight:'bold'}]}>{props.holder}</Text>:<Text/>}
                    </View>

                    <View style={styles.expiresContainer}>
                        <Text style={styles.labelItem}>Expires</Text>
                    {props.expires? <Text style={[styles.labelItem,{fontWeight:'bold'}]}>{props.expires}</Text>:<Text/>}
                    </View>
                </View>
                
            </View>
            
            <View style={styles.iconBank}>
                {props.bank?<Text style={styles.icon}>{props.bank}</Text>:<Text/>}
            </View>
        </View>
    );
}


const styles=StyleSheet.create({
    cardContainer:{
        backgroundColor:'blue',
        flexDirection:'row',
        flex:1,
        margin:10,
        borderRadius:15,
        padding:10,
        alignSelf:'center',
        
    },
    detailCard:{
        margin:10,
        flex:4,
        justifyContent:'space-between'
    },
    currentBalance:{
        
    },
    cardHoder:{
       
    },
    expiresContainer:{
        
    },
    
    labelItem:{
        
        color:'#fff',
        
    },
    DetailItem:{
        fontSize:20,
        color:'#fff',
        fontWeight:'bold',
    },
    numberCard:{
        color:'#fff',
        fontSize:20
    },
    iconBank:{
        fontSize:20,
        flex:1,
        justifyContent:'space-around'
        
    },
    icon:{
        color:'#fff',
        fontWeight:'bold',
        flex:1
    }
})

export default BankCard;