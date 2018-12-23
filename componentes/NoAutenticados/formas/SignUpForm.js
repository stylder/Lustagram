import React from 'react';
import {
  View, Button, TextInput,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = props => (
  <TextInput
    onChangeText={props.input.onChange}
    placeholder="correo@oruss.com.mx"
    value={props.value}
  />
);

const SignUpForm = props => (
  <View>
    <Field name="nombre" component={fieldNombre} />
    <Field name="correo" component={fieldNombre} />
    <Button
      title="Registrar"
      onPress={props.handleSubmit((values) => {
        console.log(values);
      })}
    />
  </View>
);
export default reduxForm({ form: 'SignUpForm' })(SignUpForm);
