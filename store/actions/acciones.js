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
