import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
let excusaElemento = document.querySelector("#excusa");

let quien = ["mi casa", "mi movil", "mi dinosaurio","mi primo"];
let sucedio = ["exploto","electrocuto", "se incendio", "se comio" ];
let pronombre = ["el", "la", "tu", "nuestra"];
let daño = ["tarea", "ps5", "html"];
let cuando = ["ayer", "hoy", "el viernes"];

function generarExcusa () {
let excusaQuien = quien[Math.floor(Math.random() * quien.length)]
let excusasucedio = sucedio[Math.floor(Math.random() * sucedio.length)]
let excusaDaño = daño[Math.floor(Math.random() * daño.length)]
let excusaCuando = cuando[Math.floor(Math.random() * cuando.length)]
let excusaspronombre = pronombre[Math.floor(Math.random() * pronombre.length)]

  return `${excusaQuien} ${excusasucedio} ${excusaspronombre} ${excusaDaño} ${excusaCuando}`;
}
  excusaElemento.innerText = generarExcusa(); };
