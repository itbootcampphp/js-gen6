// Imenovane funkcije
function suma(a, b) { // Deklaracija imenovane funkcije
    return a + b;
}

console.log(suma(1, 2)); // Poziv f-je: ime funkcije i prosledjivanje vrednosti


// Anonimne funkcije
let suma2 = function(a, b) { // Deklaracija anonimne funkcije
    return a + b;
}

console.log(suma2(3, 4)); // Poziv anonimne f-je je preko promenljive u kojoj je sacuvana


// Arrow funkcije
let suma3 = (a, b) => {
    return a + b;
}

console.log(suma3(4, 6));


// Arrow f-ja koja ispisuje "hello world!"
let hello = () => {
    console.log("Hello world!");
}

hello();
hello();

// Arrow f-ja koja pozdravlja korisnika
let korisnik = (ime) => {
    console.log(`Hello ${ime}!`);
}

korisnik("Stefan");
korisnik("Jelena");

// Arrow f-ja koja ispisuje ime korisnika, kao i pravni status
let korisnik2 = (ime, godine) => {
    if(godine < 18) {
        let ispis = "Korisnik " + ime + " je maloletno lice";
        document.body.innerHTML += `<p style='color: green'>${ispis}</p>`;
    }
    else {
        let ispis = "Korisnik " + ime + " je punoletno lice";
        document.body.innerHTML += `<p style='color: yellow'>${ispis}</p>`;
    }
}

korisnik2("Glorija", 28);
korisnik2("Petar", 7);


// Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
// Prvi nacin
let slika = (putanja) => {
    return `<img src='${putanja}'>`;
}

// Drugi nacin
let slika2 = (putanja) => `<img src='${putanja}'>`;

// Treci nacin
let slika3 = putanja => `<img src='${putanja}'>`;

// Pozivi
document.body.innerHTML += slika('images/1.jpg');
document.body.innerHTML += slika2('images/2.jpg');
document.body.innerHTML += slika3('images/3.jpg');


// Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.
let maks2 = (a, b) => {
    if(a > b) {
        return a;
    }
    else {
        return b;
    }
    // ???? return if(a > b) { a } else { b }
}

let max2 = (a, b) => (a > b) ? a : b;

let max4 = (a, b, c, d) => max2(max2(a, b), max2(c, d));

let maks4 = (a, b, c, d) => max2(max2(max2(a, b), c), d);


console.log(max2(3, 4));
console.log(max2(4, 3));
console.log(max4(4, 7, -9, 3));

// Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.
let neparan = n => {
    if(n % 2 == 1) {
        return true;
    }
    else {
        return false;
    }
}

console.log(neparan(5));
console.log(neparan(6));

let neparan2 = n => (n % 2 == 1);

console.log(neparan2(7));
console.log(neparan2(8));