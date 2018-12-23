import React from 'react';
import {
  StyleSheet, View, Text, Button,
} from 'react-native';


export default class Follow extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text>
          {' '}
Follow
          {Math.random()}
          {' '}

        </Text>
        <Button
          title="Autor"
          onPress={() => {
            navigation.navigate('Autor');
          }}
        />

        <Button
          title="Publicación"
          onPress={() => {
            navigation.navigate('Publicacion');
          }}
        />

        <Button
          title="Comentarios"
          onPress={() => {
            navigation.navigate('Comentarios');
          }}
        />
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
