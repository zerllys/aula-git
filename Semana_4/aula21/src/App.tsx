import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Aumenta from './Components/Aumenta/index';
import Diminui from './Components/Diminui/index';
import Leitura from  './Components/Leitura'


const initialState = {
  numero: 10
}

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case 'ADICIONAR_NUMERO': /* forma padrão de escrever os types */
      return {
        numero: state.numero + 1
      };
      case 'SUBTRAIR_NUMERO': /* forma padrão de escrever os types */
      return {
        numero: state.numero - 1
      };
    default:
      return state
  }
}

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <Aumenta/>
      <Diminui/>
      <Leitura/>
    </Provider>
  );
}

export default App;
