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
  module.exports = {Tienda,Cambio};
  