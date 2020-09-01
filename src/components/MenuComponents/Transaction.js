import React from 'react';
import {View, Image, Text, FlatList, StyleSheet} from 'react-native';

const ItemTransaction = (props) =>{
    return (
        <View style={styles.productContainer}>
            <View style={{flexDirection:'row'}}>
                <Image
                    source = {{uri:props.image}}
                    style = {styles.img}
                />
                <View style={styles.infoProduct}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.brand}>{props.brand}</Text>
                </View>
            </View>
            {
                props.transaction==="pay"?<Text style={[styles.price,{color:'red'}]}>- {props.price}</Text>:
                <Text style={[styles.price,{color:'green'}]}>
                    + {props.price}
                </Text>
            }

        </View>

    )
}



const Transaction = (props) =>{
    return (
        <FlatList 
            data={props.data}
            renderItem={
                ({item})=> 
                <View style={{marginHorizontal:10,flex:1}}>
                    <ItemTransaction
                    key={item.name}
                    image={item.image}
                    name={item.name}
                    brand={item.brand}
                    price={item.price}
                    transaction={item.transaction}
                />
                </View>
            }
            keyExtractor={(item,idx)=>item.name+idx.toString()}
        />
    )
}

export default Transaction;

const styles = StyleSheet.create({
    
    productContainer:{
        backgroundColor:'#fff',
        flexDirection:'row',
        // borderRadius:20,
        // elevation:4,
        // marginVertical:5,
        paddingVertical:10,
        justifyContent:'space-between',
        paddingHorizontal:10,
        flex:1,
        borderBottomWidth:1
    },
    img:{
        height:50,
        aspectRatio:1/1,
        borderRadius:50
    },
    infoProduct:{
        marginLeft:10,
        alignSelf:'center'
    },
    name:{
        fontWeight:'bold',
        fontSize:16
    },
    brand:{
        
    },
    price:{
        alignSelf:'center',
        fontSize:18
    },
    headerTransactions:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10
    }

 })