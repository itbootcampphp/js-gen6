// 1. ZADATAK
// Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br. Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.

let btnBrojac = document.querySelector("#brojac");
let br = 0;
btnBrojac.addEventListener('click', () => {
    br++;
    console.log(br);
});

// 2. ZADATAK
// Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto u konzoli.
let btnBrojac1 = document.getElementById('brojac1');
let pIspisBrojaca1 = document.getElementById('ispisBrojaca1');

let br1 = 0;
pIspisBrojaca1.innerHTML = br1; // Kada definišemo br1, ispišemo njegovu vrednost na ekranu

btnBrojac1.addEventListener('mousedown', () => {
    br1++;
    // pIspisBrojaca1.innerHTML += `${br1} `;
    pIspisBrojaca1.innerHTML = br1; // Svaki put kada kliknemo, ispišemo novu vrednost brojača br1
});

// 3. ZADATAK i 4. ZADATAK
// DOM
let btnMinus = document.getElementById('minus');
let btnPlus = document.getElementById('plus');
let spanIspis = document.getElementById('rez');

let rez = 0;
spanIspis.innerHTML = rez;

btnPlus.addEventListener('click', () => {
    spanIspis.style.color = "black";
    rez++;
    spanIspis.innerHTML = rez;
});

btnMinus.addEventListener('click', () => {
    spanIspis.style.color = "black";
    rez--;
    if (rez < 0) {
        rez = 0;
        spanIspis.style.color = "blue";
    }
    spanIspis.innerHTML = rez;
});