import {Tienda,Cambio} from "./tienda.js";

describe("Ingresar Montos", () => {
  it("deberia ingresar un monto y devolverlo", () => {
    expect(Tienda(10)).toEqual([10]);
  });
  it("deberia ingresar un monto de venta y el efectivo y devolver los valores ingresados", () => {
    expect(Tienda(10,20)).toEqual([10,20]);
  });
  it("deberia realizar la operacion para devolver el cambio correspondiente", () => {
    expect(Cambio([10,20])).toEqual(10);
  });
});