function ispisKonzola(poruka) {
    console.log(poruka);
}

function ispisStranica(poruka) {
    let div = document.getElementById('container');
    // div.innerHTML = poruka; - ako se brise stari sadrzaj div-a
    div.innerHTML += poruka + "<br>";
}

function ispisNiza(niz, cb) {
    let poruka = "";
    for(let i = 0; i < niz.length; i++) {
        poruka += niz[i] + " ";
    }
    cb(poruka); // poziv callback funkcije
}

let a = [5, -9, 11, 9, 4];
let b = ["Vuk", "Nikola", "Jelena", "Jelena", "Anita"];
ispisNiza(a, ispisKonzola); // poziv funkcije ispisNiza
ispisNiza(a, ispisStranica); // poziv funkcije ispisNiza
ispisNiza(b, ispisKonzola); // poziv funkcije ispisNiza
ispisNiza(b, ispisStranica); // poziv funkcije ispisNiza

// pozivi funkcije preko anonimnih callback funkcija

ispisNiza(a, par => {
    console.log(par);
});

ispisNiza(a, function(par) {
    let div = document.getElementById('container');
    div.innerHTML += par + '<br>';
});


// forEach petlja
function ispis(poruka) {
    console.log(`Element niza je: ${poruka}`);
}

a.forEach(ispis);
// forEach petlja poziva callback funkciju za svaki element niza,
// a prosledjuje taj element niza kao parametar callback funkciji
// Na primer, za niz a = [5, -9, 11, 9, 4]
// a.forEach poziva:
// ispis(5);
// ispis(-9);
// ispis(11);
// ispis(9);
// ispis(4);
b.forEach(ispis);


a.forEach(e => {
    console.log(`Element niza je: ${e}`);
});

b.forEach((e, i) => {
    console.log(`Element ${e} sa indeksom ${i}`);
});

// Ispis elemenata niza sa parnim indeksom
b.forEach((e, i) => {
    if(i % 2 == 0) {
        console.log(`Element ${e} ima paran indeks`);
    }
});


// Odrediti zbir elemenata celobrojnog niza
let zbirNiza = niz => {
    let zbir = 0;
    niz.forEach(elem => {
        zbir += elem;
    });
    return zbir;
}

console.log(zbirNiza(a));

// Odrediti srednju vrednost elemenata celobrojnog niza
let srVrNiza = niz => {
    let srvr = 0;
    niz.forEach(elem => {
        srvr += elem;
    });
    srvr /= niz.length;
    return srvr;
}

console.log(srVrNiza(a));


// Odrediti maksimalnu vrednost u celobrojnom nizu
let maxNiz = niz => {
    let max = niz[0];
    niz.forEach(elem => {
        if(elem > max) {
            max = elem;
        }
    });
    return max;
}

let c = [15, 7, 8, 15, 15, 0, 9, 15, 0, 2];

console.log(maxNiz(c));

/*
    Napisati funkciju koja vraca broj elemenata sa:
      - maksimalnom vrednoscu
      - minimalnom vrednoscu
*/

/*
let brojMaxNiz = niz => {
    let max = maxNiz(niz);
    let broj = 0;
    niz.forEach(elem => {
        if(elem == max) {
            broj++;
        }
    });
    return broj;
}

let brojMinNiz = niz => {
    let min = minNiz(niz);
    let broj = 0;
    niz.forEach(elem => {
        if(elem == min) {
            broj++;
        }
    });
    return broj;
}
*/

let brojSvojstvoNiz = (niz, svojstvo) => {
    let s = svojstvo(niz);
    let broj = 0;
    niz.forEach(elem => {
        if(elem == s) {
            broj++;
        }
    });
    return broj;
}

console.log("Broj elemenata sa maksimalnom vrednoscu jednak je: " + brojSvojstvoNiz(c, maxNiz));
//console.log("Broj elemenata sa minimalnom vrednoscu jednak je: " + brojSvojstvoNiz(c, minNiz));