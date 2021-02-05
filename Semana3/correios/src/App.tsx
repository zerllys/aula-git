import React, { useState } from 'react'
import logo from './logo.svg';
import {CEP} from './types/cep';
import axios from 'axios'
import './App.css';

function App() {

  const [cep, setCep] = useState<String>("")

  const [address, setAddress] = useState<CEP>()//é um objeto, precisa tipar

  const getAddress = () => {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then(resposta => setAddress(resposta.data))
  }

  return (
    <div className="App">
      <input type="text" placeholder="Digite o CEP" onChange={(event) => setCep(event.target.value)} />
      <button onClick={getAddress}>Ver endereço</button>
      <h1>Cep:{address?.cep}</h1>
      {
        <>
          <p>Cidade:{address?.localidade}</p>
          <p>Bairro:{address?.bairro}</p>
          <p>Logradouro:{address?.logradouro}</p>
          <p>Estado:{address?.uf}</p>
        </>
      }
    </div>
  );
}
export default App;
