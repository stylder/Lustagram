import React from 'react';
import {
  Button, StyleSheet, Text, View, TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import SignUpForm from './formas/SignUpForm';

class SignUp extends React.Component {
  render() {
    console.log('state', this.props.numero);
    const {
      navigation,
    } = this.props;

    return (
      <View style={styles.container}>
        <Text> Sign UP </Text>

        <SignUpForm />


        <Button
          title="SignIn"
          onPress={() => {
            navigation.navigate('SignIn');
          }}
        />

        <Button
          title="Aumentar"
          onPress={() => {
            this.props.aumentar;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => ({
  numero: state.reducerPrueba,
});

const mapDispatchToProps = dispatch => ({
  aumentar: () => {
    dispatch({ type: 'AUMENTAR_REDUCER_PRUEBA' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
