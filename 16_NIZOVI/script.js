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

// 12. Odrediti broj parnih elemenata sa neparnim indeksom.
let nizBrojeva = [10, 16, 15, 17, 12, -14];
let brElem = 0;
for (let i = 0; i < nizBrojeva.length; i++) {
    // indeks - i
    // element - nizBrojeva[i]
    if (nizBrojeva[i] % 2 == 0 && i % 2 != 0) {
        brElem++;
    }
}
console.log(brElem);

// Promena znaka promenljive
let a = 5;
//a *= (-1); // a = a * (-1);
a = -a;
console.log(a);

// 16. Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.
let namirnice = ["krema", "voće", "povrće", "mleko", "jaja"];
namirnice[0] = "sok";

let lista = `<ul>`;
for (let i = 0; i < namirnice.length; i++) {
    lista += `<li> ${namirnice[i]} </li>`;
}
lista += `</ul>`;

namirnice[0] = "hleba";

document.body.innerHTML += lista;

////////////////////////

let rec = "abcdefg ! ?";
console.log(rec.length);
console.log(rec[0]);
console.log(rec[5]);

for (let i = 0; i < rec.length; i++) {
    console.log(rec[i]);
}

// 21. Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.
let stringovi = ["ana", "milica", "jelena"];
let sumaDuzina = 0;
for (let i = 0; i < stringovi.length; i++) {
    sumaDuzina += stringovi[i].length;
}
let arSrDuzina = sumaDuzina / stringovi.length;
console.log(arSrDuzina);

let brNatprosecnih = 0;
for (let i = 0; i < stringovi.length; i++) {
    let rec = stringovi[i];
    let duzinaReci = rec.length;
    if (duzinaReci > arSrDuzina) {
        brNatprosecnih++;
    }
}
console.log(brNatprosecnih);

let sum = 0;
for (let i = 0; i < stringovi.length; i++) {
    let rec = stringovi[i];
    let duzinaReci = rec.length;
    sum += duzinaReci;
    if (duzinaReci > sum / stringovi.length) {
        brNatprosecnih++;
    }
}

// 22. Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 
stringovi = ["Miloš", "Milan", "Goran", "Aleksandar"];

// 1. NAČIN
// rec.includes("a") - vraća true ukoliko rec sadrži slovo "a", u suprotnom vraća false
let brStringovaSaSlovomA = 0;
for (let i = 0; i < stringovi.length; i++) {
    let rec = stringovi[i];
    if (rec.includes("a") || rec.includes("A")) {
        brStringovaSaSlovomA++;
    }
}
console.log(brStringovaSaSlovomA);

// 2. NAČIN
let brStringovaSaSlovomA2 = 0;
// Ova for petlja ide element po element u nizu
for (let i = 0; i < stringovi.length; i++) {
    let rec = stringovi[i];
    // Ova for petlja ide slovo po slovo u reči
    for (let j = 0; j < rec.length; j++) {
        //rec[j] je karakter u reči (slovo u reči)
        if (rec[j] == "a" || rec[j] == "A") {
            brStringovaSaSlovomA2++;
            break; // j = rec.length;
        }
    }
}
console.log(brStringovaSaSlovomA2);

