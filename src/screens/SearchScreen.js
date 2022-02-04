import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
     const [term, setTerm] = useState('');

     return (
          <View>
               <SearchBar 
                    term={term} 
                    onTermChange={newTerm => setTerm(newTerm)}
                    onTermSubmit={() => {alert(`You submitted this thing: ${term}`); setTerm('')}}
               />
               <Text>This is what i typed: {term}</Text>
          </View>
     )
}

const styles = StyleSheet.create({

})

export default SearchScreen;