// Redux Persist: serve para persistir o estado do Redux em armazenamento local (localStorage) do usuario
// para preservar/restaurar o estado global da aplicacao

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'CONSUMO-API',
      storage,
      whitelist: ['auth'], // modulos pra salvar
    },
    reducers
  );

  return persistedReducers;
};
