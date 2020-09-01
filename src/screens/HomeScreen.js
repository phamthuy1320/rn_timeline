import React ,{useState,useCallback, useEffect} from 'react';
import { View,ActivityIndicator,Text, FlatList} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import ActionButton from 'react-native-action-button';
import  * as _ from 'lodash';

import styles from './Styles/HomeStyles';
import Header from '../components/Header';
import ListContact from '../components/HomeComponents/ListContact';
import AddContact from '../components/HomeComponents/AddContact';
import { getData } from '../actions/Home';
import {DatasetHashMap} from '../components/HomeComponents/getHomeData';

export default function Home(){
    let contacts = useSelector(state => state);
    
    const dispatch = useDispatch();

    const [dataContact,setDataContact] = useState([]);
    const [hidden,setHidden] = useState(true);
    const [valueSearch,setValueSearch] = useState('');
    const navigation = useNavigation();
    const [isRefreshing, setIsRefreshing] = useState(true);//to pull refresh

    let tempData = [...dataContact]
    const  onRefresh =useCallback(()=>{
         setIsRefreshing(true);
         try{
            let _contacts;
          
         axios.get('https://jsonplaceholder.typicode.com/users')
             .then((response)=>{
                 axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1')
                 .then((response1)=>{
                    _contacts = DatasetHashMap(response.data,response1.data.slice(0,response.data.length));
                    //console.log('getHomeData',_contacts)
                    console.log('ggetHomeData',_contacts.length)
                    dispatch(getData(_contacts))
                     
                 });
             });
         }
         catch(err){console.log('err',err)}
       
        
     },[contacts.homeReducer])

     useEffect(()=>{
         setDataContact(contacts.homeReducer);
        
         setIsRefreshing(false)
        },[contacts.homeReducer, dataContact])

     const SearchFilterFunction = (text) =>{
        tempData = [...contacts.homeReducer];
         console.log(tempData)
            
           const newData = tempData.filter(item =>{
                const itemData = item.user.name? item.user.name.toUpperCase():''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.match(textData);
            })
            setValueSearch(text);
            console.log('new data', newData.length)
            setDataContact(newData);
      };

      const _hiddenSearch = () =>{
           SearchFilterFunction('');   
            setHidden(!hidden)
      }
    if(isRefreshing===true){
        return (<View style={styles.container}>
           <Header
                title="Contacts"
                iconLeft="menu"
                iconRight="search"
                fontSize = {22}
                onPressLeft={()=>{navigation.openDrawer('DrawerHome')}}
                onPressRight={_hiddenSearch}
            />
            <ActivityIndicator size="large" color="gray"/>
        </View>)
    }
   
    return (
       
        <View style={styles.container}>
            <Header
                title="Contacts"
                iconLeft="menu"
                iconRight="search"
                fontSize = {22}
                onPressLeft={()=>navigation.openDrawer('DrawerHome')}
                onPressRight={_hiddenSearch}
            />

            {hidden == false ? <SearchBar
               showCancel={true}
               onChangeText={(value)=>SearchFilterFunction(value)}
               value={valueSearch}
               containerStyle={{backgroundColor:'#fff'}}
               lightTheme={true}
            /> : <View/>}

            
            {(dataContact!=null&&dataContact.length>0)?<ListContact data ={dataContact} 
                refreshing = {isRefreshing}
                onRefresh = {onRefresh}
            />:onRefresh()  
            }
           
                
            <ActionButton
                buttonColor="rgba(231,76,60,1)"
                offsetX={20}
                offsetY={20}
                size={50}
                onPress = {()=>navigation.navigate('AddContact')}
            />

        </View>
    );
}
