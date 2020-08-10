import React ,{useState} from 'react';
import {
    Image,
    Text, 
    View,
    StyleSheet,
    FlatList, 
    TouchableOpacity,
   
} from 'react-native';

import Header from '../components/Header';
import {NavigationContainer,useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

//import DetailScreen from './DetailScreen';
import MenuScreen from './MenuScreen';
import HomeDetail from './HomeDetail';
import ScanScreen from './ScanScreen';
import CameraAccessScreen from './CameraAccessScreen';

const DATA = require('../constants/Profile.json');
const Stack = createStackNavigator();

const Item = (props) =>{
    const State = ({active}) =>{
        if(active =='active'.toString()){return  <FontAwesome name ='circle' size={15} color='green'/>}
        if (active == 'busy'){return <FontAwesome name ='circle' size={15} color='yellow'/>}
        if (active =='no active'){return <FontAwesome name ='circle' size={15} color='red'/>}
    }
    const navigation=useNavigation();
    return (
        <TouchableOpacity 
            style={styles.itemContainer} 
            onPress = {()=>navigation.navigate('HomeDetail',{_background:props.uri,_avatar:props.uri,_name:props.name,_status:props.status,_qrCode:props.qrCode})}
        >
            <View style={styles.avatarContainer}>
                <View style={styles.avatarContainer}>
                    <Image
                        source = {{uri: props.uri}}
                        style={styles.imageAvatar}
                    /> 
                    <View style = {styles.active}>
                       <State active={props.active}/>
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
        <FlatList
            data = {props.data}
            renderItem = 
                {({item})=>
                    <Item 
                        key={item.id}
                        uri={item.avatar}
                        name={item.name} 
                        active={item.active} 
                        status={item.status}
                        qrCode={item.qrCode}
                        //onPress = {()=>navigation.navigate('DetailScreen')}
                      
                        //onPress = {()=>navigation.navigate('DetailScreen',{name:item.name,background:item.avatar,avatar:item.avatar,active:item.active,status:item.status})}
                        />
                }
            keyExtractor = {(item,idx)=>item.id+idx.toString()}
        />
    )
}


function Home(){
    const [dataContact,setDataContact] = useState(DATA);
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <Header 
                title='contacts' 
                iconLeft='menu'
                iconRight='search'
                onPressLeft={()=>navigation.popToTop()}
                onPressRight={()=>navigation.navigate('MenuScreen')}
            />
           
            <ListContact data ={dataContact}/>
            <View style = {{borderRadius:90,elevation:4}}>
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
                        headerStyle: {
                            height:0
                        }
                
                    }}
                />
                <Stack.Screen 
                    name = 'HomeDetail'
                    component = {HomeDetail}
                    options={{
                        headerTitle:'',
                        headerStyle:{
                            height:0
                        }
                    }}
                />
                <Stack.Screen 
                    name = 'ScanScreen'
                    component = {ScanScreen}
                    options={{
                        headerTitle:'',
                        headerStyle:{
                            height:0
                        }
                    }}
                />
                 <Stack.Screen 
                    name = 'CameraAccessScreen'
                    component = {CameraAccessScreen}
                    options={{
                        headerTitle:'',
                        headerStyle:{
                            height:0
                        }
                    }}
                   
                />
                <Stack.Screen
                    name = 'MenuScreen'
                    component = {MenuScreen}
                    options= {{
                        headerTitle:'',
                        headerStyle:{
                            height:0
                        }
                    }}
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