import { Link } from "react-router-dom";

const avatar = "https://www.cinemascomics.com/wp-content/uploads/2020/12/tony-stark-iron-man-vengadores-endgame.jpg";
const descricao = "Tony Stark";
const titulo = "Tony Stark - Personagem Filme"
export function Profile(){
    return (
        <img 
            src={avatar}
            alt={descricao}
            title={titulo}
            width={300}
        />
    );
}

export default function Gallery(){
    return (
        <section>
            <h1>Cientistas incríveis</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}