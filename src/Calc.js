import { useState } from "react";

export function Calc() {
    const [num, setNun] = useState(0);
    const [prevnum, setPrevNun] = useState(0);
    const [inpoperador, setOperador] = useState();

    function addNun(valor) {
        var inputnum = valor.target.value;
    
        if (num === 0 || num === "0") {
            setNun(parseFloat(inputnum));
        } else {
            setNun(parseFloat(num.toString() + inputnum));
        }
    }
    
    


    function c() {
        setNun(0);
        setPrevNun(0);
        setOperador(null);
    }
    
    function porcentagem() {
        setNun(num / 100);
    }
    function mudaConta() {
        if (num > 0) {
            setNun(-num);
        }
        else {
            setNun(-(num));
        }

    }
    function operador(op) {
        var inpOperador = op.target.value;
        setOperador(inpOperador);
        setPrevNun(num);
        setNun(0);
    }

    function calcular() {
        if (inpoperador === '/') {            
            setNun((prevnum / parseFloat(num)).toFixed(3));
        } else if (inpoperador === '*') {
            setNun((prevnum * parseFloat(num)).toFixed(3));
        } else if (inpoperador === '+') {
            setNun((parseFloat(prevnum) + parseFloat(num)).toFixed(3));
        } else if (inpoperador === '-') {
            setNun((prevnum - parseFloat(num)).toFixed(3));
        }
    
        setOperador(null);
        setPrevNun(0);
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
                    <button onClick={operador} value='/'>/</button>
                    <button value={7}  onClick={addNun}>7</button>
                    <button value={8}  onClick={addNun}>8</button>
                    <button value={9}  onClick={addNun}>9</button>

                    <button onClick={operador} value='*'>X</button>
                    <button value={4}  onClick={addNun}>4</button>
                    <button value={5}  onClick={addNun}>5</button>
                    <button value={6}  onClick={addNun}>6</button>

                    <button onClick={operador} value='-'>-</button>
                    <button value={1}  onClick={addNun}>1</button>
                    <button value={2}  onClick={addNun}>2</button>
                    <button value={3}  onClick={addNun}>3</button>
                    <button onClick={operador} value='+'>+</button>

                    <button onClick={mudaConta}>+/-</button>
                    <button value={0}  onClick={addNun}>0</button>
                    <button value={"."} onClick={addNun}>,</button>
                    <button value='=' onClick={calcular}>=</button>
                </div>
          
            </div>

        </div>
    );
}