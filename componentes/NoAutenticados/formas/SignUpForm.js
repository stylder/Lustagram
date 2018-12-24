import React from 'react';
import {
  View, Button, TextInput, Text,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = props => (
  <View>


    <TextInput
      onChangeText={props.input.onChange}
      placeholder={props.ph}
      value={props.value}
      autoCapitalize="none"
      keyboardType={
        props.input.name === 'correo'
          ? 'email-address'
          : 'default'}
      secureTextEntry={
        !!(props.input.name === 'password' || props.input.name === 'confirmacion')
      }
    />

    {props.meta.touched && props.meta.error
    && <Text>{props.meta.error}</Text>
    }
  </View>
);

const validate = (values) => {
  const errors = {};

  if (!values.nombre) {
    errors.nombre = 'requerido';
  } else if (values.nombre.length < 5) {
    errors.nombre = 'deben ser al menos 5 caracteres';
  }


  if (!values.correo) {
    errors.correo = 'requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)) {
    errors.correo = 'correo invalido';
  }

  if (!values.password) {
    errors.password = 'requerido';
  } else if (values.password.length < 5) {
    errors.password = 'debe ser al menos de 5 caracteres';
  }

  if (!values.confirmacion) {
    errors.confirmacion = 'requerido';
  } else if (values.password !== values.confirmacion) {
    errors.confirmacion = 'el password debe concidor';
  }

  return errors;
};

const SignUpForm = props => (
  <View>
    <Field name="nombre" component={fieldNombre} ph="Nombre"/>
    <Field name="correo" component={fieldNombre} ph="correo@correo.com"/>
    <Field name="password" component={fieldNombre} ph="*********"/>
    <Field name="confirmacion" component={fieldNombre} ph="*********"/>
    <Button
      title="Registrar"
      onPress={props.handleSubmit((values) => {
        console.log(values);
      })}
    />
  </View>
);
export default reduxForm({
  form: 'SignUpForm',
  validate,
})(SignUpForm);
