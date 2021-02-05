import React from 'react';
import { useSelector } from 'react-redux'

interface Store {
  carrinho: number
}

const Carrinho  = () => {

  const valorDoCarrinho = useSelector((state: Store) => state.carrinho)

  return (
    <p>Carrinho: {valorDoCarrinho}</p>
  );
}

export default Carrinho;