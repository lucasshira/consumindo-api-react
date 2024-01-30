import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('Sucesso');
      const newState = { ...state }; // nunca devemos manipular o estado atual da aplicacao, sempre criamos um novo estado, copiando com spread operator o valor do estado anterior, para garantir a imutabilidade do estado original
      newState.botaoClicado = !newState.botaoClicado; // alterando o valor para seu valor oposto (vai se tornar true)
      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Deu erro');
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Estou fazendo a requisicao');
      return state;
    }

    default: {
      return state;
    }
  }
}
