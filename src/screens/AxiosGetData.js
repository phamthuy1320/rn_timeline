//test get data with axios
import React,{useState,useEffect} from 'react';
import {View, Text,FlatList} from 'react-native';
import axios from 'axios';

export default function AxiosGetData(){
    const [ users,setUsers] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            //console.log(response.data)
           
            const userTable= response.data.map(item=>item.name);
            setUsers(userTable);
        })
    },[])
    console.log('users',users);
    console.log('userLength',users.length)
    return (

        <View>

           {users!=null? <FlatList
                data={users}
                renderItem={({item})=>
                <Text key={item}>{item}</Text>
                }
                keyExtractor={(item,id)=> id.toString()}
            />:<Text>Axios get data</Text>}
        </View>
    )
};