import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { Link } from "react-router-dom";
var imgVolta =  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy5UN2BUGylCu1nYwAzD-QBTzJGrPUS5dGzQ&usqp=CAU"

export function Calc() {
  const [screen,setScreen] = useState("0");
  const [antNum, setantNum] = useState("");
  const [operadorEnt, setOperador] = useState(null);
  const [num, setNum] = useState("");


  function porcentagem() {
    setNum(num / 100);
    //ele adiciona uma substring na ariavel screen com o valor e dps tira.
    setScreen(screen.substring(0,screen.length-String(num).length)+(num/100));
  }
  function mudaConta() {
    if (num > 0) {
      setNum(-num);
      //ele adiciona uma substring na ariavel screen com o valor e dps tira.
      setScreen(screen.substring(0,screen.length-String(num).length)+(-num));
    }
    else {
      setNum(-(num));
      //ele adiciona uma substring na ariavel screen com o valor e dps tira.
      setScreen(screen.substring(0,screen.length-String(num).length)+(-(num)));
    }
  }


  function igual(){
    calcular();
    setOperador(null);
  }

  function c() {
    setScreen("0");
    setNum("");
    setantNum("");
    setOperador(null);
  }


  function operador(op) {
    var entrOperador = op.target.value;
    if(operadorEnt !== null){
      calcular(entrOperador);
      setOperador(entrOperador);
      setNum("");
    }
    else{
      setOperador(entrOperador);
      if(antNum !== ""){
        setScreen(antNum+entrOperador);
      }
      else{
        setantNum(num);
        setScreen(num+entrOperador);
      }
      setNum("");
    }
  }


  function addNum(valor) {
    const entraNum = valor.target.value;
    if (screen === "0") {
      if(entraNum === "."){
        setScreen("0.");
        setNum("0.");
      }
      else{
        setScreen(entraNum);
        setNum(entraNum);
      }

    } else {
      if(entraNum === "." && num.includes(".")){
        return;
      }
      else{
        setScreen(screen + entraNum);
        setNum(num+entraNum)
      }
    }
  }



  function calcular(entrOperador="") {
    const number = Number(num);

    const secondNumber = Number(antNum);

    if (operadorEnt === "/") {
      const result = String((secondNumber/number).toFixed(2));
      setScreen(result+entrOperador);
      setantNum(result);
    } else if (operadorEnt === "*") {
      const result = String((secondNumber*number).toFixed(2));
      setScreen(result+entrOperador);
      setantNum(result);
    } else if (operadorEnt === "+") {
      const result = String(secondNumber+number);
      setScreen(result+entrOperador);
      setantNum(result);
    } else if (operadorEnt === "-") {
      const result = String(secondNumber-number);
      setScreen(result+entrOperador);
      setantNum(result);
    } 
  }

  return (
    <div>
      <div className="link">
      <Link to="/">
        <img src={imgVolta} width="70px" />
      </Link>
      </div>
      <div className="body">
      <div className="visor">
        <h1>{screen}</h1>
      </div>
      <div className="teclas">
        <div className="base1">
          <button className="clearBot" onClick={c}>C</button>
          <button className="corrigeElem" onClick={porcentagem}>%</button>
          <button onClick={operador} value="/">/</button>
          <button value={7} onClick={addNum}>7</button>
          <button value={8} onClick={addNum}>8</button>
          <button value={9} onClick={addNum}>9</button>

          <button onClick={operador} value="*">X</button>
          <button value={4} onClick={addNum}>4</button>
          <button value={5} onClick={addNum}>5</button>
          <button value={6} onClick={addNum}>6</button>

          <button onClick={operador} value="-">-</button>
          <button value={1} onClick={addNum}>1</button>
          <button value={2} onClick={addNum}>2</button>
          <button value={3} onClick={addNum}>3</button>
          <button onClick={operador} value="+">+</button>

          <button onClick={mudaConta}>+/-</button>
          <button value={0} onClick={addNum}>0</button>
          <button value={"."} onClick={addNum}>,</button>
          <button value="=" onClick={()=>igual()}>=</button>
        </div>
      </div>

    </div>
    </div>
  );
}
