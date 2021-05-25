// U DOM-u svaki HTML element je jedan JS objekat

console.log(document);
console.log(typeof document);

console.log(document.URL);  // sting
console.log(document.body); // objekat iz DOM stabla
console.log(document.documentElement); // objekat iz DOM stabla

console.log(document.anchors); // HTMLCollection
console.log(document.links); // HTMLCollection

let r1 = document.getElementById('div1');
console.log(r1); // objekat koji ima navedeni id

let r2 = document.getElementsByClassName("container"); 
console.log(r2); // HTMLCollection svih objekata koji imaju navedenu klasu

let r3 = document.getElementsByTagName("div");
console.log(r3); // HTMLCollection svih objekata koji imaju navedeni tag name

let r4 = document.getElementsByName("link");
console.log(r4); // NodeList svih objekata koji imaju navedeni name atribut

/*
HTMLCollection ne poseduje forEach metodu!
r2.forEach(obj => {
    console.log(obj);
});
*/

// Prolazak kroz elemente HTMLCollection for petljom
for(let i = 0; i < r2.length; i++) {
    console.log(r2[i]);
}

// Moze se HTMLCollection konvertovati u Array, pa onda za Array koristiti forEach petlja
let r2array = Array.from(r2);
r2array.forEach(obj => {
    console.log(obj);
});

// Elementima NodeList-e moze se pristupiti i preko for i preko forEach petlje
r4.forEach(obj => {
    console.log(obj);
});

for(let i = 0; i < r4.length; i++) {
    console.log(r4[i]);
}

let r5 = document.querySelector(".container");
console.log(r5);

let r6 = document.querySelectorAll(".container");
console.log(r6);

r6.forEach(elem => {
    console.log(elem);
});

let r7 = document.querySelectorAll("a");
console.log(r7); 

// document.getElementsByName("link");
let r8 = document.querySelectorAll("[name='link']");
console.log(r8);

// document.getElementById("div1");
let r9 = document.querySelector("#div1"); // querySelector UVEK vraca objekat
console.log(r9);

let r10 = document.querySelectorAll("#div1"); // querySelectorAll UVEK vraca NodeList, cak i kada se ta lista sastoji od jednog elementa
console.log(r10);


// Menjanje elemenata iz HTML-a
console.log(r1.id);
console.log(r1.href);
console.log(r1.innerHTML);
//r1.innerHTML = "Sadržaj div elementa je tekst dodat iz JS-a.";
r1.innerHTML += "Sadržaj div elementa je tekst dodat iz JS-a.";

let prviLink = document.querySelector("a");
prviLink.href = "http://www.wikipedia.com";

prviLink.setAttribute('target', '_blank');
//prviLink.target = "_blank";
prviLink.setAttribute('href', 'http://www.wikipedia.org');
prviLink.innerHTML = "Wikipedia";

/*
prviLink.style.color = "red";
prviLink.style.backgroundColor = "blue";
prviLink.style.textDecoration = "none";
//prviLink.style.border = "3px solid black";
prviLink.style.borderWidth = "3px";
prviLink.style.borderStyle = "solid";
prviLink.style.borderColor = "black";
*/

prviLink.setAttribute('style', 'color: red; background-color: blue; text-decoration: none; border: 3px solid black;');

r1.style.color = "green";


// Postaviti crveni border svim linkovima na stranici
r7.forEach(link => {
    link.style.border = "3px solid red";
});

// Drugi nacin
let linkovi = document.getElementsByTagName("a");
for(let i = 0; i < linkovi.length; i++) {
    linkovi[i].style.border = "3px solid green";
}

//Svim slikama na stranici koja su sa ekstenzijom .png, postaviti okvir na debljinu 2px i crvenu boju. 
// Prvi nacin
let slike = document.querySelectorAll("img");
slike.forEach(slika => {
    if(slika.src.includes(".png") || slika.src.includes(".PNG")) {
        slika.style.border = "2px solid red";
    }
});

// Drugi nacin
let slikePng = document.querySelectorAll("img[src*='.png']");
slikePng.forEach(slika => {
    slika.style.border = "2px solid red";
});

// Svakom linku na stranici promeniti target svojstvo 
linkovi = document.querySelectorAll("a");
linkovi.forEach(link => {
    if(link.target === "_blank") {
        link.target = "_top";
    }
    else {
        link.target = "_blank";
    }
});


let imena = ["Stefan", "Mladen L.", "Jelena V", "Stefan Dj", "Dusan M"];
imena.forEach(ime => {
    if(ime.startsWith("S")) { //if(ime[0] == "S") {
        document.body.innerHTML += `<a href="#" target="_blank">${ime}</a>`;
    }
    else {
        document.body.innerHTML += `<a href="#">${ime}</a>`;
    }
});


let result = "<ul>";
imena.forEach((ime, i) => {
    if(i % 2 == 0) {
        result += `<li style="color: blue">${ime}</li>`;
    }
    else {
        result += `<li style="color: red">${ime}</li>`;
    }
});
result += "</ul>";
document.body.innerHTML += result;



// Dohvatanje roditeljskog cvora

linkovi = document.querySelectorAll("a");

linkovi.forEach(link => {
    console.log(link.parentNode);
    link.parentNode.style.border = "2px solid red";
});

// Dohvatanje deteta nekog cvora
let prviDiv = document.querySelector("div.container");
prviDiv.childNodes.forEach(child => {
    console.log(child);
});

let n = prviDiv.childNodes.length;
for(let i = 0; i < n; i++) {
    console.log(prviDiv.childNodes[i]);
}

let link1 = prviDiv.childNodes[1]; 
console.log(link1.previousSibling);
console.log(link1.nextSibling);
console.log(link1.nextSibling.nextSibling);

link1.nextSibling.nextSibling.style.fontSize = "24px";