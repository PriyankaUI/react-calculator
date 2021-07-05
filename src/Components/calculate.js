export const calculate = (result, value) => {
 
  if (value === "C") {
    return "0";
  }

  if (value === "square") {
    let newSquareResult = result;
    let squareValue = Math.pow(newSquareResult, 2);
    return squareValue;
  }

  if (value === "&#8730;") {
    let newResult = result;
    let rootValue = Math.sqrt(newResult);
    return rootValue;
  }
  if (value === "raciprocal") {
    let newResult = result;
    let inverseValue = eval(1/newResult);
    return inverseValue;
  }

  if (value === "sin") {
    let newResult = result;
    let sinValue = Math.sin(newResult);
    return sinValue;
  }
  if (value === "cos") {
    let newResult = result;
    let cosValue = Math.cos(newResult);
    return cosValue;
  }
  if (value === "tan") {
    let newResult = result;
    let tanValue = Math.tan(newResult);
    return tanValue;
  }

  if (value === "log10") {
    let newResult = result;
    let log10Value = Math.log10(newResult);
    return log10Value;
  }
  if (value === "log") {
    let newResult = result;
    let logValue = Math.log(newResult);
    return logValue;
  }

  if (value === "plusminus") {
    return result * -1;
  }

  if (value === "=") {
    return eval(result).toString();
  }

  if (value === " &#8592;") {
    if (result.length === 1) {
      return "0";
    } else {
      return result.slice(0, result.length - 1);
    }
  }

  if (result === "0") {
    return "" + value;
  } else {
    return result + value;
  }
};
