import React from 'react';
import {
  Button, StyleSheet, Text, View,
} from 'react-native';


export default class Comentarios extends React.Component {

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text> Comentarios </Text>
        <Button
          title="Autor"
          onPress={() => {
            navigation.navigate('Autor');
          }}
        />
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
