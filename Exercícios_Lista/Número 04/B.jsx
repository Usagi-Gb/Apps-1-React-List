import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Cardlivro({ titulo, autor, ano, genero }) {
  return (
    <div className='card-livro'>
      <h2>{titulo}</h2>
      <p><strong>autor:</strong> {autor}</p>
      <p><strong>Gênero:</strong> {genero}</p>
      <p><strong>Ano:</strong> {ano}</p>
    </div>);
}
function App() {
  return (
    <div>
      <Cardlivro titulo='Morte aos Fracos' autor='Marquinhos' ano={2011} genero='Fantasia' />
    </div>
  );
}
export default App;
