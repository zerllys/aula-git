import './App.css';
import React,{useState}from 'react'
import MostraGif from './MostraGif/index.js'

function App() {

  const [mostra,excluiImg]=useState(<MostraGif/>)
  console.log(<MostraGif/>)

  const exclui = ()=>{
    excluiImg(mostra===false)
  }
  return (
    <div className="App">
      <h1>{mostra}</h1>
      <button onClick={exclui} >clique</button>
    </div>
  );
}

export default App;
