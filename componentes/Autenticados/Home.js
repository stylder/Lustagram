import React from 'react';
import {
  Button, StyleSheet, Text, View,
} from 'react-native';


export default class Home extends React.Component {
  render() {
    const {
      navigation,
    } = this.props;

    return (
      <View style={styles.container}>
        <Button
          title="Autor"
          onPress={() => {
            navigation.navigate('Autor');
          }}
        />
        <Button
          title="Comentarios"
          onPress={() => {
            navigation.navigate('Comentarios');
          }}
        />
        <Text> Home </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
