import React from 'react';
import { Button, Text, View } from 'react-native';

import { createAppContainer, createStackNavigator } from 'react-navigation';


const SignIn = (props) => {
  const {
    navigation,
  } = props;


  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
    }}
    >
      <Text>Componente SignIn</Text>
      <Button
        title="Go to SigUP"
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      />
    </View>
  );
};
const SignUp = (props) => {
  const {
    navigation,
  } = props;

  return (

    <View style={{
      flex: 1,
      justifyContent: 'center',
    }}
    >
      <Text>Componente SignUP</Text>
      <Button
        title="Go to SigIn"
        onPress={() => {
          navigation.navigate('SignIn');
        }}
      />
    </View>
  );
};

const RutasNoAutenticadas = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        header: null,
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        title: 'Sign Up',
      },
    },
  },
  {

  },
);

const AppContainer = createAppContainer(RutasNoAutenticadas);

export default AppContainer;
