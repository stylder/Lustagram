import * as firebase from 'firebase';
import _config_ from '../../config/config';

// Initialize Firebase
const config = {
  apiKey: _config_.apiKey,
  authDomain: _config_.authDomain,
  databaseURL: _config_.databaseURL,
  projectId: _config_.projectId,
  storageBucket: _config_.storageBucket,
  messagingSenderId: _config_.messagingSenderId,
};
firebase.initializeApp(config);

export const autenticacion = firebase.auth();

export const baseDatos = firebase.database();
