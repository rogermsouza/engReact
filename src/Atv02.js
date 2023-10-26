import { Link } from "react-router-dom";
import Botao from "./Botao";
import "./Botao.css";
export default function Atv02(){
    return(
        <div>
             <Link to="/">Voltar</Link>           
            <h1>Aqui temos um exemplo de botão em React</h1>
            <Botao />
        </div>
    );
}

