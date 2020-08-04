import React ,{useState}from 'react';
import {
    Image,
    Text, 
    View,
    StyleSheet,
    FlatList, 
    TouchableOpacity} from 'react-native';
//import { styles } from './Styles/MainStyles';

//const DATA= require('../constants/Data.json');
//{uri, name,status,}

const Item = (props) =>{
    return(
        <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.avatarContainer}>
                <Image
                    source={props.uri} 
                />  
            </View>
            
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.status}>{props.status}</Text>
        </TouchableOpacity>
    );
}

export default function HomeScreen(){
    const [dataContact,setDataContact] = useState(DATA);
    return(
        <View style={styles.container}>
            
            <FlatList
                data={dataContact}
                renderItem={(item)=>{
                    <Item uri={item.uri} name={item.name} status={item.status} />
                }}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{

    },
    itemContainer:{

    },
    name:{

    },
    status:{

    }

})