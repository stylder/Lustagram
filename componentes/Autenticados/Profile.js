import React from 'react';
import {
  Button, StyleSheet, Text, View,
} from 'react-native';
import { autenticacion } from '../../store/servicios/Firebase';

export default class Profile extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text> Profile </Text>
        <Button
          title="Publicación"
          onPress={() => {
            navigation.navigate('Publicacion');
          }}
        />
        <Button
          title="Salir"
          onPress={() => {
            autenticacion.signOut();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fc00af',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
