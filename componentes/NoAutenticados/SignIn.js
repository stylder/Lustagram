import React from 'react';
import {
  Button, StyleSheet, Text, View,
} from 'react-native';


export default class SignIn extends React.Component {
  render() {
    const {
      navigation,
    } = this.props;

    return (
      <View style={styles.container}>
        <Text> Sign In </Text>
        <Button
          title="Sign Up"
          onPress={() => {
            navigation.navigate('SignUp');
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
