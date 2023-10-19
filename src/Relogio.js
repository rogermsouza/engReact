import './Relogio.css';

function Relogio() {
    function updateTime() {
        const agora = new Date();
        const tempoString = agora.toLocaleTimeString();
        document.getElementById("time").textContent = tempoString;
      }

    
      // Atualiza a hora a cada segundo
      setInterval(updateTime, 1000);
    
    
    
    return (
    <div className="Relogio">
        <p>Hora: <span id="time"></span></p>
    </div>
  );
}


export default Relogio;
