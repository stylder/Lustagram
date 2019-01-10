import React, { Component } from 'react';
import {
  StyleSheet, View, Alert,
} from 'react-native';
import { blur } from 'redux-form';
import { connect } from 'react-redux';
import SeleccionarImagen from '../SelecionarImagen';
import {
  accionCargarImagenPublicacion, accionLimpiarImagenPublicacion, accionLimpiarSubirPublicacion,
  accionSubirPublicacion,
} from '../../store/actions/acciones';
import SeleccionarGaleriaForm from './formas/SeleccionarGaleriaForm';


// create a component
class SeleccionarGaleria extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.estadoSubirPublicacion !== nextProps.estadoSubirPublicacion) {
      switch (nextProps.estadoSubirPublicacion) {
        case 'EXITO':
          Alert.alert('Éxito',
            'Publicación realizada correctamente',
            [{
              text: 'OK',
              onPress: () => {
                this.props.limpiarPublicacion();
                this.props.navigation.goBack();
              },
            }]);
          break;
        case 'ERROR':
          console.log('ERROR');
          break;
        default:
          break;
      }
    }
  }

  componentWillUnmount() {
    this.props.limpiarImagen();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imagen}>
          <SeleccionarImagen
            imagen={this.props.imagen.imagen}
            cargar={this.props.cargarImagen}
            radius
          />
        </View>
        <View style={styles.texto}>
          <SeleccionarGaleriaForm
            imagen={this.props.imagen.imagen}
            registro={(values) => {
              console.log(values);
              this.props.subirPublicacion(values);
            }}
          />
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  imagen: {
    flex: 2,
  },
  texto: {
    flex: 2,
  },
});

const mapStateToProps = state => ({
  imagen: state.reducerImagenPublicacion,
  estadoSubirPublicacion: state.reducerExitoSubirPublicacion,
});

const mapDispatchToProps = dispatch => ({
  cargarImagen: (imagen) => {
    dispatch(accionCargarImagenPublicacion(imagen));
    dispatch(blur('SeleccionarGaleriaForm', 'imagen', Date.now()));
  },
  subirPublicacion: (values) => {
    dispatch(accionSubirPublicacion(values));
  },
  limpiarImagen: () => {
    dispatch(accionLimpiarImagenPublicacion());
  },
  limpiarPublicacion: () => {
    dispatch(accionLimpiarSubirPublicacion());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SeleccionarGaleria);
