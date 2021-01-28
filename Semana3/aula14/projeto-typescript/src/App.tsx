import React from 'react';
import './App.css';
import Compras from ''

function App() {

  const mercado: Compra = {
    item:'batata',
    quantidade:12,
    pequenas:false
  }


  const supermercado = {
    nome:'Assai',
    itens:['arroz','leite','sal']
  }

  return (
    <div className="App">
      <Compras dados={mercado}/>

    </div>
  );
}

export default App;
