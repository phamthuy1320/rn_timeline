import React from 'react';
import {FlatList,View} from 'react-native';
import BankCard from '../BankCard';

const ListCard = (props) => {
    return (
       <FlatList 
           data={props.data}
           horizontal={true}
           renderItem={
               ({item,idx})=> 
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
           keyExtractor={(item,idx)=>idx.toString()}
       />
    )
}

export default ListCard;