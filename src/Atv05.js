import { useState } from 'react';
import { Link } from "react-router-dom";
import recarrega from './img/refresh.PNG';

import Botao from './Botao';
import ContComp from './Contador';

export default function Contador(){
    const [count, setCount] = useState(0);
    return  <div>
        <div>
            <div>
                Geral: {count}
            </div>
            
        <div><img src={recarrega} /></div>
        <ContComp setCountas={setCount} frase="Homens" className="homens" />
        <ContComp setCountas={setCount} frase="Mulheres"  className="mulheres" />
        </div>
        <div>
            <contaGeral />
        </div>
    </div>
    
}