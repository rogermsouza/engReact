import './Carta.css';
import { useState, useRef, useEffect } from 'react'
import Cards from './Carta'


function Carta() {
 

  return (
    <div className="Carta">
      <h1>Jogo da Memória</h1>
      <Cards />
    </div>
  );
}


export default Carta;
