import Tienda from "./tienda.js";

describe("Ingresar Montos", () => {
  it("deberia ingresar un monto y devolverlo", () => {
    expect(Tienda(10)).toEqual(10);
  });
});