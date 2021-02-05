import React from 'react';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Produto = () => {


  const dispatch = useDispatch()

  return (
    <div>
      <h2>Produto</h2>
      <button 
        onClick={() => dispatch({ type: 'ADICIONAR_NO_CARRINHO'})}
      >
        Comprar produto
      </button>
      <button onClick={() => dispatch({ type: 'DIMINUIR_DO_CARRINHO'})}>Diminuir do carrinho</button>
    </div>
  );
}

export default Produto;