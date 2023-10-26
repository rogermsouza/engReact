import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
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
                        <Link to="/Atv02">Atividade 02 - Botão</Link>
                    </li>
                    <li>
                        <Link to="/Atv03">Atividade 03 - Avatar</Link>
                    </li>
                    <li>
                        <Link to="/Atv04">Atividade 04 - Renderização de Lista</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;