//draw tab 
//BankCard
//Item product
 import React from 'react';
 import {View,Text,TouchableOpacity,StyleSheet,FlatList, ScrollView,Image} from 'react-native';
 import AntDesign from 'react-native-vector-icons/AntDesign';
 import Header from '../components/Header';
 import BankCard from '../components/BankCard';

 const BankCardData = require('../constants/BankCard.json');
 const Transactions = require('../constants/Transactions.json');

 const ListCard = () => {
     return (
            <FlatList 
                data={BankCardData}
                horizontal={true}
                renderItem={
                    ({item})=> 
                    <BankCard
                        key={item.id}
                        curBalance={item.curBalance}
                        numberCard={item.numberCard}
                        holder={item.holder}
                        expires={item.expires}
                        bank={item.bank}
                    />
                }
                ItemSeparatorComponent={()=><View style={{marginVertical:10}}/>}
                keyExtractor={(item)=>item.id}
            />
     )
 }

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



const Transaction = () =>{
    return (
            <FlatList 
                data={Transactions}
                renderItem={
                    ({item})=> 
                    <View style={{marginHorizontal:10}}>
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
                keyExtractor={(item)=>item.name}
            />
    )
}

 export default function MenuScreen(){
     return (
         <View style={styles.container}>
             <View style={styles.horizontalList}>
                <Header 
                    title = 'My Cards'
                    iconLeft = 'menu'
                    iconRight = 'add-circle-outline'
                    onPressLeft={()=>alert('draw navigation')}
                />
                <ListCard/>
                <View style={styles.headerTransactions}>
                    <Text style={{fontSize:30}}>Transactions</Text>
                    <AntDesign name='swap' size={30} />
                </View>

             </View>

                <Transaction/>
         </View>
     )
 }

 const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
       
    },
    horizontalList:{
    },
    verticalList:{
        paddingHorizontal:10
    },
    productContainer:{
        backgroundColor:'#fff',
        flexDirection:'row',
        borderRadius:20,
        elevation:4,
        marginVertical:5,
        paddingVertical:10,
        justifyContent:'space-between',
        paddingHorizontal:10,
        flex:1
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