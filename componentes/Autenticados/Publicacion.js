import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


export default class Publicacion extends React.Component {


  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text> Publicacion </Text>
        <Button
          title={'Comentarios'}
          onPress={() => {
            navigation.navigate('Comentarios');
          }}/>
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
