import { useState } from 'react';
import { Link } from "react-router-dom";
import recarrega from './img/refresh.PNG';

import Botao from './Botao';
import ContComp from './Contador';

export default function Contador(){
    return  <div>
        <div>
        <div><img src={recarrega} /></div>
        <ContComp frase="Homens" className="homens" />
        <ContComp frase="Mulheres"  className="mulheres" />
        </div>
    </div>
    
}