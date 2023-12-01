// Carta.js
import './Carta.css';
import React from 'react';
import Cards from './Cartas'; // Certifique-se de que o nome do arquivo é 'Cards.js'

export default function Carta() {
  return (
    <div className='fundo'>
      <div>
        <h1>Jogo da Memória</h1>
        
        <Cards />
      </div>


     
    </div>
  );
}
