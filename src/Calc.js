import { useState } from "react";

export function Calc() {
  const [num, setNum] = useState(0);
  const [prevNum, setPrevNum] = useState(0);
  const [inpoperador, setOperador] = useState();

  function addNum(valor) {
    const inputNum = valor.target.value;

    if (num === 0 || isNaN(num) && inputNum !== "0") {
      setNum(inputNum);
    } else {
      setNum(num + inputNum);
    }
  }

  function c(num) {
    setNum(0);
  }
  function porcentagem() {
    setNum(num / 100);
  }
  function mudaConta() {
    if (num > 0) {
      setNum(-num);
    }
    else {
      setNum(-(num));
    }

  }
  function operador(op) {
    var inpOperador = op.target.value;
    setOperador(inpOperador);
    setPrevNum(num);
    setNum(0);
  }

  function calcular() {
    if (inpoperador === "/") {
      setNum((prevNum / parseFloat(num)).toFixed(2));
    } else if (inpoperador === "*") {
      setNum((prevNum * parseFloat(num)).toFixed(2));
    } else if (inpoperador === "+") {
      setNum((parseFloat(prevNum) + parseFloat(num)).toFixed(2));
    } else if (inpoperador === "-") {
      setNum((prevNum - parseFloat(num)).toFixed(2));
    }

    setOperador(null);
    setPrevNum(0);
  }

  return (
    <div className="body">
      <div className="visor">
        <h1>{num}</h1>
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
          <button value="=" onClick={calcular}>=</button>
        </div>
      </div>

    </div>
  );
}
