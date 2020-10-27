import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text,TextInput , View,Button } from 'react-native';

const Goal = ({text,style}) => {
    return (
        <View>
            <Text style={style} >{text}</Text>
        </View>
    )
}

export default Goal;