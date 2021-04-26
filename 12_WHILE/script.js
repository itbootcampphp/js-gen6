// Ispis brojeva od 1 do 5

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

let i = 1;
while(i <= 5) {
    console.log(i);
    i++;
}
console.log(`Vrednost promeljive i nakon while petlje jednaka je: ${i}`);

i = 1;
while(i <= 5) {
    console.log(i++); // Prvo se iskoristi vrednost promenljive, pa se vrednost poveca (1, 2, 3, 4, 5)
}
/*
while(i <= 5) {
    console.log(i);
    i = i + 1;
}
*/

i = 1;
while(i <= 5) {
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
while(i <= 20) {
    //res = res + i + " ";
    res += (i + " ");
    i++;
}
console.log(res);



/* Ispisati brojeve od 20 do 1. */
// Prvi nacin
i = 20;
while(i >= 1) {
    console.log(i);
    i--;
}

// Drugi nacin
i = 1;
while(i <= 20) {
    console.log(21 - i);
    i++;
}



/* Ispisati parne brojeve od 1 do 20. */
// Prvi nacin
i = 1;
while(i <= 20) {
    if(i % 2 == 0) {
        console.log(i);
    }
    i++;
}

// Drugi nacin
i = 1;
while(i <= 10) {
    console.log(2 * i);
    i++;
}

// Treci nacin
i = 2;
while(i <= 20) {
    console.log(i);
    i += 2; //i = i + 2;
}