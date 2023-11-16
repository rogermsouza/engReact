import { Link } from "react-router-dom";
function Botao({ onClick, name }){
    return (
        <button onClick={onClick}>{name}</button>
    );
}

export default Botao;