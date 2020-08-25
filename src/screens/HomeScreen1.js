import React ,{useState,useMemo, useEffect} from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-action-button';
import axios from 'axios';
import ImagePicker from 'react-native-image-picker';

import styles from './Styles/HomeStyles';
import Header from '../components/Header';
import ListContact from '../components/HomeComponents/ListContact';
import AddContact from '../components/HomeComponents/AddContact';

//import SearchFilterFunction from '../components/SearchFilterFunction';

//const DATA = require('../constants/Profile.json');
const DatasetHashMap = (source,merge)=>{
    const _source = [...source];
    const _merge = [...merge];

    const arrayHashmap = _source.map(
        (user) =>{
           let img = _merge.find((i)=>i.id == user.id);
           return {user, img};
        }
    );

    return arrayHashmap;
};

export default function Home1(){
    const [dataContact,setDataContact] = useState([]);
    const [hidden,setHidden] = useState(true);
    const [valueSearch,setValueSearch] = useState('');
    const navigation = useNavigation();
    const [merge,setMerge] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(true);//to pull refresh
    const [loading, setLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [image, setImage] = useState(''); // image for edit avatar
    

    const onRefresh = ()=>{
        setIsRefreshing(true);
        //setLoading(false);
        try{
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response)=>{
                //setUserTable(response.data);
                axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1')
                .then((response1)=>{
                    setIsRefreshing(false);
                    
                    //setImageUser(response1.data.slice(0,20));
                    setMerge(DatasetHashMap(response.data,response1.data.slice(0,response.data.length)));
                // setDataContact(merge);
                setDataContact(DatasetHashMap(response.data,response1.data.slice(0,response.data.length)));
                });
            });
        }
        catch(err){console.log(err)}
    };
    useEffect(()=>{
        try{
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response)=>{
                //setUserTable(response.data);
                axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1')
                .then((response1)=>{
                    setIsRefreshing(false);
                    
                    //setImageUser(response1.data.slice(0,20));
                    setMerge(DatasetHashMap(response.data,response1.data.slice(0,response.data.length)));
                // setDataContact(merge);
                setDataContact(DatasetHashMap(response.data,response1.data.slice(0,response.data.length)));
                });
            });
        }
        catch(err){console.log(err)}
    },[])

    const _imagePicker = () =>{
        const result = ImagePicker.launchImageLibrary({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect: [4,3],
            quality:1,
          });
          if(result.cancelled===false) {
            setImage(JSON.stringify(result.uri));
            
          }
       
          console.log('result',result.uri);
          
    }
    //find contact
    const SearchFilterFunction = (text) =>{
        const dataTemp = [...merge];
        const newData = dataTemp.filter(function(item) {
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
              <AddContact modalVisible={modalVisible} setModalVisible={()=>setModalVisible(!modalVisible)} />
                
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
