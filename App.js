import React from 'react';
import { StyleSheet, View } from 'react-native';
import RutasNoAutenticadas from './componentes/NoAutenticados/RutasNoAutenticadas';
import RutasAutenticadas from './componentes/Autenticados/RutasAutenticadas';

console.disableYellowBox = ['Remote debuger'];

export default class App extends React.Component {


  render() {
    return (

      <View style={styles.container}>
        <RutasAutenticadas />
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
