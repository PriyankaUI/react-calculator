import React, { useEffect, useState } from "react";
import ButtonsList from "./ButtonsList";
import { calculate } from "./calculate";

function Keypad() {
  const [result, setresult] = useState("0");
 
  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, []);


  
  const handleClick = (e) => {
    const { value } = e.target;
    setresult(calculate(result, value))
  };

  
    //  keypresses with buttons
   const handleKey = (e) => {
    console.log(e.key);
      if(["*", "/", ".", "+", "-", "^", 
          "(", ")", "0", "1", "2", "3", 
          "4", "5", "6", "7", "8", "9", "="].includes(e.key)){
          let key = document.querySelector(`button[data-key="${e.key}"]`)
          key.click()
          key.focus()
      } else {
          switch(e.key) {
              case "Backspace":
                  e.preventDefault()
                      if(result.length === 1) {
                        setresult("0")
                      }else{
                        setresult(result.slice(0, result.length - 1))
                      } 
                  break;
              case "Enter":     
                  let enter = document.querySelector(`button[data-key="="]`)
                  enter.click()
                  enter.focus()     
                  break;
              case "Delete":     
                  let clear = document.querySelector(`button[data-key="C"]`)
                  clear.click()
                  clear.focus()     
                  break;
              default:
                  break;
          }
      }
  }

  

  return (
    <div className="container">
      <div className="calulater-div  ">
        <div className="screen ">
          <input
            type="text"
            value={result}
            onChange={()=>null}
            maxLength="12"
          />
        </div>
        <div className="button-div ">
          {ButtonsList.map((button) => {
            return (
              <button
                name={button.name}
                value={button.value}
                data-key={button.name}
                onClick={handleClick}
                className={button.className}
                dangerouslySetInnerHTML={{__html:button.text}}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Keypad;
