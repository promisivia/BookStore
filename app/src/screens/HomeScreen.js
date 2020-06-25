import React from 'react';
import {View} from 'react-native';
import BookList from '../components/BookList';

export default function HomeScreen({navigation}) {
    return (
        <View style={{flexDirection: 'column', flex: 1}}>
            <BookList navigation={navigation} />
        </View>
    );
}
