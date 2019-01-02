// import liraries
import React from 'react';
import {
  View, Text, StyleSheet, TextInput, Button,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';


const fieldNombre = props => (
  <View style={styles.texInput}>
    <TextInput
      placeholder={props.ph}
      onChangeText={props.input.onChange}
      value={props.input.value}
      keyboardType={props.input.name === 'correo' ? 'email-address' : 'default'}
      autoCapitalize="none"
      secureTextEntry={!!(
        props.input.name === 'password' || props.input.name === 'confirmacion'
      )}
      onBlur={props.input.onBlur}
    />

    <View style={styles.linea} />

    {/* Valida las propiedades de los campos del formulario */}
    {props.meta.touched && props.meta.error
      && <Text style={styles.errors}>{props.meta.error}</Text>}

  </View>
);

/* Funcion para validar los campos */
const validate = (values) => {
  const errors = {};

  if (!values.correo) {
    errors.correo = 'Requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)) {
    errors.correo = 'Correo invalido';
  }

  if (!values.password) {
    errors.password = 'Requerido';
  } else if (values.password.length < 5) {
    errors.password = 'Debe ser al menos 5 caracteres';
  } else if (values.password.length > 15) {
    errors.password = 'Debe ser menos de 15 caracteres';
  }

  return errors;
};

// create a component
const SignInForm = props => (
  <View>
    <Field name="correo" component={fieldNombre} ph="correo@correo.com" />
    <Field name="password" component={fieldNombre} ph="******" />
    <Button
      title="SignIn"
      onPress={props.handleSubmit(props.login)}
    />

  </View>);

const styles = StyleSheet.create({
  texInput: {
    marginBottom: 16,
  },
  linea: {
    backgroundColor: '#000000',
    height: 2,
  },
  errors: {
    color: '#FF0000',
  },
});

export default reduxForm({
  form: 'SignInForm',
  validate,
})(SignInForm);
