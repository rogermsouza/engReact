import "./Atv05.css";
import { useState } from 'react';
import { Link } from "react-router-dom";
import recarrega from './img/refresh.PNG';
import homem from './img/homem.PNG';
import mulher from './img/mulher.PNG';


import Botao from './Botao';
import ContComp from './Contador';

export default function Contador(){
    const [count, setCount] = useState(0);
    return <div className="corpo">
        <div className="separador"></div>

<div className="corpoCont">
        <Link to="/">Voltar</Link>
        <div>
            <div>
                <h4>Total</h4>
                <h5>{count}</h5>
            </div>
            
        <div className="recarregar">
            <a href="/Atv05">
                <img src={recarrega} width={"60px"} title="Recarregar" />
            </a>  
        </div>
        <div className="colunas">
            <div className="col">
                <img src={homem} className="imgHomem" />
                <ContComp setCountas={setCount} frase="Homens" className="homens" />
            </div>
            <div className="col">
                <img src={mulher} className="imgMulher" />
                <ContComp setCountas={setCount} frase="Mulheres"  className="mulheres" />
            </div>
        </div>
        
        
        </div>
       
    </div>




    </div>
    
}