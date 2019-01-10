import {
  takeEvery, call, select, put, all,
} from 'redux-saga/effects';
import { autenticacion, baseDatos } from '../servicios/Firebase';
import CONSTANTES from '../constantes/constantes';
import CONFIG from '../../config/config';
import {
  accionAgregarAutoresStore,
  accionAgregarPublicacionesStore, accionErrorSubirPublicacion,
  accionExitoSubirPublicacion
} from '../actions/acciones';

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

const escribirFirebase = ({
  width, height, secure_url, uid,
}, texto = '') => baseDatos
  .ref('publicaciones/')
  .push({
    uid,
    width,
    height,
    secure_url,
    texto,
  })
  .then(response => response);

const descargarPublicaciones = () => baseDatos
  .ref('publicaciones/')
  .once('value')
  .then((snapshot) => {
    const publicaciones = [];

    snapshot.forEach((childSnapshot) => {
      const { key } = childSnapshot;
      const publicacion = childSnapshot.val();
      publicacion.key = key;
      publicaciones.push(publicacion);
    });

    return publicaciones;
  });
const escribirAutorPublicaciones = ({ uid, key }) => baseDatos
  .ref(`autor-publicaciones/${uid}`)
  .update({ [key]: true })
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

const descargarAutor = uid => baseDatos.ref(`usuarios/${uid}`)
  .once('value')
  .then(snapshot => snapshot.val());

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
    const usuario = yield select(state => state.reducerSesion);
    const resultadoImagen = yield call(registroFotoCloudinary, imagen);
    const { width, height, secure_url } = resultadoImagen;
    const { uid } = usuario;
    const parametrosImagen = {
      width,
      height,
      secure_url,
      uid,
    };
    const escribirEnFirebase = yield call(escribirFirebase, parametrosImagen, values.texto);
    console.log(escribirEnFirebase.key);
    const { key } = escribirEnFirebase;
    const parametrosAutorPublicaciones = {
      uid,
      key,
    };
    const resultadoAutorPublicaciones = yield call(escribirAutorPublicaciones, parametrosAutorPublicaciones);
    console.log('resultadoAutorPublicaciones', resultadoAutorPublicaciones);
    yield put(accionExitoSubirPublicacion());
  } catch (error) {
    console.log(error);
    yield put(accionErrorSubirPublicacion());
  }
}

function* sagaDescargarPublicaciones() {
  try {
    const publicaciones = yield call(descargarPublicaciones);
    const autores = yield all(publicaciones.map(publicacion => call(descargarAutor, publicacion.uid)));
    yield put(accionAgregarAutoresStore(autores));
    yield put(accionAgregarPublicacionesStore(publicaciones));
  } catch (error) {
    console.log('ERROR:::', error);
  }
}


export default function* functionPrimaria() {
  yield takeEvery(CONSTANTES.REGISTRO, sagaRegistro);
  yield takeEvery(CONSTANTES.LOGIN, sagaLogin);
  yield takeEvery(CONSTANTES.SUBIR_PUBLICACION, sagaSubirPublicacion);
  yield takeEvery(CONSTANTES.DESCARGAR_PUBLICACIONES, sagaDescargarPublicaciones);
}
