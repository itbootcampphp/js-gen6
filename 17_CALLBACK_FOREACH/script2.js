/*
U nizu stringova, ispisati sve elemente koji imaju:
  - maksimalnu duzinu
  - minimalnu duzinu
*/

let imena = ["Stefan", "Nikola", "Đorđe", "Milijana", "Ana", "Nenad", "Vuk", "Vladimir"];

let maxDuzinaNiza = niz => {
    let maxDuzina = niz[0].length;
    niz.forEach(elem => {
        if(elem.length > maxDuzina) {
            maxDuzina = elem.length;
        }
    });
    return maxDuzina;
}

console.log(maxDuzinaNiza(imena));

let ispisStringSvojstvo = (niz, svojstvo) => {
    let md = svojstvo(niz);
    niz.forEach(elem => {
        if(elem.length == md) {
            console.log(elem);
        }
    });
}

let minDuzinaNiza = niz => {
    let minDuzina = niz[0].length;
    niz.forEach(elem => {
        if(elem.length < minDuzina) {
            minDuzina = elem.length;
        }
    });
    return minDuzina;
}

ispisStringSvojstvo(imena, maxDuzinaNiza); // maxDuzinaNiza je callback funkcija
ispisStringSvojstvo(imena, minDuzinaNiza); // minDuzinaNiza je callback funkcija

let zad24a = (a, b) => {
    let n = a.length; // let n = b.length;
    let c = [];
    for(let i = 0; i < n; i++) {
        c.push(a[i]);
        c.push(b[i]); 
    }
    return c;
}

let zad24b = (a, b) => {
    let n = a.length;
    let c = [];
    for(let i = 0; i < n; i++) {
        c[2 * i] = a[i];
        c[2 * i + 1] = b[i];
    }
    return c;
}

let zad24c = (a, b) => {
    let n = a.length;
    let c = [];
    let j = 0;
    for(let i = 0; i < n; i++) {
        c[j++] = a[i];
        c[j++] = b[i];
    }
    return c;
}

/*
Rezultat kao string
let zad24d = (a, b) => {
    let n = a.length;
    let c = [];
    for(let i = 0; i < n; i++) {
        c += a[i];
        c += b[i];
    }
    return c;
}
*/

let a = [4, -9, 4, 1];
let b = [8, 8, 1, 0];

let c = zad24a(a, b);
console.log(c);

c = zad24b(a, b);
console.log(c);

c = zad24c(a, b);
console.log(c);

//c = zad24d(a, b);

console.log(c);

let zad25 = (a, b) => {
    let n = a.length;
    let c = [];
    for(let i = 0; i < n; i++) {
        c[i] = a[i] * b[i];
    }
    return c;
}

let zad26 = a => {
    let n = a.length; // n je paran broj
    let b = [];
    for(let i = 0; i < n / 2; i++) {
        b[i] = (a[i] + a[n - 1 - i]) / 2;
    }
}