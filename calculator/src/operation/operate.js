import Big from "big.js";

export default function operate(numberOne, numberTwo, operator) {
  const one = Big(numberOne);
  const two = Big(numberTwo);

  if (operator === "+") {
    return one.plus(two).toString();
  }
  if (operator === "-") {
    return one.minus(two).toString();
  }
  if (operator === "*") {
    return one.times(two).toString();
  }
  if (operator === "/") {
    if(two.toString() === "0") {
      return "0";
    } else {
      return one.div(two).toString();
    }
  }
}
