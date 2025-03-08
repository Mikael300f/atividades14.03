function dividir(a, b) {
    if (b === 0) {
      return "Não é possível dividir por zero.";
    }
    return a / b;
  }
  
  module.exports = dividir;