import {Tienda,Cambio} from "./tienda.js";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#calcular-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  if(first.value===""||second.value===""){
    alert("Debe ingresar el monto y el efectivo");
    return;
  }
  
  div.innerHTML = "<p>" + Cambio([firstNumber, secondNumber]) + "</p>";
});
