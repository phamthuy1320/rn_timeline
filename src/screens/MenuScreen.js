//draw tab 
//BankCard
//Item product
import React,{useState,useMemo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View,Text,StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Header from '../components/Header';
import BankCard from '../components/BankCard';
import Transaction from '../components/MenuComponents/Transaction';
import ListCard from '../components/MenuComponents/ListCard';
import database from '../services/firebase';

const BankCardData = require('../constants/BankCard.json');
const Transactions = require('../constants/Transactions.json');


export default function MenuScreen(){
     const navigation = useNavigation();
     const [bankCardData, setBankCardData] = useState([]);
     const [transactions, setTransaction] = useState([]);

      const getBCData = () =>{
          try{
            database.ref('bankCard').once('value')
            .then(
                function(snapshot){
                    snapshot.forEach((data)=>{
                        console.log(data.toJSON())
                        setBankCardData([...bankCardData,data.val()]);
                        
                    })
                   
                }
            )
          }
          catch(err){console.log(err)}
         
     }

     const getTransData = () => {
        try{
            database.ref('transaction').once('value')
            .then(
                function(snapshot){
                    snapshot.forEach((data)=>{
                        setTransaction([...transactions,data.val()]);
                    })
                   
                }
            )
          }
          catch(err){console.log(err)}
     }
    
     useMemo(()=>{
        try{
            database.ref('bankCard').once('value')
            .then(
                (snapshot)=>{
                    let bc = []
                    snapshot.forEach((data)=>{
                        bc=[...bc,data.val()];
                    })
                    console.log(tr);
                    setBankCardData(bc);
                }
            )

            database.ref('transaction').once('value')
            .then(
                (snapshot)=>{
                    let tr = []
                    snapshot.forEach((data)=>{
                        tr=[...tr,data.val()];
                    })
                    console.log(tr);
                    setTransaction(tr);
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
                    onPressLeft={()=>navigation.openDrawer('DrawerHome')}
                />
                <ListCard data = {bankCardData.length!=0?bankCardData:BankCardData}/>
        
                <View style={styles.headerTransactions}>
                    <Text style={{fontSize:30}}>Transactions</Text>
                    <AntDesign name='swap' size={30} />
                </View>

             </View>

              { // <Transaction data = {transactions.length!=0?transactions:Transactions} />
              }
               <Transaction data = {transactions} />
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
    headerTransactions:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10
    }

 })