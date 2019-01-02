import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import funcionPrimaria from './sagas/sagas';

const reducerPrueba = (state = [0], action) => {
  switch (action.type) {
    case 'REGISTRO':
      return [...state, 1];
    default:
      return state;
  }
};


const sagaMiddleware = createSagaMiddleware();


const reducers = combineReducers({
  reducerPrueba,
  form,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(funcionPrimaria);

export default store;
