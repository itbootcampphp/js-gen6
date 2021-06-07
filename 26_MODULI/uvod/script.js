// Dohvati promenljivu ime i f-ju zdravo iz modula zdravo.js
import {zdravo, ime} from "./modules/zdravo.js";
//import {hello} from "./zdravo2.js";

let prezime;
prezime = "Stanimirovic";

console.log(ime + " " + prezime); // ? (greska) (Stefan Stanimirovic) (undefined Stanimirovic)

zdravo("Pera");
zdravo(ime);