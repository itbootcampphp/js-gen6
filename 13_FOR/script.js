let i;

for (i = 1; i <= 5; i++) {
    console.log(`Na redu je broj: ${i}`);
}
console.log(`Vrednost promenljive i jednaka je: ${i}`);  // i = 6, undefined

// SCOPE (OBLAST VAZENJA)
// let (oblast vazenja unutar bloka ({ i }) u kojem je deklarisana)
// var (oblast vazenja unutar funkcije)
/*
    let i; // globalna promenljiva koja vazi za ceo js fajl
    var j; // globalna promenljiva koja vazi za ceo js fajl

    if(i != j) {
        let k; // lokalna promenljiva koja vazi samo unutar if-a
        var m; // globalna promenljiva koja vazi za ceo js fajl
    }
*/


// Ispisati parne brojeve od 1 do 20
// Prvi nacin
for (i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// Drugi nacin
for (i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Ispisati neparne brojeve od 1 do 20
for (i = 1; i <= 20; i += 2) {
    console.log(i);
}


// Odrediti proizvod brojeva od n do m
let proizvod = 1;
let n = 8;
let m = 15;
for (i = n; i <= m; i++) {
    //proizvod = proizvod * i;
    proizvod *= i;
}

// Pre for-petlje: proizvod = 1;
// i = 8:  proizvod = 8;
// i = 9:  proizvod = 8 * 9
// i = 10: proizvod = 8 * 9 * 10
// .......
// i = 15: proizvod = 8 * 9 * 10 * .... * 14 * 15

// Zadatak 9
// 1, 2, 3, 1, 2, 3, 1, 2, 3, ....
n = 8;
/*
for(i = 1; i <= n; i++) {
    if(i % 3 == 1) {
        document.body.innerHTML += "<img src='images/1.jpg'>";
    }
    else if(i % 3 == 2) {
        document.body.innerHTML += "<img src='images/2.jpg'>";
    }
    else {
        document.body.innerHTML += "<img src='images/3.jpg'>";
    }
}
*/
for (i = 0; i < n; i++) {
    let k = i % 3;  //  k = 0, 1, 2, 0, 1, 2, 0, 1, 2, ....
    document.body.innerHTML += `<img src='images/${k + 1}.jpg'>`;
}


// Zadatak 10
// Prvi nacin
let proizvod11 = 1;
for (i = 20; i <= 100; i++) {
    if (i % 11 == 0) {
        proizvod11 *= i;
    }
}
console.log(`Proizvod brojeva od 20 do 100 deljivih sa 11 jednak je: ${proizvod11}`);

// Drugi nacin
proizvod11 = 1;
for (i = 22; i <= 100; i += 11) {
    proizvod11 *= i;
}
console.log(`Proizvod brojeva od 20 do 100 deljivih sa 11 jednak je: ${proizvod11}`);


// Zadatak 12 (arit. sr. n do m)
// Prvi nacin
n = 2;
m = 8;
let suma = 0;
let broj = 0;
for (i = n; i <= m; i++) {
    suma += i;
    broj++;
}
let arsr = suma / broj;
console.log(arsr);

// Drugi nacin
n = 2;
m = 5; // Broj brojeva izmedju n i m jednak je m - n + 1
arsr = 0;
for (i = n; i <= m; i++) {
    arsr += i;
}
arsr /= (m - n + 1);
console.log(arsr);

// 18. Zadatak
/*
Napraviti tabelu sa 6 redova.Svaki red tabele treba da ima po dve ćelije (dve kolone).Svakom parnom redu dodati klasu „obojen“.Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine. 
*/
/*
<table>
    <tr>
        <td>Tekst</td>
        <td>Tekst</td>
    </tr>
    <tr>
        <td>Tekst</td>
        <td>Tekst</td>
    </tr>
    <tr>
        <td>Tekst</td>
        <td>Tekst</td>
    </tr>
</table>
*/

//1. Način
let redovi = 6;
let tabela = `<table>`;
for (i = 1; i <= redovi; i++) {
    if (i % 2 == 0) {
        tabela += `<tr class="boja1">`;
    }
    else {
        tabela += `<tr class="boja2">`;
    }
    tabela +=
        `
            <td>Tekst</td>
            <td>Tekst</td>
        </tr>
    `;
}
tabela += `</table>`;
document.body.innerHTML += tabela;

////////////////////////////

let element = document.getElementById("naslov");
element.innerHTML += "*****";
//element.innerHTML = "*****" + element.innerHTML; //Ako želimo da dodamo ***** pre teksta u elementu

///////////////////////////
// 18. Zadatak
/*
Napraviti tabelu sa 6 redova.Svaki red tabele treba da ima po dve ćelije (dve kolone).Svakom parnom redu dodati klasu „obojen“.Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine. 
*/
// 2. Način

let htmlTabela = document.getElementById("mojaTabela");
for (i = 1; i <= redovi; i++) {
    if (i % 2 == 0) {
        htmlTabela.innerHTML +=
            `
            <tr class="boja1">
                <td>Tekst</td>
                <td>Tekst</td>
            </tr>
        `;
    }
    else {
        htmlTabela.innerHTML +=
            `
            <tr class="boja2">
                <td>Tekst</td>
                <td>Tekst</td>
            </tr>
        `;
    }
}

// 19. Zadatak
/*
Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je prikazano na slici sa desne strane.
*/
let brLI = 10;
let lista = `<ul>`;
for (i = 1; i <= brLI; i++) {
    lista += `<li> Element ${i}`;
    if (i % 3 == 2) {
        i++;
        lista +=
            `
        <ul>
            <li class="ljubicasti"> Element ${i} </li>
        </ul>
        `;
    }
    lista += ` </li>`;
}
lista += `</ul>`;
document.body.innerHTML += lista;

let lista1 = `<ul>`;
for (i = 1; i <= brLI; i++) {
    if (i % 3 == 0) {
        lista1 +=
            `
            <ul>
                <li class="ljubicasti">Element ${i}</li>
            </ul>
        `;
    }
    else {
        lista1 += `<li>Element ${i}</li>`;
    }
}
lista1 += `</ul>`;
document.body.innerHTML += lista1;