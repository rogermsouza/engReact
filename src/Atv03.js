import { Link } from "react-router-dom";
import "./Atv03.css";

const user ={
    name: "Arnold Schwarzenegger",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMjAyMTk3ODA2MF5BMl5BanBnXkFtZTcwMTkzNDQyNA@@._V1_.jpg",
    imageSize: 90,
};

export default function Profile(){
    return (
        <><Link to="/">Voltar</Link>           
        <h1>Avatar</h1>
            <h2>{user.name}</h2>
            <img
                className="avatar"
                src={user.imageUrl}
                title={'Foto de ' + user.name}
                style={
                    {
                        width: user.imageSize,
                        height: user.imageSize
                    }
                }
            />

        </>
    );
}
