import React from 'react';
import {
  Text, StyleSheet, FlatList, View, Image, Dimensions,
} from 'react-native';

import { connect } from 'react-redux';
import { accionDescargarPublicaciones } from '../../store/actions/acciones';
import Publicacion from './Publicacion';

class Home extends React.Component {
  componentDidMount() {
    this.props.descargarPublicaciones();
  }

  render() {
    console.log('home publicaciones', this.props.publicaciones);
    const {
      navigation, autores,
    } = this.props;

    return (
      <View style={styles.container}>

        <FlatList
          data={this.props.publicaciones}
          ItemSeparatorComponent={() => (
            <View style={styles.separador} />
          )}
          renderItem={({ item, index }) => <Publicacion item={item} autor={autores[index]} />
          }
        />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  separador: {
    borderWidth: 1,
    borderColor: '#C0C0C0',
  },
});

const mapStateToProps = state => ({
  publicaciones: state.reducerPublicacionesDescargadas,
  autores: state.reducerAutoresDescargados,
});
const mapDispatchToProps = dispatch => ({
  descargarPublicaciones: () => {
    dispatch(accionDescargarPublicaciones());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
