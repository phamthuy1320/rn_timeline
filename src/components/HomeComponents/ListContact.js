import React from 'react';
import {View, Text, TouchableOpacity,Image,FlatList,RefreshControl} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from '../../screens/Styles/HomeStyles';

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
                _idDelete:props?.id,
                _id:props?.id
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
                <Text style={styles.status}>{props?.status.slice(0,30)}.......</Text>
            </View>
        </TouchableOpacity>
    );
};
const ListContact = (props) =>{
    return (
        <FlatList
            data = {props.data}
            renderItem =
                {({item})=>
                    <Item
                        key={item.user?.id}
                        id ={item.user?.id}
                        uri={item.img?.thumbnailUrl ? item.img?.thumbnailUrl : 'https://iupac.org/wp-content/uploads/2018/05/default-avatar-300x300.png'}
                        uribackground={item.img?.url ? item.img?.url : 'https://iupac.org/wp-content/uploads/2018/05/default-avatar-300x300.png'}
                        name={item.user?.name}

                        active={item?.active ? item?.active : 'no active'}
                        status={item.img?.title ? item.img?.title : 'no status'}
                        qrCode={item?.qrCode ? item?.qrCode : 'no qrCode'}

                        email={item.user?.email ? item.user?.email : 'no email'}
                        website={item.user?.website ? item.user?.website : 'no website'}
                        phone={item.user?.phone ? item.user?.phone : 'no phone'}
                    />
                }
            
            keyExtractor = {(item,idx)=> idx.toString()}
            refreshing={props?.refreshing}
            onRefresh = {props?.onRefresh}
        />
    );
};

export default ListContact;
