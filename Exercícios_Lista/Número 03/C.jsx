import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function MenuRestaurante() {
  const pratos = [
    { nome: 'Fritas', preco: 30.00, descricao: 'Batatas fritas caseiras da casa' },
    { nome: 'Corte espiral bovino', preco: 195.90, descricao: 'Carne bovina rica em nutrientes acompanhada com molho vermelho' },
    { nome: 'Pizza', preco: 50.90, descricao: 'Saboresde calabresa, marguerita e 4 queijos' },
    { nome: 'Macarrão ao molho branco', preco: 26.70, descricao: `Massa fina banhada em molho branco` }
  ];


  return (
    <div>
      <h2>Cardápio</h2>
      <div className='menu-grid'>
        {pratos.map((prato, index) => (
          <div key={index} className='prato-card'>
            <h3>{prato.nome}</h3>
            <p className='preco'>R$ {prato.preco.toFixed(2)}</p>
            <p className='descricao'>{prato.descricao}</p>
          </div>))}
      </div>
    </div>
  )
}
export default MenuRestaurante;
