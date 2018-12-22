import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default class Home extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <Text> Home </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdff00',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
