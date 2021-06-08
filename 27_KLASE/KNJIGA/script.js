import { Knjiga } from "./knjiga.js";
let knjiga1 = new Knjiga("Bajke", "Hans Hristijan Andersen", 2004, 714, 500);
knjiga1.stampaj();
console.log("Da li je knjiga obimna: " + knjiga1.obimna());
console.log("Da li je knjiga skupa: " + knjiga1.skupa());
console.log(`Ime autora je ${knjiga1.autor}; Da li je ime dugačko: ${knjiga1.dugackoIme()}`);

let knjiga2 = new Knjiga("Hajdi", "Johana Špiri", 1994, 304, 600);
let knjiga3 = new Knjiga("Orlovi rano lete", "Branko Ćopić", 2020, 186, 400);

let arrKnjige = [knjiga1, knjiga2, knjiga3];
console.log(arrKnjige);

// Ispis svih podataka iz niza arrKnjige

// 1. način
arrKnjige.forEach(knjiga => {
    knjiga.stampaj();
});

// 2. način
for (let i = 0; i < arrKnjige.length; i++) {
    // arrKnjige[i] je objekat
    arrKnjige[i].stampaj();
}

// Koliko je ukupna cena svih knjiga
let ukupnaCena = niz => {
    let suma = 0;
    niz.forEach(k => {
        suma += k.cena; //k.cena je geter i pozivam ga bez ()
    });
    return suma;
}

console.log("Ukupna cena svih knjiga iz niza je: " + ukupnaCena(arrKnjige));

// Kolika je prosečna cena knjige
let prosecnaCena = niz => {
    let ukupna = ukupnaCena(niz);
    let brKnjiga = niz.length;
    return ukupna / brKnjiga;
}

console.log("Prosečna cena knjige je: " + prosecnaCena(arrKnjige));

// Koliko je prosečna cena stranice knjige
let prosecnaStranica = niz => {
    let ukupna = ukupnaCena(niz);
    let ukupnoStranica = 0;
    niz.forEach(k => {
        ukupnoStranica += k.brojStrana;
    });

    return ukupna / ukupnoStranica;
}

console.log("Jedna stranica knjige u proseku košta: " + prosecnaStranica(arrKnjige));





