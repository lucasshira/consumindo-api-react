// No Redux, é uma prática fundamental garantir que o estado seja imutável. Em vez de modificar o estado diretamente, você cria uma cópia do estado existente e aplica as alterações na cópia. O operador de espalhamento (spread) é comumente usado para realizar essa cópia.

import { persistStore } from 'redux-persist';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import persistedReducers from './modules/reduxPersist';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistedReducers(rootReducer),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
