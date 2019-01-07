import React from 'react';
import { StyleSheet, View, YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import Store from './store/Store';
import Seleccion from './Seleccion';
YellowBox.ignoreWarnings(['Remote debugger']);


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={Store}>
          <Seleccion />
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
