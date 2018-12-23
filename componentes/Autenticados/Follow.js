import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default class Follow extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <Text> Follow </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf8ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
