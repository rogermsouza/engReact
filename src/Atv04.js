import { Link } from "react-router-dom";

function Lista(){
    
const Produtos = [
    {title: 'Repolho', id: 1},
    {title: 'Alho', id: 2},
    {title: 'Maçã', id: 3},
];

const ListItens = Produtos.map(Produto =>
    <li key={Produto.id}>
        {Produto.title}
    </li>
    );

    return (
        <div>
            <Link to="/">Voltar</Link>           
            <h1>Renderização de lista em React</h1>
            <url>{ListItens}</url>
        </div>
        
    );
}

export default Lista;