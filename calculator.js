
// Se crea un archivo calculator.js que contendrá el código de una calculadora:

// En este archivo, estamos definiendo un objeto calculator que tiene cuatro funciones para realizar
// operaciones matemáticas básicas. La función divide también verifica si el segundo argumento es
// cero y arroja un error si es así.


const calculator = {
    add: (a, b) => {
      return a + b;
    },
    subtract: (a, b) => {
      return a - b;
    },
    multiply: (a, b) => {
      return a * b;
    },
    divide: (a, b) => {
      if (b === 0) {
        throw new Error("No se puede dividir por cero");
      }
      return a / b;
    }
  };
  
  module.exports = calculator;
  