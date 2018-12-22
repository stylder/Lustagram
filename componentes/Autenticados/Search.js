import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default class Search extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <Text> Search </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
