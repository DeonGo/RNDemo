import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

export default class componentName extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList data={[
            {name: 'AAAAA'},
            {name: 'BBBBB'},
            {name: 'CCCCC'},
            {name: 'DDDDD'},
            {name: 'EEEEE'},
            {name: 'FFFFF'},
            {name: 'GGGGG'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        />
      </View>
    )
  }
};

const styles =  StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 22,
    },
    item:{
        padding: 10,
        fontSize: 18,
        height:44,
    }
})
