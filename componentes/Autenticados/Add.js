import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default class Add extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Add </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
