import React ,{useState,useCallback, useEffect} from 'react';
import {
    View,
    ActivityIndicator,
    
} from 'react-native';
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
    const [modalVisible, setModalVisible] = useState(false);

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
                    
                    setIsRefreshing(false);
                     
                 });
             });
         }
         catch(err){console.log('err',err)}
       
        
     },[contacts.homeReducer])

     useEffect(()=>{
         setDataContact(contacts.homeReducer);
         setIsRefreshing(false)
        },[contacts.homeReducer.length])

     const SearchFilterFunction = (text) =>{
        const newData = _.filter(contacts.homeReducer,function(item) {
          const itemData = item.user.name ? item.user.name.toUpperCase() : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setDataContact(newData);
        setValueSearch(text);

      };

    if(isRefreshing===true){
        return (<View style={styles.container}>
            <Header
                title="contacts"
                iconLeft="menu"
                iconRight="search"
                onPressLeft={()=>{navigation.openDrawer('DrawerHome')}}
                onPressRight={()=>setHidden(!hidden)}
            />

            {hidden == false ? <SearchBar
                showCancel={true}
                onChangeText={(value)=>SearchFilterFunction(value)}
                value={valueSearch}
                containerStyle={{backgroundColor:'#fff'}}
                lightTheme={true}
                
            /> : <View/>}
            <ActivityIndicator size="large" color="gray"/>
        </View>)
    }
   
    return (
        <View style={styles.container}>
            <Header
                title="contacts"
                iconLeft="menu"
                iconRight="search"
                onPressLeft={()=>{navigation.openDrawer('DrawerHome')}}
                onPressRight={()=>setHidden(!hidden)}
            />

            {hidden == false ? <SearchBar
               showCancel={true}
               onChangeText={(value)=>SearchFilterFunction(value)}
               value={valueSearch}
               containerStyle={{backgroundColor:'#fff'}}
               lightTheme={true}
            /> : <View/>}

            {
            //loadingSuccess==false?<ListContact data ={dataContact}/>:<ListContact data ={dataContact1}/>
            }
            
            <ListContact data ={dataContact} 
                refreshing = {isRefreshing}
                onRefresh = {onRefresh}
            />
              {/*show modal add contact */}  
              <AddContact 
                modalVisible={modalVisible} 
                setModalVisible={()=>setModalVisible(!modalVisible)}
            />
                
            <ActionButton
                buttonColor="rgba(231,76,60,1)"
                offsetX={20}
                offsetY={20}
                size={50}
                onPress={()=>setModalVisible(true)}
            />

        </View>
    );
}
