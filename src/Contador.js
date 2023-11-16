import { useState } from 'react';
import { Link } from "react-router-dom";


import Botao from './Botao';

export default function ContComp({frase}) {
    const [count, setCount] = useState(0);
    function handleClickMais() {
        setCount(count + 1);
    }
    function handleClickMenos() {
        
        if(count >0){
            setCount(count - 1);
        }
    }

    return (
        <div>
            <div>
                
            <h2>{frase}: {count}</h2>
            <Botao onClick={handleClickMais} name="Adiciona"/>
            <Botao onClick={handleClickMenos} name="Remove" />
            </div>
        </div>
    );
}