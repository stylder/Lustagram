import React from 'react';
import {
  Button, StyleSheet, Text, View,
} from 'react-native';
import { connect } from 'react-redux';
import SignInForm from './formas/SignInForm';
import { accionLogin } from '../../store/actions/acciones';

class SignIn extends React.Component {
  loginDeUsuario = (values) => {
    this.props.login(values);
  };

  render() {
    const {
      navigation,
    } = this.props;

    return (

      <View style={styles.container}>
        <Text> Sign In </Text>
        <SignInForm login={this.loginDeUsuario} />
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
    paddingHorizontal: 16,
  },
});

const mapStateToProps = state => ({
  prop: state.prop,
});

const mapDispatchToProps = dispatch => ({
  login: (datos) => {
    dispatch(accionLogin(datos));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
