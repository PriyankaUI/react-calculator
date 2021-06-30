import React, { useState } from "react";
import ButtonsList from "./ButtonsList";

function Keypad() {
  const [result, setresult] = useState("0");

  const handleClick = (e) => {
    const { name, value } = e.target;
    if (result === "0") {
      setresult("" + value);
    } else {
      setresult(result + value);
    }

    if (value === "C") {
      setresult("0");
    }
    if (value === " &#8592;") {
      if (result.length === 1) {
        setresult("0");
      } else {
        setresult(result.slice(0, result.length - 1));
      }
    }

    if (value === "square") {
      let newSquareResult = result;
      let squareValue = Math.pow(newSquareResult, 2);
      setresult(squareValue);
    }

    if (value === "&#8730;") {
      let newResult = result;
      let rootValue = Math.sqrt(newResult);
      setresult(rootValue);
    }

    if (value === "sin") {
      let newResult = result;
      let sinValue = Math.sin(newResult);
      setresult(sinValue);
    }
    if (value === "cos") {
      let newResult = result;
      let cosValue = Math.cos(newResult);
      setresult(cosValue);
    }
    if (value === "tan") {
      let newResult = result;
      let tanValue = Math.tan(newResult);
      setresult(tanValue);
    }

    if (value === "log10") {
      let newResult = result;
    let log10Value = Math.log10(newResult);
    setresult(log10Value);
    }

    if (value === "plusminus") {
      setresult(result * -1)
    }

    if (value === "=") {
      setresult(eval(result).toString());
    }
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
          {ButtonsList.map((button) => {
            console.log(button.text);
            return (
              <button
                name={button.name}
                value={button.value}
                onClick={handleClick}
                onKeyPress={handleClick}
                className={button.className}
              >
                {button.text}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Keypad;
