import { Film } from "./film.js";

// let film1 = new Film("Neki naslov", "Neki režiser", 2001, [9, 7, 9, 8.2, 6]);
// console.log(film1.ocene); //Vraća niz ocena
// film1.ocene.forEach(o => {
//     console.log(o);
// });

let film1 = new Film("Drakula", "Neki tamo reziser", 2001, [9, 7, 9, 8.2, 6]);
let film2 = new Film("Film 2", "Neki tamo drugi reziser", 1707, [5, 7, 9, 6]);
let film3 = new Film("Film3", "Neki tamo treci reziser", 1997, [10, 9, 10]);
let filmovi = [film1, film2, film3];

/*
Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku

// 1900. - 19. vek
// 1901. - 20. vek
// 1902. - 20. vek
// ....
// 2000. - 20. vek
// 2001. - 21. vek
*/

// Math.flor(1952/100) -> 19
// Math.flor(2000/100) -> 20
// Math.ceil(1952/100) -> 20
// Math.round(1952/100) -> 20

let vekFilmova = (niz, vek) => {
    niz.forEach(f => {
        if (Math.ceil(f.godina / 100) == vek) {
            //if (f.godina > (vek - 1) * 100 && f.godina <= vek * 100) {
            f.stampaj();
        }
    });
}

vekFilmova(filmovi, 21);

/*
Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.
*/
let prosecnaOcena = niz => {
    // niz - niz objekata
    let suma = 0;
    let br = 0;
    niz.forEach(obj => {
        // obj je jedan film tj. jedan objekat
        // obj.ocene to je niz ocena
        obj.ocene.forEach(o => {
            suma += o;
            br++;
        });
        // br += obj.ocene.length;
    });

    return suma / br;
}

console.log(prosecnaOcena(filmovi));

/*
Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film.
*/
let najboljeOcenjeni = niz => {
    let najbolji = niz[0]; // Čuva objekat - najbolji film
    //let najboljiOcena = najbolji.prosek();
    niz.forEach(film => {
        if (film.prosek() > najbolji.prosek()) {
            najbolji = film;
        }
    });
    return najbolji;
}
console.log("Najbolje ocenjeni film");
najboljeOcenjeni(filmovi).stampaj();

/*
Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.
*/
/*
film1 -> 8.5
film2 -> 7

globalni -> 8

|film1 - globalni| = |8.5 - 8| = |0.5| = 0.5
|film2 - globalni| = |7 - 8| = |-1| = 1
*/

let osrednjiFilm = niz => {
    let najbliziObj = niz[0]; //pretpostavka da je prvi film (objekat) najbliži generalnom proseku
    let prosecnaGlobal = prosecnaOcena(niz);
    let najbliziRazlika = Math.abs(najbliziObj.prosek() - prosecnaGlobal);

    niz.forEach(f => {
        let razlikaTekuceg = Math.abs(f.prosek() - prosecnaGlobal); //Koliko se tekući film razlikuje od globalne prosečne ocene
        if (najbliziRazlika > razlikaTekuceg) {
            najbliziRazlika = razlikaTekuceg;
            najbliziObj = f;
        }
    });

    return najbliziObj;
}

filmovi.forEach(f => {
    console.log(f.naslov, f.prosek());
});

console.log("Osrednji film je: " + osrednjiFilm(filmovi).naslov);
