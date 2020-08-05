import React ,{useState}from 'react';
import {
    Image,
    Text, 
    View,
    StyleSheet,
    FlatList, 
    TouchableOpacity,
    ScrollView,
    SafeAreaView
} from 'react-native';
//import { styles } from './Styles/MainStyles';
import Header from '../components/Header';
//import Feather from 'react-native-vector-icons/Feather'

const DATA = require('../constants/Profile.json');
//{uri, name,status,}

const Item = (props) =>{
    return (
        <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.avatarContainer}>
                <Image
                    source = {{uri: props.uri}}
                    style={styles.imageAvatar}
                /> 
                <Text style={styles.active}>{props.active}</Text>
            </View>
            <View style={{alignSelf:'center'}}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.status}>{props.status}</Text>
            </View>
        </TouchableOpacity>
    );
}

const ListContact = () =>{
    return (
        <ScrollView>
            {DATA.map((item)=>
            <Item 
                key={item.id+Math.random()}
                uri={item.avatar}
                name={item.name} 
                active={item.active} 
                status={item.status} 
            />)}
        </ScrollView> 

    )
}


export default function HomeScreen(){
    const [dataContact,setDataContact] = useState(DATA);
    return (
        <View style={styles.container}>
            <Header 
                title='contacts' 
                iconLeft='menu'
                iconRight='search'
                onPressLeft={()=>alert('draw navigation')}
                onPressRight={()=>alert('Search tab')}
            />
            <ListContact/>
            <View style={styles.transactions}>

            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{ 
        backgroundColor:'#fff'
    },
    itemContainer:{
        flexDirection:'row',
        padding:10,
        elevation:4,
        backgroundColor:'#fff',
        margin:10,
        borderRadius:15
    },
    avatarContainer:{
       
    },
    imageAvatar:{
        height:60,
        aspectRatio:1/1,
        borderWidth:1,
        borderRadius:50,
        margin:10
    },
    active:{

    },
    name:{
        fontSize:20,
        marginBottom:10,
        fontWeight:'bold'
        
    },
    status:{
        
    }

})