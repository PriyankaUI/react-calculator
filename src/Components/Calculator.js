import React, { useState } from "react";
//import * as math from "mathjs";

const Calculator = () => {
  const [result, setresult] = useState("0");
  const [output, setoutput] = useState("")

  const handleClick = (e) => {
    const { name, value } = e.target;
    if (result === "0") {
      setresult("" + value);
    } else {
      setresult(result + value);
    }
  };

  const backspace = () => {
    if (result.length === 1) {
      setresult("0");
    } else {
      setresult(result.slice(0, result.length - 1));
    }
  };

  const square = () => {
    let newSquareResult = result;
    let squareValue = Math.pow(newSquareResult, 2);
    setresult(squareValue);
  };
  const squareRoot = () => {
    let newResult = result;
    let rootValue = Math.sqrt(newResult);
    setresult(rootValue);
  };
  const sin = () => {
    let newResult = result;
    let sinValue = Math.sin(newResult);
    setresult(sinValue);
  };
  const cos = () => {
    let newResult = result;
    let cosValue = Math.cos(newResult);
    setresult(cosValue);
  };
  const tan = () => {
    let newResult = result;
    let tanValue = Math.tan(newResult);
    setresult(tanValue);
  };
  const log10 = () => {
    let newResult = result;
    let log10Value = Math.log10(newResult);
    setresult(log10Value);
  };

  const toogleSign=()=>{
    setresult(result * -1)
  }

  const calculate = () => {
    setresult(eval(result).toString());

    // const newResult=result;
    // let finalNum;
    // console.log(newResult)
    // for(let i=0;i<newResult.length;i++){
    //   if ( (isNaN(parseFloat(newResult[i]))) && (newResult[i] !== '.') && (i !== newResult.length -1)) {
    //          let operator = newResult[i];
    //          let num1 = newResult.slice(0, i);
    //         let  num2 = newResult.slice(i + 1, newResult.length );
    //         console.log(`1st no is ${num1} ,2nd no is ${num2} `)
    //          if (operator === "+") {
    //            finalNum = parseInt(num1) + parseInt(num2);
    //          }

    //          else if (operator === "-") {
    //            finalNum = parseInt(num1) - parseInt(num2);
    //          }

    //          else if (operator === "/") {
    //            finalNum = parseInt(num1) / parseInt(num2);
    //          }
    //          else if (operator === "*") {
    //            finalNum = parseInt(num1) * parseInt(num2);
    //          }
    //
    //        }
    //      }
    //      let finalresult = finalNum.toString();
    //      setresult(finalresult)
  };
  return (
    <div className="container">
      <div className="calulater-div  ">
        <div className="screen ">
          <input
            type="text"
            value={result}
            onChange={() => null}
            maxLength={15}
          />
        </div>
        <div className="button-div ">
          <button onClick={() => setresult("0")} className="operator1">
            C
          </button>
          <button onClick={backspace} name="" value="" className="operator1">
           
            &#8592;
          </button>
          <button onClick={handleClick} name="" value="%" className="operator1">
            %
          </button>
          <button onClick={handleClick} name="" value="(" className="operator1">
            (
          </button>
          <button onClick={handleClick} name="" value=")" className="operator1">
            )
          </button>

          <button
            onClick={square}
            name="square"
            value="&#178;"
            className="operator1"
          >
           
            x<sup>y</sup>
          </button>
          <button
            onClick={square}
            name="square"
            value="&#178;"
            className="operator1"
          >
            x<sup>2</sup>
          </button>
          <button
            onClick={squareRoot}
            name={`&#8730;`}
            value="&#8730;"
            className="operator1"
          >
            &#8730;
          </button>
          <button onClick={handleClick} name="" value="" className="operator1">
            1/x
          </button>
          <button
            onClick={handleClick}
            name="&divide;"
            value="/"
            className="operator"
          >
            &divide;
          </button>

          <button onClick={sin} name="sin" value="sin" className="operator1">
            sin
          </button>
          <button onClick={handleClick} name="7" value="7">
            7
          </button>
          <button onClick={handleClick} name="8" value="8">
            8
          </button>
          <button onClick={handleClick} name="9" value="9">
            9
          </button>
          <button
            onClick={handleClick}
            name="&times;"
            value="*"
            className="operator"
          >
            &times;
          </button>

          <button onClick={cos} name="cos" value="cos" className="operator1">
            cos
          </button>
          <button onClick={handleClick} name="4" value="4">
            4
          </button>
          <button onClick={handleClick} name="5" value="5">
            5
          </button>
          <button onClick={handleClick} name="6" value="6">
            6
          </button>
          <button onClick={handleClick} name="-" value="-" className="operator">
            -
          </button>

          <button onClick={tan} name="tan" value="tan" className="operator1">
            tan
          </button>
          <button onClick={handleClick} name="1" value="1">
            1
          </button>
          <button onClick={handleClick} name="2" value="2">
            2
          </button>
          <button onClick={handleClick} name="3" value="3">
            3
          </button>
          <button onClick={handleClick} name="+" value="+" className="operator">
            +
          </button>

          <button onClick={log10} name="log" value="log" className="operator1">
            log
          </button>
          <button onClick={toogleSign} name="+/-" value="" className="">
            +/-
          </button>
          <button onClick={handleClick} name="0" value="0">
            0
          </button>
          <button onClick={handleClick} name="." value=".">
            .
          </button>
          <button onKeyPress={calculate} value="" className="operator">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
