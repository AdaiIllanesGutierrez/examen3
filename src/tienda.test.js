import {Tienda,Cambio,cambioDeMoneda} from "./tienda.js";

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
describe("Ingresar Montos", () => {
    it('debería devolver [5, 5, 5, 2, 2] al pasar 19', () => {
        const resultado = cambioDeMoneda(19);
        expect(resultado).toEqual([5, 5, 5, 2, 2]);
    });
    it('debería devolver [5, 5, 2, 1] al pasar 13', () => {
        const resultado = cambioDeMoneda(13);
        expect(resultado).toEqual([5, 5, 2, 1]);
    });
   
  });