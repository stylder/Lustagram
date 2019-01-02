import React from 'react';
import {
  Button, StyleSheet, View,
} from 'react-native';
import { connect } from 'react-redux';
import SignUpForm from './formas/SignUpForm';
import { accionRegistro } from '../../store/actions/acciones';
import SelecionarImagen from '../SelecionarImagen';

class SignUp extends React.Component {
  registroDeUsuario = (valores) => {
    console.log(valores);
    this.props.registro(valores);
  };

  render() {
    console.log('state', this.props.numero);
    const {
      navigation,
    } = this.props;

    return (
      <View style={styles.container}>
        <SelecionarImagen />
        <SignUpForm registro={this.registroDeUsuario} />
        <Button
          title="SignIn"
          onPress={() => {
            navigation.navigate('SignIn');
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
    paddingHorizontal: 16,
  },
});

const mapStateToProps = state => ({
  numero: state.reducerPrueba,
});

const mapDispatchToProps = dispatch => ({
  registro: (values) => {
    dispatch(accionRegistro(values));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
