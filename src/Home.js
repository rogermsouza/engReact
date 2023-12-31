import React from "react";
import { Link } from "react-router-dom";
import "./home.css"

const Home = () => {
    return(
        <div className="home">
            <h1>Atividades em aula - React</h1>
            <h3>Fatec Presidente Prudente</h3>
            <h4>Análise e Desenvolvimento de Sistemas</h4>
            <hr></hr>
            <nav>
                <ul>
                    <li>
                        <Link to="/Atv01">Atividade 01 - Relógio e Letreiro</Link>
                    </li>
                    <li>
                        <Link to="/Atv03">Atividade 02 - Avatar</Link>
                    </li>
                    <li>
                        <Link to="/Atv04">Atividade 03 - Renderização de Lista</Link>
                    </li>
                    
                    <li>
                        <Link to="/Atv05">Atividade 04 - Contador compartilhado</Link>
                    </li>
                    <li>
                        <Link to="/Atv06">Atividade 05 - Componentes</Link>
                    </li>
                    <li>
                        <Link to="/Atv07">Atividade 07 - Calculadora</Link>
                    </li>
                    <li>
                        <Link to="/Atv08">Atividade 08 - Jogo da Memória - em andamento...</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;