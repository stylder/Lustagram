import { takeEvery, call, select } from 'redux-saga/effects';
import { autenticacion, baseDatos } from '../servicios/Firebase';
import CONSTANTES from '../constantes/constantes';
import CONFIG from '../../config/config';

const loginEnFirebase = values => autenticacion
  .signInWithEmailAndPassword(values.correo, values.password)
  .then(success => success.user.toJSON());

const registroEnFirebase = values => autenticacion
  .createUserWithEmailAndPassword(values.correo, values.password)
  .then(success => success.user.toJSON());

const registroEnBaseDeDatos = ({
  uid, email, nombre, fotoURL,
}) => baseDatos.ref(`usuarios/${uid}`)
  .set({
    nombre,
    email,
    fotoURL,
  });

const escribirFirebase = ({ width, height, secure_url }, texto = '') => baseDatos
  .ref('publicaciones/')
  .push({
    width,
    height,
    secure_url,
    texto,
  })
  .then(response => response);


const registroFotoCloudinary = ({ imagen }) => {
  console.log(imagen);
  const { uri } = imagen;
  const splitName = uri.split('/');
  const name = [...splitName].pop();

  const formImagen = new FormData();
  formImagen.append('upload_preset', CONFIG.cloudinary_preset);
  formImagen.append('file', {
    uri,
    type: 'imagen/jpg',
    name,
  });

  return fetch(CONFIG.cloudinary_name, {
    method: 'POST',
    body: formImagen,
  })
    .then(response => response.json());
};

function* sagaRegistro(values) {
  try {
    // cargar foto
    const imagen = yield select(state => state.reducerImagenSignUp);
    const urlFoto = yield call(registroFotoCloudinary, imagen);
    const fotoURL = urlFoto.secure_url;
    const registro = yield call(registroEnFirebase, values.datos);
    const { email, uid } = registro;
    const { datos: { nombre } } = values;
    // uid, email, nombre
    yield call(registroEnBaseDeDatos, {
      uid,
      email,
      nombre,
      fotoURL,
    });
  } catch (error) {
    console.log(error);
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

function* sagaSubirPublicacion({ values }) {
  try {
    const imagen = yield select(state => state.reducerImagenPublicacion);
    const resultadoImagen = yield call(registroFotoCloudinary, imagen);
    console.log(resultadoImagen);
    const { width, height, secure_url } = resultadoImagen;
    const parametrosImagen = { width, height, secure_url };
    const escribirEnFirebase = yield call(escribirFirebase, parametrosImagen, values.texto);
    console.log(escribirEnFirebase);
  } catch (error) {
    console.log(error);
  }
}


export default function* functionPrimaria() {
  yield takeEvery(CONSTANTES.REGISTRO, sagaRegistro);
  yield takeEvery(CONSTANTES.LOGIN, sagaLogin);
  yield takeEvery(CONSTANTES.SUBIR_PUBLICACION, sagaSubirPublicacion);
}
