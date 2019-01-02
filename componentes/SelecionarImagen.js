import React from 'react';
import {
  Image, View, TouchableOpacity,
} from 'react-native';
import { ImagePicker } from 'expo';

export default class SelecionarImagen extends React.Component {
  state = {
    image: null,
  };

  render() {
    return (
      <View style={{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
        <TouchableOpacity onPress={this.selecionarImagen}>
          {
            this.state.image
              ? (
                <Image
                  style={{
                    width: 160,
                    height: 160,
                    borderRadius: 80,
                  }}
                  source={{ uri: this.state.image }}
                />
              )
              : (
                <Image
                  style={{
                    width: 160,
                    height: 160,
                    borderRadius: 80,
                  }}
                  source={require('../assets/profile.jpg')}
                />
              )}

        </TouchableOpacity>
      </View>
    );
  }

  selecionarImagen = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}
