//draw tab 
//BankCard
//Item product
import React,{useState,useEffect, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View,Text,StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Header from '../components/Header';
import BankCard from '../components/BankCard';
import Transaction from '../components/MenuComponents/Transaction';
import ListCard from '../components/MenuComponents/ListCard';
import database from '../services/firebase';


export default function MenuScreen(){
     const navigation = useNavigation();
     const [bankCardData, setBankCardData] = useState([]);
     const [transactions, setTransaction] = useState([]);

      const getBCData = useCallback(() =>{
            database.ref('bankCard').once('value')
            .then(
                function(snapshot){
                    snapshot.forEach((data)=>{
                        console.log(data.toJSON())
                        setBankCardData([...bankCardData,data.val()]);
                        
                    })
                   
                }
            )
         
     },[bankCardData])

     const getTransData = useCallback( () => {
            database.ref('transaction').once('value')
            .then(
                function(snapshot){
                    let _transaction = [];
                    snapshot.forEach(function (data){
                       _transaction = [..._transaction,data.val()]
                    })
                    setTransaction(_transaction);
                   console.log(transactions)
                }
            )
          }
     ,[transactions])
    
     useEffect(()=>{
        try{
            database.ref('bankCard').once('value')
            .then(
                function(snapshot){
                    let _bankCard = [];
                    snapshot.forEach(function (data){
                        _bankCard = [..._bankCard,data.val()]
                    })
                    setBankCardData(_bankCard);
                    console.log(_bankCard)
                }
            )
            
            .then(
                function(){
                    try{
                        database.ref('transaction').once('value')
                        .then(
                            function(snapshot){
                                let _transaction = [];
                                snapshot.forEach(function (data){
                                _transaction = [..._transaction,data.val()]
                                })
                                setTransaction(_transaction);
                            console.log(transactions)
                            }
                        )
                      }
                      catch(err){console.log(err)}
                }
            )
            
          }
          catch(err){console.log(err)}
     },[])
     return (
        
         <View style={styles.container}>
             <View style={styles.horizontalList}>
                <Header 
                    title = 'My Cards'
                    iconLeft = 'menu'
                    iconRight = 'add-circle-outline'
                    fontSize = {22}
                    onPressLeft={()=>navigation.openDrawer('DrawerHome')}
                />
                <ListCard data = {bankCardData}/>
        
                <View style={styles.headerTransactions}>
                    <Text style={{fontSize:22}}>Transactions</Text>
                    <AntDesign name='swap' size={22} />
                </View>

             </View>
               <Transaction data = {transactions} />
         </View>
     )
 }


 const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        flex:1,
        backgroundColor:'#fff'
    },
    horizontalList:{
    },
    verticalList:{
        paddingHorizontal:10
    },
    headerTransactions:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10
    }

 })