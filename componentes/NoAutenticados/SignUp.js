import React from 'react';
import {
  Button, StyleSheet, View,
} from 'react-native';
import { connect } from 'react-redux';
import SignUpForm from './formas/SignUpForm';
import {
  accionCargarImagen,
  accionLimpiarImagen,
  accionRegistro,
} from '../../store/actions/acciones';
import SelecionarImagen from '../SelecionarImagen';
import {blur, change} from 'redux-form/';

class SignUp extends React.Component {
  componentWillUnmount() {
    this.props.limpiarImagen();
  }

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
        <SelecionarImagen
          cargar={this.props.cargarImagen}
          imagen={this.props.imagen.imagen}
        />
        <SignUpForm
          imagen={this.props.imagen.imagen}
          registro={this.registroDeUsuario}
        />
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
  imagen: state.reducerImagenSignUp,
});

const mapDispatchToProps = dispatch => ({
  registro: (values) => {
    dispatch(accionRegistro(values));
  },
  cargarImagen: (imagen) => {
    dispatch(accionCargarImagen(imagen));
    dispatch(blur('SignUpForm', 'imagen', Date.now()));
  },
  limpiarImagen: () => {
    dispatch(accionLimpiarImagen());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
