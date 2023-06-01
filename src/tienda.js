function Tienda(monto,efectivo) {
    let ingresos=[];
    ingresos[0]=monto;
    ingresos[1]=efectivo;

    return ingresos;
  }
  
  function Cambio(billetes) {
    let cambio= billetes[1]-billetes[0];
    return cambio;
  }

  function cambioDeMoneda(monto) {
    const monedasDisponibles = [5, 2, 1, 0.5, 0.2];
    const cambio = [];
  
    let i = 0;
    while (monto > 0) {
      if (monto >= monedasDisponibles[i]) {
        cambio.push(monedasDisponibles[i]);
        monto -= monedasDisponibles[i];
      } else {
        i++;
      }
    }
  
    return cambio;
  }

  module.exports = {Tienda,Cambio,cambioDeMoneda};
  