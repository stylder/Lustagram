import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppContainer from './componentes/NoAutenticados/RutasNoAutenticadas';

export default class App extends React.Component {


  render() {
    return (

      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
