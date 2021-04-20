console.log("Zadaci - Dodela vrednosti");

// 1. Zadatak
/*
Date su dve promenljive u kojima su dati vreme u satima i minutima.  Izračunati koliko minuta je prošlo od ponoći.
*/

let s = 12;
let m = 15;
let odPonoci = s * 60 + m;
console.log("Od ponoći je prošlo: ", odPonoci);

let doPonoci = 24 * 60 - odPonoci;
console.log("Do ponoći je preostalo: ", doPonoci);

// 2. Zadatak
/*
Za dato vreme u minutima koji su prošli od ponoći, odrediti koliko je to u satima i minutima.
*/
//1. način
let minOdPonoci = 123; //123 / 60 = 2 (+ ost. 3) što bi značilo 2 sata i 3 minuta
let h = Math.floor(minOdPonoci / 60); //Math.round zaokružuje kao u matematici na najpribližniji ceo, Math.floor zaokružuje na donji ceo broj, Math.ceil zaokružuje na gornji ceo broj
let min = minOdPonoci % 60;
console.log(h + ":" + min);

//2. način
min = minOdPonoci % 60;
h = (minOdPonoci - min)/60;
console.log(h + ":" + min);

// 3. Zadatak
/*
Date su dve promenljive kojima se zadaje cena robe i uneta novčanica kojom kupac plaća račun. Ispisati koliki kusur kasirka treba da mu vrati.
*/
let cenaRobe = 120;
let novcanica = 200;
let kusur = novcanica - cenaRobe;
console.log(kusur);

// 4. Zadatak
/*
Uraditi zadatak 1 tako da se dohvati trenutno vreme, i za njega odredi koliko minuta je prošlo od ponoći.
*/
let datum = new Date(); //Objekat koji vraća datum
console.log(datum);
let danUNedelji = datum.getDay(); //Vraća dan u nedelji (od 0 do 6, pri čemu je 0 nedelja)
console.log(danUNedelji);
let danUMesecu = datum.getDate(); //Vraća dan u mesecu
console.log(danUMesecu);

let trenutnoSati = datum.getHours();
let trenutnoMinuta = datum.getMinutes();
let trenutnoOdPonoci = trenutnoSati*60 + trenutnoMinuta;
console.log(trenutnoOdPonoci);

// 6. Zadatak
/*
Konverzija valute iz evra u dinare (i obrnuto).
*/
// Evro u dinare
let novacEvri = 200;
let kursEvra = 117.2;
let evriUDinare = novacEvri * kursEvra;
console.log(evriUDinare);

// Dinari u evre
let novacDinari = 2000;
let dinariUEvre = novacDinari / kursEvra;
console.log(dinariUEvre);