import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'


const SearchBar = () => {
  return (
       <View style={style.background}>
            <Feather size={30} name="search" />
            <TextInput placeholder="Search" />
       </View>
  )
};

const style = StyleSheet.create({
     background: {
          backgroundColor: '#F0EEEE',
          height: 50,
          borderRadius: 5,
          marginHorizontal: 15
     }
});

export default SearchBar;