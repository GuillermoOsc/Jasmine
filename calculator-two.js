const Math = require('./math');

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(n) {
    this.result = Math.sum(this.result, n);
  }

  subtract(n) {
    this.result = Math.difference(this.result, n);
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }
}

module.exports = Calculator;
