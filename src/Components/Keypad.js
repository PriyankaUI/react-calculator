import React, { useState } from "react";
import ButtonsList from "./ButtonsList";
import { calculate } from "./calculate";

function Keypad() {
  const [result, setresult] = useState("0");

  const handleClick = (e) => {
    console.log(e);
    const { value } = e.target;
    setresult(calculate(result, value));
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
