console.log(3);
console.log(-15.3867);

console.log("Proizvoljan tekst");
console.log('Jos jedan tekst');
console.log("Mark's pen");
console.log('Mark"s pen');
console.log('Mark\'s Pen');
console.log("Mark\"s Pen");

console.log("-15.3867ffgdgfADSdasdas23232!@$");

console.log(3 + 5); // + radi kao sabiranje brojeva
console.log("3" + "5"); // + radi kao konkatenacija stringova
console.log(3 + "5"); // broj 3 se konvertuje u string "3", pa se vrsi konkatenacija stringova
console.log("3" + 5); // broj 5 se konvertuje u string "5", pa se vrsi konkatenacija stringova

console.log(true); // logicka vrednost true (tacno)
console.log(false); // logicka vrednost false (netacno)

let x; // deklarisanje promenljive x
console.log("tralala");
x = 3; // x dobija vrednost 3

console.log(x);

x = 5;
console.log(x);

x = "Pera Zdera";
let y = true;
y = 0.5;
console.log(x, y);

const pi = 3.14;
console.log(pi);

// pi = 3.1415; // Ne možemoo ponovno dodeliti vrednost konstanti
// const pi = 3.1415; // Ne možemo ponovo deklarisati konstantu

let a;
console.log(a); //undefined vrednost promenljive

//console.log(b); //nedefinisana promenljiva
let recenica = "JS kaže: \" Hello world! \" ";
console.log(recenica);

recenica = `JS kaže: " Ili kupi alat, il' ostavi zanat! " `;
console.log(recenica);

let god;
console.log(god, god + 3); // undefined, NaN - Not a Number

let god1 = null;
console.log(god1, god1+3); 

// Konkatenacija stringova
let ime = "Jelena";
let prezime = "Matejić";
let imePrezime = ime + " " + prezime; // + kada koristimo reči on vrši konkatenaciju tj. nadovezuje reči
console.log(imePrezime);
console.log(ime.length + prezime.length); // + kada koristimo brojeva vrši sabiranje brojeva

// Osnovne aritmetičke operacije
let p = 7;
let q = 3;

let zbir = p + q;
console.log(zbir);

let razlika = p - q;
console.log(razlika);

let proizvod = p * q;
console.log(proizvod);

let kolicnik = p / q;
console.log(kolicnik);

//+=, -=, *=, /=
p += 3; // ekvivalentno p = p + 3;
console.log(p); //10

p -= 5; // ekvivalentno p = p - 5;
console.log(p); //5

//++ - Povećava vrednost promenljive za 1
console.log(p); //5
p++;
console.log(p); //6


let r = 50;
console.log(r++); //50 //r++ prvo ispiše r, pa ga poveća za +1 (u ovoj liniji ne vidimo povećanja)
console.log(r); //51 povećao je nakon prethodne linije

let k = 50;
console.log(++k); //51 //++k prvo poveća, pa onda ispiše (u ovoj liniji odmah vidimo povećanje)

/*
    7 / 3 = 2 (+ ost. 1)
*/
x = 7;
y = 3;
ost = 7 % 3; // Računanje ostatka pri deljenju
console.log(ost);

stepen = y**4;
console.log(stepen); // Stepenovanje

let x1 = "godina";
let y1 = "prestupna";
console.log(x1 + " " + y1);

let rezultat = 26 + "godina"; //Nadovezuje kao da su dva stringa u pitanju
console.log(rezultat);

let rezultat1 = "26" + "godina";
console.log(rezultat1);

let rezultat3 = 26 + 1 + "godina"; // Prvo sabere 26+1, i onda tek nadoveže na reč godina
console.log(rezultat3);

let rezultat4 = 26 + "godina" + 1;
console.log(rezultat4);

let rezultat5 = "26" + "1" + "godina";
console.log(rezultat5);

let rezultat6 = 26 / "godina";
console.log(rezultat6); //NaN





