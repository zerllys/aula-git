import React from 'react';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Produto from './Produto'
import Carrinho from './Carrinho'

interface Store {
  carrinho: number
}

const initialState: Store = {
  carrinho: 0
}

function reducer(state = initialState, action: any) {
  switch(action.type) {
    case 'ADICIONAR_NO_CARRINHO':
      return {
        carrinho: state.carrinho + 1
      };
    case 'DIMINUIR_DO_CARRINHO':
      return {
        carrinho: state.carrinho > 0 ? state.carrinho - 1 : state.carrinho,
      };
    default: 
      return state
  }
}

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <Produto />
      <Carrinho />
    </Provider>
  );
}

export default App;
