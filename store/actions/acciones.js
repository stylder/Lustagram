import CONSTANTES from '../constantes/constantes';


export const accionRegistro = values => ({
  type: CONSTANTES.REGISTRO,
  datos: values,
});

export const accionLogin = values => ({
  type: CONSTANTES.LOGIN,
  datos: values,
});

export const accionEstablecerSesion = usuario => ({
  type: CONSTANTES.ESTABLECER_SESION,
  usuario,
});

export const accionCerrarSesion = () => ({
  type: CONSTANTES.CERRAR_SESION,
});


export const accionCargarImagen = imagen => ({
  type: CONSTANTES.CARGAR_IMAGEN_SIGNUP,
  imagen,
});

export const accionLimpiarImagen = () => ({
  type: CONSTANTES.LIMPIAR_IMAGEN_SIGNUP,
});

export const accionCargarImagenPublicacion = imagen => ({
  type: CONSTANTES.CARGAR_IMAGEN_PUBLICACION,
  imagen,
});
export const accionLimpiarImagenPublicacion = () => ({
  type: CONSTANTES.LIMPIAR_IMAGEN_PUBLICACION,
});

export const accionSubirPublicacion = values => ({
  type: CONSTANTES.SUBIR_PUBLICACION,
  values,
});
