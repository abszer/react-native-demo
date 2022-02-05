import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

const ResultsList = ({ title }) => {
     return (
          <View>
               <Text style={style.titleStyle}>{title}</Text>
          </View>
     )
}

const style = StyleSheet.create({
     titleStyle: {
          fontSize: 18,
          fontWeight: 'bold'
     }
});

export default ResultsList;