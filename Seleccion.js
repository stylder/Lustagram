import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { autenticacion } from './store/servicios/Firebase';
import Provider from 'react-redux/es/components/Provider';
import Store from './store/Store';
import RutasAutenticadas from './componentes/Autenticados/RutasAutenticadas';
import RutasNoAutenticadas from './componentes/NoAutenticados/RutasNoAutenticadas';
import { accionCerrarSesion, accionEstablecerSesion } from './store/actions/acciones';


class Seleccion extends Component {

  componentDidMount() {
    this.props.autenticacion();
  }

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
  },
});


const mapStateToProps = state => ({
  prop: state.prop,
});

const mapDispatchToProps = dispatch => ({
  autenticacion: () => {
    autenticacion.onAuthStateChanged((usuario) => {
      if (usuario) {
        console.log('@@ USUARIO @@', usuario);
        dispatch(accionEstablecerSesion(usuario));
      } else {
        console.log('## LOGOUT ##');
        dispatch(accionCerrarSesion());
      }
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Seleccion);
