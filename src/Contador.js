import { useState } from 'react';
import { Link } from "react-router-dom";
import adicionar from './img/add.PNG';
import remover from './img/remov.PNG';
import homem from './img/homem.PNG';




import Botao from './Botao';

export default function ContComp({frase, setCountas}) {
    const [count, setCount] = useState(0);
    function handleClickMais() {
        setCount(count + 1);
        setCountas((atual) => (atual + 1));
    }
    function handleClickMenos() {
        
        if(count >0){
            setCount(count - 1);
            setCountas((atual) => (atual - 1));
        }
    }

    return (
        <div>
            
            
            <div className='legendasBot'>
                <div className='botoes'>
            <img src={adicionar} onClick={handleClickMais} name="Adiciona" className='botAdiciona' />
            <img src={remover} onClick={handleClickMenos} name="Remove" className='botRemove' />
            </div>    
                <h2>{frase}</h2>
                <h3>{count}</h3>
            </div>
            
            
        </div>
    );
}