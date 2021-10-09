const calculator = (() => {
    let history = new Map();
    let storage = [];
    let signal = "";
  
    const enter = (expression) => {
      if (typeof expression === "number") {
        storage.push(expression);
      }
  
      if (typeof expression === "string") return (signal = expression);
  
      return storage.slice(-1)[0];
    };
  
    const expressionToCalculate = (caracter) => {
      let sum = 0;
      let number1 = 0;
      let number2 = 0;
      let division = 0;
      let subtraction = 0;
      let multiplication = 0;
  
      for (let number of storage) {
        number2 = number;
  
        if (storage.slice(-1) === 0) break;
  
        number1 = storage.slice(-2, -1)[0];
      }
  
      let withoutResult = `${number1 + caracter + number2}`;
  
      switch (caracter) {
        case "+":
          sum = number1 + number2;
          history.set(withoutResult, sum);
  
          return sum;
          break;
  
        case "-":
          subtraction = number1 - number2;
          history.set(withoutResult, subtraction);
  
          return subtraction;
          break;
  
        case "/":
          division = number1 / number2;
          history.set(withoutResult, division);
  
          return division;
          break;
  
        case "*":
          multiplication = number1 * number2;
          history.set(withoutResult, multiplication);
  
          return multiplication;
          break;
  
        default:
          break;
      }
    }
  
    const equals = () => expressionToCalculate(signal);
  
    const list = () => {
      return history;
    };
  
    const reset = () => {
      history.clear();
      storage.splice(0, storage.length);
  
      return storage;
    };
  
    return { enter, equals, list, reset };
  })();
  
  console.log(calculator.enter(6));
  console.log(calculator.enter("+"));
  console.log(calculator.enter(5));
  console.log(calculator.equals());
  
  console.log(calculator.enter(50));
  console.log(calculator.enter("-"));
  console.log(calculator.enter(30));
  console.log(calculator.equals());
  
  console.log(calculator.enter(4));
  console.log(calculator.enter("*"));
  console.log(calculator.enter(0));
  console.log(calculator.equals());
  
  console.log(calculator.enter(10));
  console.log(calculator.enter("/"));
  console.log(calculator.enter(9));
  console.log(calculator.equals());
  
  console.log(calculator.list());
  console.log(calculator.reset());