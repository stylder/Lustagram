import React from 'react';
import {
  Image, View, TouchableOpacity,
} from 'react-native';
import { ImagePicker } from 'expo';


const SeleccionarImagen = (props) => {
  const selecionarImagen = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);
    if (!result.cancelled) {
      props.cargar(result);
    }
  };
  const radius = { borderRadius: props.radius ? 0 : 80 };

  return (
    <View style={{
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      <TouchableOpacity onPress={selecionarImagen}>
        {
          props.imagen
            ? (
              <Image
                style={{
                  width: 160,
                  height: 160,
                  ...radius,
                }}
                source={{ uri: props.imagen.uri }}
              />
            )
            : (
              <Image
                style={{
                  width: 160,
                  height: 160,
                  ...radius,
                }}
                source={require('../assets/profile.jpg')}
              />
            )}

      </TouchableOpacity>
    </View>
  );
};

export default SeleccionarImagen;
