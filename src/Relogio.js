import { useEffect } from 'react';
import './Relogio.css';

function Relogio() {
    function updateTime() {
        const agora = new Date();
        const tempoString = agora.toLocaleTimeString();
        document.getElementById("time").textContent = tempoString;
      }

    
      // Atualiza a hora a cada segundo
      useEffect(() => {
        let intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
      }, [])
    
    
    
    return (
    <div className="Relogio">
        <p>Hora: <span id="time"></span></p>
    </div>
  );
}


export default Relogio;