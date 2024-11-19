/* eslint-disable */
//import "bootstrap";
//import "./style.css";

const who = ["The dog", "My grandma", "The mailman", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "my phone", "the car"];
const when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function excuseGenerator() {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  const randomIndex = arr => Math.floor(Math.random() * arr.length);

  let excuse = `${who[randomIndex(who)]} ${action[randomIndex(action)]} ${what[randomIndex(what)]} ${when[randomIndex(when)]}.`;
  console.log(excuse); //probando q funcione la funcion
  document.getElementById('excuse').innerHTML = excuse;
}

//window.onload = excuseGenerator; //ejecutar

window.onload = function() {
  console.log("Página cargada, generando excusa...");
  excuseGenerator();
};



