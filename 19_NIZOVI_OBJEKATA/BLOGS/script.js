let blog = {
    title: "Funkcije",
    likes: 21,
    dislikes: 1
};

let blogs = [
    { title: "Nizovi", likes: 16, dislikes: 5 },
    { title: "Grananje", likes: 14, dislikes: 0 }
];

console.log(blogs);

///////////////////////

let blog1 = {
    title: "Musaka od tikvica",
    likes: 105,
    dislikes: 31
};

let blog2 = {
    title: "Lazanja!",
    likes: 236,
    dislikes: 13
};

let blog3 = {
    title: "Zapečena boranija!",
    likes: 60,
    dislikes: 32
};

let blogsArr = [blog1, blog2, blog3];

// Ispis obejakat iz niza obejekata
blogsArr.forEach(element => {
    console.log(element);
});

// Ispis naslova iz niza blogova forEach petljom
console.log(blog1.title);
blogsArr.forEach(element => {
    console.log(element.title);
});

// Ispis naslova iz niza blogova for petljom
console.log(blogsArr[0]); // Varaća objekat na 0. poziciji u nizu
console.log(blogsArr[0].title); // Vraća naslov objekta na 0. poziciji u nizu
for (let i = 0; i < blogsArr.length; i++) {
    console.log(blogsArr[i].title);
}

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova
let sumaLajkova = nizObj => {
    let ukupnoLajkova = 0;

    nizObj.forEach(obj => {
        ukupnoLajkova += obj.likes;
    });

    return ukupnoLajkova;
}
console.log(sumaLajkova(blogsArr));

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova
let prosekLajkova = nizObj => {
    let sum = sumaLajkova(nizObj);
    let br = nizObj.length;
    return sum / br;
}
console.log(prosekLajkova(blogsArr));

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena
let viseLajkova = niz => {
    let lista = "<ul>";
    niz.forEach(element => {
        if (element.likes > element.dislikes) {
            lista += `<li> ${element.title} </li>`;
            console.log(element.title);
        }
    });
    lista += "</ul>";
    document.body.innerHTML += lista;
}
viseLajkova(blogsArr);

//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena
let duploViseLajkova = niz => {
    niz.forEach(element => {
        if (element.dislikes * 2 <= element.likes) {
            console.log(element.title);
        }
    });
}
duploViseLajkova(blogsArr);

let rec = "Hello!s";
let poslednjiKarakter = rec[rec.length - 1]
console.log(poslednjiKarakter);

let poslednjiKarakter1 = rec.slice(-1); //odseca deo stringa
console.log(poslednjiKarakter1);

let poslednjiKarakter2 = rec.charAt(rec.length - 1); //vraća karakter na određenom indeksu
console.log(poslednjiKarakter2);

let poslednjiKarakter3 = rec.endsWith("!"); //Vraća true ukoliko se string završava !, u suprotnom vraća false
console.log(poslednjiKarakter3);

//Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom
let uzvicnik = niz => {
    niz.forEach(element => {
        let naslov = element.title;
        // 1. način
        // if (naslov[naslov.length - 1] == "!") {
        //     console.log(naslov);
        // }

        // 2. način
        if (naslov.endsWith("!")) {
            console.log(naslov);
        }
    });
}
uzvicnik(blogsArr);

console.log("Hello\tworld");
console.log("Hello\nworld");