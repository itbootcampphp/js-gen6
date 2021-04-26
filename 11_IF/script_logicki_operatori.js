let a = 5;

if((a > 0) && (a < 10)) { // KONJUNKCIJA: (a > 0) I (a < 10)
    console.log("Oba logicka uslova su zadovoljena");
}
else {
    console.log("Barem jedan uslov nije zadovoljen");
}

let b = 5;

if((b < 0) || (b > 15)) { // DISJUNKCIJA: (b < 0) ILI (b > 15)
    console.log("Barem jedan logicki uslov je zadovoljen");
}
else {
    console.log("Nijedan uslov nije zadovoljen");
}

let c = -3;
if(!(c < 0)) { // NEGACIJA: nije (c < 0)
    console.log(`Broj ${c} je nenegativan`);
}
else {
    console.log(`Broj ${c} je negativan`);
}


// Ispisati pol osobe i "pravni status"
let pol = "z";
let godine = 4; // Neki broj >= 18 ili < 18

if(pol == "m" && godine >= 18) {
    console.log("Punoletna osoba muskog pola");
}
else if(pol == "m" && godine < 18) { //   !(pol == "m" && godine >= 18)     ===       pol != "m" || godine < 18
    console.log("Maloletna osoba muskog pola");
}
else if(pol == "z" && godine >= 18) {  // pol != "m"
    console.log("Punoletna osoba zenskog pola");
}
else {
    console.log("Maloletna osoba zenskog pola");
}
