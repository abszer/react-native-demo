import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
     const [term, setTerm] = useState('')
     const [searchApi, results, errorMessage] = useResults();
     
     return (
          <View>
               <SearchBar 
                    term={term} 
                    onTermChange={newTerm => setTerm(newTerm)}
                    onTermSubmit={() => searchApi(term)}
               />
               {errorMessage ? <Text>{errorMessage}</Text> : null}
               <Text>We have found {results.length} results.</Text>
               <ResultsList title="Cost Effective"/>
               <ResultsList title="Bit Pricier Effective"/>
               <ResultsList title="Cost Effective"/>
          </View>
     )
}

const styles = StyleSheet.create({

})

export default SearchScreen;