let voce = ["jagoda", "jabuka", "malina", "kupina", "ananas", "breskva"];
console.log(voce);
console.log(voce[2]);

voce[2] = "trešnja";
console.log(voce);

// Ispis elemenata niza
console.log(voce[0], voce[1], voce[2]);

// Ispis elemenata niza korišćenjem petlje
for (let i = 0; i < voce.length; i++) {
    console.log(voce[i]);
}

//Broj elemenata niza
console.log(voce.length);

// voce[3] = "ananas";
// console.log(voce);

voce = ["kajsija", "dunja", "višnja"];
console.log(voce);

const povrce = ["tikvica", "boranija", "krompir"];
console.log(povrce);
povrce[0] = "tikva";
console.log(povrce);

//povrce = ["grašak", "pasulj"]; //Ne mogu ponovo da dodeljujem  vrednost konstantnoj varijabli

let razno = [3, -15.5, false, "bla bla bla", ["a", "b", "c"]];
console.log(razno);

//2. Odrediti zbir elemenata celobrojnog niza.
let brojevi = [150, 140, 360, 120, 180];
let suma = 0;
for (let i = 0; i < brojevi.length; i++) {
    suma += brojevi[i];
}
console.log(suma);

//3. Odrediti proizvod elemenata celobrojnog niza.
let p = 1;
for (let i = 0; i < brojevi.length; i++) {
    p *= brojevi[i];
}
console.log(p);

//4. Odrediti srednju vrednost elemenata celobrojnog niza.
let arsr = suma / brojevi.length;
console.log(`Aritmetička sredina niza je: ${arsr}`);

let aritmeticka = niz => {
    let s = 0;
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        s += niz[i];
        br++;
    }
    return s / br;
}
console.log(aritmeticka([2, 3, 4, 5]));
console.log(aritmeticka([-4, 10, 3]));
console.log(aritmeticka(brojevi));

//5. Odrediti maksimalnu vrednost u celobrojnom nizu.
//brojevi = [150, 140, 360, 120, 180];

let maksVr = brojevi[0];
for (let i = 0; i < brojevi.length; i++) {
    if (maksVr < brojevi[i]) {
        maksVr = brojevi[i];
    }
}
console.log(maksVr);

//7. Odrediti indeks maksimalnog elementa celobrojnog niza.
// 1. način
brojevi = [150, 140, 360, 120, 180, 360, 140, 360];
let indeks = 0;
for (let i = 0; i < brojevi.length; i++) {
    if (maksVr == brojevi[i]) {
        indeks = i; // Bey break ispisuje poslednji indeks maksimalnog elementa
        //break; //Sa break ispisuje prvi indeks maksimalnog elementa
    }
}
console.log(indeks);

// 2. način
let maksVrednost = brojevi[0];
let maksIndeks = 0;
for (let i = 0; i < brojevi.length; i++) {
    if (brojevi[i] >= maksVrednost) {
        //>= daje poslednji indeks, dok > daje prvi indeks
        maksVrednost = brojevi[i];
        maksIndeks = i;
    }
}
console.log(maksIndeks);
