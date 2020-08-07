import React ,{useState} from 'react';
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
import {useNavigation,NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import DetailScreen from './DetailScreen';

const DATA = require('../constants/Profile.json');
const Stack = createStackNavigator();

const Item = (props) =>{
    const State = (active) =>{
        if(active =='active'.toString())
            {return  <FontAwesome name ='circle' size={15} color='green'/>}
        if (active == 'busy'){
            return <FontAwesome name ='circle' size={15} color='yellow'/>
        }
       if (active =='no active')
            {return <FontAwesome name ='circle' size={15} color='red'/>}
        }
    return (
        <TouchableOpacity style={styles.itemContainer} onPress = {props.onPress}>
            <View style={styles.avatarContainer}>
                <View style={styles.avatarContainer}>
                    <Image
                        source = {{uri: props.uri}}
                        style={styles.imageAvatar}
                    /> 
                    <View style = {styles.active}>
                        {State(props.active)}
                    </View>
                </View>
            </View>
            
            <View style={{alignSelf:'center'}}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.status}>{props.status}</Text>
            </View>
        </TouchableOpacity>
    );
}

const ListContact = (props) =>{
    const navigation = useNavigation();
    return (
        <ScrollView>
            {props.data.map((item)=>
            <Item 
                key={item.id+Math.random()}
                uri={item.avatar}
                name={item.name} 
                active={item.active} 
                status={item.status} 
                onPress = {()=>navigation.navigate('DetailScreen',{background:item.avatar, avatar:item.avatar,name:item.name, active:item.active,status:item.status})}
            />)}
        </ScrollView> 

    )
}


function Home(){
    const [dataContact,setDataContact] = useState(DATA);
    const navigation = useNavigation();
    const Add = ({item}) =>{
        let arr = [...dataContact];
        arr.push(item);
        return arr;
    }
    
    const Edit = ({item,newItem}) =>{
        let arr = [...dataContact];
        arr.find(item);
        arr = arr.filter(({i})=>{return i!=item});
        arr.push(newItem);
        return arr;
    }
    
    const Delete = ({item}) =>{
        let arr = [...dataContact];
         arr = arr.filter(({i})=>{return i!=item});
        return arr;
    }
    return (
        <View style={styles.container}>
            <Header 
                title='contacts' 
                iconLeft='menu'
                iconRight='search'
                onPressLeft={()=>navigation.popToTop()}
                onPressRight={()=>alert('Search tab')}
            />
            <ListContact data ={dataContact}/>
            <View style = {{borderRadius:50,elevation:4}}>
                <Feather name = 'edit-2' size = {50} />
            </View>
        </View>
    )
}

export default function HomeScreen(){
    return (

        <Stack.Navigator>
            <Stack.Screen 
                name = 'Home'
                component = {Home}
                options = {{
                    headerTitle:'',
                }}
            />
            <Stack.Screen
                name = 'DetailScreen'
                component = {DetailScreen}
            />
        </Stack.Navigator>
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
    name:{
        fontSize:20,
        marginBottom:10,
        fontWeight:'bold'
        
    },
    status:{
        
    },
    active:{
        position:'relative',
        bottom:22,
        left:19,
        alignSelf:'center',

    },

})