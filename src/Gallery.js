import { Link } from "react-router-dom";

export function Profile(){
    return (
        <img 
            src="https://www.cinemascomics.com/wp-content/uploads/2020/12/tony-stark-iron-man-vengadores-endgame.jpg"
            alt="Tony Stark"
            title="Tony Stark"
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