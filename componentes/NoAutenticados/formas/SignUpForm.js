import React from 'react';
import {
  View, Button, TextInput, Text, StyleSheet,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';

const field = props => (
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

    <View style={styles.linea}/>

    {/* Valida las propiedades de los campos del formulario */}
    {props.meta.touched && props.meta.error
    && <Text style={styles.errors}>{props.meta.error}</Text>}

  </View>
);

const fieldImagen = props => (
  <View>
    <View style={styles.linea}>
      {
        props.meta.touched && props.meta.error
        && <Text style={styles.errors}>{props.meta.error}</Text>
      }
    </View>
  </View>
);

const validate = (values, props) => {
  console.log('Ejecutando validaciones', values);
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

  if (!props.imagen) {
    errors.imagen = 'imagen es requerida';
  }

  return errors;
};

const SignUpForm = props => (
  <View style={styles.container}>
    <Field name="imagen" component={fieldImagen}/>
    <Field name="nombre" component={field} ph="Nombre"/>
    <Field name="correo" component={field} ph="correo@correo.com"/>
    <Field name="password" component={field} ph="*********"/>
    <Field name="confirmacion" component={field} ph="*********"/>
    <Button
      title="Registrar"
      onPress={props.handleSubmit(props.registro)}
    />
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
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
  form: 'SignUpForm',
  validate,
})(SignUpForm);
