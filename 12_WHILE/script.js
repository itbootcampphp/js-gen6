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

