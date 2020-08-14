import React ,{useState,useMemo} from 'react';
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
//import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import axios from 'axios';

//import DetailScreen from './DetailScreen';
import Header from '../components/Header';

//import SearchFilterFunction from '../components/SearchFilterFunction';

//const DATA = require('../constants/Profile.json');

const Item = (props) =>{
    const State = ({active}) =>{
        if (active == 'active'.toString()){return  <FontAwesome name ="circle" size={15} color="green"/>;}
        if (active == 'busy'){return <FontAwesome name ="circle" size={15} color="yellow"/>;}
        if (active == 'no active'){return <FontAwesome name ="circle" size={15} color="red"/>;}
    };
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress = {()=>navigation.navigate('HomeDetail',
            {   _background:props?.uribackground,
                _avatar:props?.uri,
                _name:props?.name,
                _status:props?.status,
                _active:props?.active,
                _qrCode:props?.qrCode,
                _email:props?.email,
                _website:props?.website,
                _phone:props?.phone,
            })}
        >
            <View style={styles.avatarContainer}>
                <View style={styles.avatarContainer}>
                    <Image
                        source = {{uri: props?.uri}}
                        style={styles.imageAvatar}
                    />
                    <View style = {styles.active}>
                       <State active={props?.active}/>
                    </View>
                </View>
            </View>

            <View style={{alignSelf:'center'}}>
                <Text style={styles.name}>{props?.name}</Text>
                <Text style={styles.status}>{props?.status.slice(0,50)}.......</Text>
            </View>
        </TouchableOpacity>
    );
};

/*const ListContact1 = (props) =>{
    return (
        <FlatList
            data = {props.data}
            renderItem =
                {({item})=>
                    <Item
                        key={item.id}
                        uri={item.avatar?item.avatar:'https://iupac.org/wp-content/uploads/2018/05/default-avatar-300x300.png'}
                        name={item.name}
                        active={item.active?item.active:'no active'}
                        status={item.status?item.status:'no status'}
                        qrCode={item.qrCode?item.qrCode:'no qrCode'}
                        email={item.email?item.email:'no email'}
                        website={item.website?item.website:'no website'}
                        phone={item.phone?item.phone:'no phone'}
                        />
                }

            keyExtractor = {(item,idx)=>item.id+idx.toString()}
        />
    )
}*/

const ListContact = (props) =>{

    return (
        <FlatList
            data = {props.data}
            renderItem =
                {({item})=>
                    <Item
                        key={item.user.id}
                        uri={item.img.thumbnailUrl ? item.img.thumbnailUrl : 'https://iupac.org/wp-content/uploads/2018/05/default-avatar-300x300.png'}
                        uribackground={item.img.url ? item.img.url : 'https://iupac.org/wp-content/uploads/2018/05/default-avatar-300x300.png'}
                        name={item.user.name}

                        active={item.active ? item.active : 'no active'}
                        status={item.img.title ? item.img.title : 'no status'}
                        qrCode={item.qrCode ? item.qrCode : 'no qrCode'}

                        email={item.user.email ? item.user.email : 'no email'}
                        website={item.user.website ? item.user.website : 'no website'}
                        phone={item.user.phone ? item.user.phone : 'no phone'}
                    />
                }

            keyExtractor = {(item,idx)=>item.id + idx.toString()}
        />
    );
};

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

export default function Home(){
    const [dataContact,setDataContact] = useState([]);
    const [hidden,setHidden] = useState(true);
    const [valueSearch,setValueSearch] = useState('');
    const navigation = useNavigation();
    const [loadingSuccess,setLoadingSuccess] = useState(false);
    const [dataContact1, setDataContact1] = useState([]);//data get from axios

    const [userTable,setUserTable] = useState([]);
    const [imageUser, setImageUser] = useState([]);
    const [merge,setMerge] = useState([]);

    useMemo(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            //setUserTable(response.data);
            axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1')
            .then((response1)=>{
                setLoadingSuccess(true);
                //setImageUser(response1.data.slice(0,20));
                setMerge(DatasetHashMap(response.data,response1.data.slice(0,10)));
               // setDataContact(merge);
               setDataContact(DatasetHashMap(response.data,response1.data.slice(0,10)));
            });
        });
    },[]);

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

    return (
        <View style={styles.container}>
            <Header
                title="contacts"
                iconLeft="menu"
                iconRight="search"
                onPressLeft={()=>navigation.navigate('DrawerHome')}
                onPressRight={()=>setHidden(!hidden)}
            />

            {hidden == false ? <SearchBar
                placeholder="find contact"
                showCancel={true}
                onChangeText={(value)=>SearchFilterFunction(value)}
                value={valueSearch}
                containerStyle={{backgroundColor:'#fff'}}
                lightTheme={true}
            /> : <View/>}

            {
            //loadingSuccess==false?<ListContact data ={dataContact}/>:<ListContact data ={dataContact1}/>
            }

            {loadingSuccess == false || dataContact.length === 0 ?
            <View style={{alignSelf:'center'}}>
                <ActivityIndicator size="large" color="red"/>
            </View> :
            <ListContact data ={dataContact}/>}

            {
                //<ListContact1 data ={DATA}/>
                }
            <ActionButton
                buttonColor="rgba(231,76,60,1)"
                offsetX={20}
                offsetY={100}
                size={50}
                onPress={()=>alert('go to add a account')}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    itemContainer:{
        flexDirection:'row',
        padding:10,
        elevation:4,
        backgroundColor:'#fff',
        margin:10,
        borderRadius:15,
    },
    avatarContainer:{

    },
    imageAvatar:{
        height:60,
        aspectRatio:1 / 1,
        borderWidth:1,
        borderRadius:50,
        margin:10,
    },
    name:{
        fontSize:20,
        marginBottom:10,
        fontWeight:'bold',

    },
    status:{

    },
    active:{
        position:'relative',
        bottom:22,
        left:19,
        alignSelf:'center',

    },

});
