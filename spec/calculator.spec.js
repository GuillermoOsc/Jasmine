// En este archivo, estamos importando nuestro objeto calculator del archivo calculator.js.
 
// Luego utilizamos la función describe para agrupar nuestras pruebas relacionadas con cada función de la calculadora.
// Dentro de cada grupo de pruebas, utilizamos la función it para escribir cada prueba individual.
// Dentro de cada prueba, estamos utilizando la función expect para realizar una aserción sobre el valor de 
//retorno de la función de la calculadora correspondiente. Por ejemplo, estamos usando toEqual para verificar
// que el valor de retorno de la función add es igual al valor esperado. También estamos usando toThrowError
// para verificar que la función divide arroja un error específico cuando se le pasa un divisor de cero.


const calculator = require("../calculator");

describe("calculator", () => {
  describe("add", () => {
    it("debe sumar dos números", () => {
      expect(calculator.add(2, 3)).toEqual(5);
      expect(calculator.add(-1, 5)).toEqual(4);
      expect(calculator.add(0, 0)).toEqual(0);
    });
  });
  
  describe("subtract", () => {
    it("Debe restar dos números", () => {
      expect(calculator.subtract(5, 3)).toEqual(2);
      expect(calculator.subtract(5, -3)).toEqual(8);
      expect(calculator.subtract(0, 0)).toEqual(0);
    });
  });
  
  describe("multiply", () => {
    it("debe multiplicar dos números", () => {
      expect(calculator.multiply(2, 3)).toEqual(6);
      expect(calculator.multiply(-1, 5)).toEqual(-5);
      expect(calculator.multiply(0, 0)).toEqual(0);
    });
  });
  
  describe("divide", () => {
    it("debe dividir dos números", () => {
      expect(calculator.divide(6, 3)).toEqual(2);
      expect(calculator.divide(-10, 2)).toEqual(-5);
    });
    
    it("debe arrojar un error si se divide por cero", () => {
      expect(() => calculator.divide(5, 0)).toThrowError(Error, "No se puede dividir por cero");
    });
  });
});
