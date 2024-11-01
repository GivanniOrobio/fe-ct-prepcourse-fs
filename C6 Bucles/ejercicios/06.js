function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
 
  if ( num > 99 && num < 1000 && Number.isInteger(num)) {
    return true;
  } else {
    return false;
  }

}
module.exports = tieneTresDigitos;
