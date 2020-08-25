import React,{useState} from 'react';
import {View, Text, TextInput} from 'react-native';

export default function AccountSetting(props){
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newAddress, setNewAddress] = useState('');
    const [newPhone, setNewPhone] = useState('');
    const [newWebsite, setNewWebsite] = useState('');

    return (
        <View>
            <TextInput
                placeholder={newName}
            />
            <TextInput
                placeholder={newAddress}
            />
            <TextInput
                placeholder={newPhone}
            />
            <TextInput
                placeholder={newWebsite}
            />
        </View>
    )
}