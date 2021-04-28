// Ispis brojeva od 1 do 5

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
console.log(`Vrednost promeljive i nakon while petlje jednaka je: ${i}`);

i = 1;
while (i <= 5) {
    console.log(i++); // Prvo se iskoristi vrednost promenljive, pa se vrednost poveca (1, 2, 3, 4, 5)
}
/*
while(i <= 5) {
    console.log(i);
    i = i + 1;
}
*/

i = 1;
while (i <= 5) {
    console.log(++i); // Prvo se vrednost promenljive poveca, pa se onda nova vrednost koristi u izrazu (2, 3, 4, 5, 6)
}
/*
while(i <= 5) {
    i = i + 1;
    console.log(i);
}
*/



/* Ispisati brojeve od 1 do 20: Svaki u istom redu */
let res = "";
i = 1;
while (i <= 20) {
    //res = res + i + " ";
    res += (i + " ");
    i++;
}
console.log(res);



/* Ispisati brojeve od 20 do 1. */
// Prvi nacin
i = 20;
while (i >= 1) {
    console.log(i);
    i--;
}

// Drugi nacin
i = 1;
while (i <= 20) {
    console.log(21 - i);
    i++;
}



/* Ispisati parne brojeve od 1 do 20. */
// Prvi nacin
i = 1;
while (i <= 20) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}

// Drugi nacin
i = 1;
while (i <= 10) {
    console.log(2 * i);
    i++;
}

// Treci nacin
i = 2;
while (i <= 20) {
    console.log(i);
    i += 2; //i = i + 2;
}

/*
4. Zadatak
Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje
*/
document.body.innerHTML += `<h1>While petlja</h1>`;
i = 1;
let n = 5;
while (i <= n) {
    /*
    1 % 3 = 1
    2 % 3 = 2
    3 % 3 = 0
    4 % 3 = 1
    5 % 3 = 2
    ...
    */
    if (i % 3 == 1) {
        document.body.innerHTML += `<p style="color: red;">Ovo je ${i}. paragraf</p>`;
    }
    else if (i % 3 == 2) {
        document.body.innerHTML += `<p style="color: green;">Ovo je ${i}. paragraf</p>`;
    }
    else {
        document.body.innerHTML += `<p style="color: blue;">Ovo je ${i}. paragraf</p>`;
    }

    i += 1;
}

/*
5. Zadatak
Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira
*/
i = 1;
n = 6;
while (i <= n) {
    /*
    1 % 2 = 1
    2 % 2 = 0
    3 % 2 = 1
    4 % 2 = 0
    5 % 2 = 1
    ....
    */
    if (i % 2 == 1) {
        document.body.innerHTML += `<img src="rose.png" class="okvir1">`;
    }
    else {
        document.body.innerHTML += `<img src="rose.png" class="okvir2">`;
    }

    i += 1;
}

// Ciklično prikazivanje tri slike
i = 1;
n = 7;
while (i <= n) {
    /*
    1 % 3 = 1
    2 % 3 = 2
    3 % 3 = 0
    4 % 3 = 1
    5 % 3 = 2
    6 % 3 = 0
    7 % 3 = 1
    ...
    */
    let ost = i % 3;

    document.body.innerHTML += `<img src="slike/${ost}.jpg" class="okvir1">`;

    i += 1;
}

/*
Odrediti sumu brojeva od 1 do 5
*/
i = 1;
let suma = 0; //Neutral za sbiranja je početna vrednost
n = 5;
while (i <= n) {
    suma += i;
    i += 1;
}
console.log(suma);

// 1, 2, 3, 4, 5 -> 5*(5+1) / 2 = 5*6/2 = 30 / 2 = 15
// Formula za sumiranje brojeva isključivo OD 1 do N
let suma1 = (n * (n + 1)) / 2;
console.log(suma1);

/*
Odrediti proizvod brojeva od 1 do 5
*/
i = 1;
let proizvod = 1; //Neutral za množenje je početna vrednost
n = 5;
while (i <= n) {
    proizvod *= i;
    i += 1;
}
console.log(proizvod);

// 11. Zadatak
/*
Odrediti sa koliko brojeva je deljiv uneti broj k
*/
/*
let k = 10;
1, 2, 5, 10
Ispisaćemo 4 jer je 10 deljiv sa 4 broja 1, 2, 5 i 10

i
1 DA
2 DA
3 NE
4 NE
5 DA
6 NE
7 NE
8 NE
9 NE
10 DA
*/
let k = 1;
let brDeljivih = 0;
i = 1;

while (i <= k) {
    //Proveravamo da li je k deljiv sa i
    if (k % i == 0) {
        brDeljivih++; //Isto kao da smo stavili brDeljivih += 1;
    }
    i += 1;
}
console.log(brDeljivih);

//12. Zadatak
/*
Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.
*/
// Praktično se svodi na prethodni zadatak
// Ako je broj delilaca == 2, to znači da je broj prost tj. deljiv samo samim sobom i broj 1
// U suprotnom broj nije prost

if (brDeljivih == 2) {
    console.log("Broj je prost");
}
else {
    console.log("Broj nije prost");
}


// Drugi nacin
n = 24; // Broj cija se parnost ispituje
i = 2; // Brojac koji ide po potencijalnim deliocima broja n
while(i <= n / 2) {
    if(n % i == 0) {
        console.log(`Broj ${n} nije prost.`);
        break; // Prekida izvrsenje petlje u kojoj se nasao
    }
    i++;
}
if(i > n / 2) {
    console.log(`Broj ${n} je prost.`);
}

// Treci nacin
n = 4; // Broj cija se parnost ispituje
i = 2; // Brojac po potencijalnim deliocima broja n
let prime = true; // Indikator (flag) da li je broj n prost
while(prime && (i <= n / 2)) {
    if(n % i == 0) {
        prime = false;
    }
    i++;
}
if(prime) {
    console.log(`Broj ${n} je prost.`);
}
else {
    console.log(`Broj ${n} nije prost.`);
}