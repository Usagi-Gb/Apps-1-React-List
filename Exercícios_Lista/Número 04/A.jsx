import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function CardPessoa({ nome, idade, profissao }) {
  return (
    <div className='card-pessoa'>
      <h2>{nome}</h2>
      <p><strong>Idade:</strong> {idade}</p>
      <p><strong>Profissão:</strong> {profissao}</p>
    </div>);
}
function App() {
  return (
    <div>
      <CardPessoa nome='Maria' idade={30} profissao='Desenvolvedora' />
    </div>
  );
}
export default App;
