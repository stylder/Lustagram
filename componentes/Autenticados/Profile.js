import React from 'react';
import {
  Button, StyleSheet, Text, View,
} from 'react-native';


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
