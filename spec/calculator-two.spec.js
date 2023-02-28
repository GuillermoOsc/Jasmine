// En este ejemplo, tenemos dos archivos de código fuente: math.js y calculator.js. math.js
// contiene una clase estática Math que tiene dos métodos estáticos:
 
// sum y difference. calculator.js contiene una clase Calculator que utiliza la clase Math
// para implementar la funcionalidad de sumar y restar números. Además, Calculator tiene un 
// método clear para reiniciar el resultado y un método getResult para obtener el resultado
// actual. En el archivo de pruebas, calculator-spec.js, creamos una instancia de Calculator
// en el beforeEach y la limpiamos con el método clear en el afterEach para asegurarnos de que
// el estado de las pruebas no se afecte entre cada una.


const Calculator = require('../calculator-two');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  afterEach(() => {
    calculator.clear();
  });

  describe('add', () => {
    it('should add two numbers', () => {
      calculator.add(2);
      calculator.add(3);
      expect(calculator.getResult()).toEqual(5);
    });
  });

  describe('subtract', () => {
    it('should subtract two numbers', () => {
      calculator.add(5);
      calculator.subtract(3);
      expect(calculator.getResult()).toEqual(2);
    });
  });

  describe('clear', () => {
    it('should reset the result to zero', () => {
      calculator.add(5);
      calculator.clear();
      expect(calculator.getResult()).toEqual(0);
    });
  });
});
