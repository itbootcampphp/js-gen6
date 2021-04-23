let a = 7;
let b = 8;

// 1. način
if (a == b) {
    console.log("a i b su jednake vrednosti");
}
else {
    console.log("a i b nisu jednake vrednosti");
}

// 2. način 
if (a != b) {
    console.log("a i b nisu jednake vrednosti");
}
else {
    console.log("a i b su jednake vrednosti");
}

// Dodavanje HTML elementa iz script fajla
document.body.innerHTML = "<h1>Ovo je <i>if-else</i> naredba grananja</h1>";
document.body.innerHTML += "<h3>Zadaci</h3>";

// Ukoliko dodamo samo otvoren tag, automatski će ga zatvoriti (i obrnuto, automatski otvara zatvoren tag)
// document.body.innerHTML += "<p>";
// document.body.innerHTML += "Zadaci za vežbanje...";
// document.body.innerHTML += "</p>";

let v = 2021;
document.body.innerHTML +=
    `<p>
    Hello...
    <span style="color: red;" class="podvuceno">world</span>
</p>
<p>
    Godina je ${v} :)
</p>
`;

console.log("Vrednost promenljive v je " + v);
console.log(`Vrednost promenljive v je ${v}`);

let slika = "rose.png";
document.body.innerHTML += `<img src="${slika}">`;

let d = new Date();
let h = d.getHours();
console.log(h);

// 6. zadatak
let a1 = 5;
let a2 = 17;
let a3 = 13;

let maks = a1; //Pretpostavka da je najveći 1. broj
if (a2 > maks) {
    maks = a2;
}
if (a3 > maks) {
    maks = a3;
}
console.log(maks);

// IF - ELSE IF - ELSE
let broj = 10;

if (broj < 0) {
    console.log("Broj je manji od nule");
}
else if (broj == 0) {
    console.log("Broj je jednak nuli");
}
else if (broj > 0) {
    console.log("Broj je veći od nule");
}
else {
    console.log("Došlo je do greške");
}

console.log("KRAJ");

let ime = "Jelena";
let brSlova = ime.length;
if (brSlova > 10) {
    console.log("Dugačko ime");
}
else {
    console.log("Nije dugačko ime");
}

// 10. zadatak
/*
Uporediti dva uneta datuma i ispisati koji od njih je raniji. 
*/
let dat1 = "2020-01-01";
let dat2 = "2020-05-01";
if (dat1 < dat2) {
    console.log(`${dat1} je bio pre ${dat2}`);
}
else if (dat2 < dat1) {
    console.log(`${dat2} je bio pre ${dat1}`);
}
else {
    console.log(`${dat1} i ${dat2} su isti`);
}

// 2. način
let dan1 = 01;
let mes1 = 06;
let god1 = 2021;

let dan2 = 02;
let mes2 = 06;
let god2 = 2021;

if (god1 < god2) {
    console.log("Datum 1 je raniji");
}
else if (god2 < god1) {
    console.log("Datum 2 je raniji");
}
// Pošto su godine iste, proveravano za mesece
else if (mes1 < mes2) {
    console.log("Datum 1 je raniji");
}
else if (mes2 < mes1) {
    console.log("Datum 2 je raniji");
}
// Pošto su i godine i meseci isti, proveravamo za dane
else if (dan1 < dan2) {
    console.log("Datum 1 je raniji");
}
else if (dan2 < dan1) {
    console.log("Datum 2 je raniji");
}
// Pošto su i godine i meseci i dani isti, datumi su jednaki
else {
    console.log("Datum 1 i datum 2 su isti");
}

//////////////////////

let stepeni = -10;

if (stepeni < 0) {
    console.log("Ispod 0 stepeni");
}
if (stepeni < 10) {
    console.log("Ispod 10 stepeni");
}
if (stepeni < 20) {
    console.log("Ispod 20 stepeni");
}
else {
    console.log("20 i više stepeni");
}

//////////////////////////

if (stepeni < 0) {
    console.log("Ispod 0 stepeni");
}
else if (stepeni < 10) {
    console.log("Ispod 10 stepeni");
}
else if (stepeni < 20) {
    console.log("Ispod 20 stepeni");
}
else {
    console.log("20 i više stepeni");
}


///////////////////////////

let poeni = 81;

if (poeni > 100) {
    console.log("Poeni ne mogu uzeti vrednost veću od 100");
}
else if (poeni >= 91) {
    console.log("Ocena 10");
}
else if (poeni >= 81) {
    console.log("Ocena 9");
}
else if (poeni >= 71) {
    console.log("Ocena 8");
}
else if (poeni >= 61) {
    console.log("Ocena 7");
}
else if (poeni >= 51) {
    console.log("Ocena 6");
}
else {
    console.log("Pali ste ispit");
}

////////////

let pol = "m";
let god = 32;

if (pol == "z") {
    console.log("Osoba ženskog pola");
    if (god >= 18) {
        console.log("Osoba je ženskog pola i punoletna je");
    }
    else {
        console.log("Osoba je ženskog pola i maloletna je");
    }
}
else {
    console.log("Osoba muškog pola");
    if (god >= 18) {
        console.log("Osoba je muškog pola i punoletna je");
    }
    else {
        console.log("Osoba je muškog pola i maloletna je");
    }
}

// 12. zadatak
/*
Za unet početak i kraj radnog vremena dva lekara ispisati DA ukoliko se njihove smene preklapaju, u suprotnom ispisati NE.
*/
// Početak i kraj radnog vremena prvog lekara
let p1 = 14;
let k1 = 20;

// Početak i kraj radnog vremena drugog lekara
let p2 = 12;
let k2 = 19;

if (k1 < p2) {
    console.log("NE");
}
else if (k2 < p1) {
    console.log("NE");
}
else {
    console.log("DA");
}

let broj1 = 33;
let broj2 = 3;
if (broj1 % broj2 == 0) {
    console.log(`${broj1} je deljiv brojem ${broj2}`);
}
else {
    console.log(`${broj1} nije deljiv brojem ${broj2}`);
}

console.log(broj);
console.log(broj + 1); // U promenmljivoj broj i dalje je zabeležena stara vrednost
console.log(broj);

//Na ovaj način upisujemo u promenljivu
//broj++;
//broj += 1;
//broj = broj + 1;