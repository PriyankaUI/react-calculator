import React from 'react'

function calculate() {
    
    const handleClick = (e) => {
        const { name, value } = e.target;
        if (result === "0") {
          setresult("" + value);
        } else {
          setresult(result + value);
        }
        
        if(value==="C"){
          setresult("0");
        }
        if(value===" &#8592;"){
          if (result.length === 1) {
            setresult("0");
          } else {
            setresult(result.slice(0, result.length - 1));
          }
        }
  
        if(value==="="){
          setresult(eval(result).toString());
        }
      };
   
}

export default calculate
