import React from 'react';
import './App.css';
import axios from 'axios'
import Beer from './Components/Beer'
import Food from './Components/Food'

function App() {
  return (
    <div className="App">
      <Food />
      <Beer />
    </div>
  );
}


export default App;