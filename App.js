import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import RutasNoAutenticadas from './componentes/NoAutenticados/RutasNoAutenticadas';
// import RutasAutenticadas from './componentes/Autenticados/RutasAutenticadas';
import Store from './store/Store';

export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <Provider store={Store}>
          <RutasNoAutenticadas />
        </Provider>
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
