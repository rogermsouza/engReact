import { useState } from "react";

export function Calc() {
    return (
        <div className="body">
            <div className="visor">
                <h1>0</h1>
            </div>
            <div className="teclas">
                <div className="base1">
                    <button className="clearBot">C</button>
                    <button>()</button>
                    <button>%</button>

                    <button>7</button>
                    <button>8</button>
                    <button>9</button>

                    <button>4</button>
                    <button>5</button>
                    <button>6</button>

                    <button>1</button>
                    <button>2</button>
                    <button>3</button>

                    <button>+/-</button>
                    <button>0</button>
                    <button>,</button>
                </div>
                <div className="base2">
                    <button>/</button>
                    <button>X</button>
                    <button>-</button>
                    <button>+</button>
                    <button>=</button>

                </div>
            </div>

        </div>
    );
}