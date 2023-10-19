import { useState } from 'react';
import './Letreiro.css';

let frase = "Venha Estudar na Fatec";
function Letreiro() {
  const[contador, setContador] = useState(0);
    if (contador < frase.length){
      setTimeout(()=>setContador(contador + 1), 250)
    }else{
      setContador(0);
    }
    return (
		  frase.slice(0, contador) 
    );

};

export default Letreiro;
