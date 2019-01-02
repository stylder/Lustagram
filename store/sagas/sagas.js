import { takeEvery, call } from 'redux-saga/effects';
import { autenticacion, baseDatos } from '../servicios/Firebase';

const registroEnFirebase = values => autenticacion
  .createUserWithEmailAndPassword(values.correo, values.password)
  .then(success => success.user.toJSON());

const registroEnBaseDeDatos = values => baseDatos
  .ref(`usuarios/${values.uid}`)
  .set({
    username: values.nombre,
    email: values.correo,
    // profile_picture: values.imageUrl,
  });

const loginEnFirebase = values => autenticacion
  .signInWithEmailAndPassword(values.correo, values.password)
  .then(success => success);

function* sagaRegistro(values) {
  try {
    const registro = yield call(registroEnFirebase, values.datos);
    console.log('::::', registro);
    const usuario = {
      uid: registro.uid,
      correo: registro.email,
      nombre: values.datos.nombre,
    };
    console.log('usuario', usuario);
    yield call(registroEnBaseDeDatos, usuario);
  } catch (error) {
    console.log('ERROR:::', error);
  }
}

function* sagaLogin(values) {
  try {
    const login = yield call(loginEnFirebase, values.datos);
    console.log('::::', login);
  } catch (error) {
    console.log('ERROR:::', error);
  }
}


export default function* functionPrimaria() {
  yield takeEvery('REGISTRO', sagaRegistro);
  yield takeEvery('LOGIN', sagaLogin);
}
