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

// 5. ZADATAK
// Napraviti input polje i dugme.U input polje treba da se unese ime neke osobe, a na ekranu u paragrafu da se ispiše Zdravo i ime osobe preuzeto iz input polja.
//DOM
let btnPosalji = document.getElementById('posalji');
let inputIme = document.getElementById('ime');
let pPrikaziIme = document.getElementById('prikaziIme');

btnPosalji.addEventListener('click', () => {
    let upisanoIme = inputIme.value;
    pPrikaziIme.innerHTML = `Zdravo ${upisanoIme}`;
});

// 6. ZADATAK
// Dopuniti 5. zadatak dodavanjem eventa i proizvoljnog alert-a, kada se klikne dva puta na dugme.
btnPosalji.addEventListener('dblclick', () => {
    let upisanoIme = inputIme.value;
    alert(`Hello ${upisanoIme}`);
});

// 5. ZADATAK - drugi način
let inputPrezime = document.getElementById('prezime');
let btnPosaljiPrezime = document.getElementById('posaljiPrezime');
let pPrikaziPrezime = document.getElementById('prikaziPrezime');

btnPosaljiPrezime.addEventListener('click', e => {
    e.preventDefault();
    console.log(e);
    pPrikaziPrezime.innerHTML = `Uneli ste prezime ${inputPrezime.value}`;
    inputPrezime.value = "";
});

// PRIMER
let forma = document.getElementById('forma');
let inputJelo = document.getElementById('jelo');
let inputPice = document.getElementById('pice');
let pIspis = document.getElementById('ispis');

forma.addEventListener('submit', e => {
    e.preventDefault();
    pIspis.innerHTML =
        `<ul>
        <li>Omiljeno jelo: ${inputJelo.value}</li>
        <li>Omiljeno piće: ${inputPice.value} </li>
    </ul>`;
    forma.reset(); // resetuje sva polja u formi na koju se odnosi
});