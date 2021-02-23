import operate from './operate';

export default function calculate(state, button) {
  if(button ==="c") {
    return {
      next: null,
      operation: null,
      result: null,
    };
  }

  if(button ===".") {
    return {
      result: state.result + '.'
    };
  }

  if(button === "+") {

    return {
      next: state.result,
      result: null,
      operation: '+'
    };
  }

  if(button === "/") {

    return {
      next: state.result,
      result: null,
      operation: '/'
    };
  }

  if(button === "*") {
    return {
      next: state.result,
      result: null,
      operation: '*'
    };

  }

  if(button === "-") {
    return {
      next: state.result,
      result: null,
      operation: "-"
    }
  }

  if(button === "=") {
    const result = operate(state.next,state.result,state.operation)
    return {
      next: null,
      operation: null,
      result
    };

  }



  if(!(isNaN(button))) {
    if(state.operation === null) {
      if(state.result === null) {
        return {
          result: button,
        }
      } else {
        return {
          result: state.result + button,
        };
      }
    } else {
      if(state.result === null) {
        return {
          result: button,
        }
      } else {
        return {
          result: state.result + button,
        };
      }
    }
  }


}
