/*
console.log("Prva linija koda");
console.log("Druga linija koda");
//window.setTimeout(....);
setTimeout(test, 3000); // test je callback funkcija // 8. linija koda je poziv setTimeout f-je, a ne test
//test(); // ovo je poziv test funkcije
console.log("Cetvrta linija koda");
console.log("Peta linija koda");

function test() {
    console.log("Pozvana je funkcija test");
}
*/

//console.log(window);
/*
let datum = {
    kisa: false,
    sunce: true,
    datum: '2021/05/31',
    neobicanDan: function() {
        this  // this je u anonimnoj f-ji objekat koji je pozvao tu metodu
    },
    neobicanDan: () => {
        this.sunce (window.sunce) // this je u arrow f-ji window objekat
    }
}
*/

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

btn1.addEventListener('click', function() {   // anonimna callback f-ja
    console.log(this); // btn1
});

btn2.addEventListener('click', () => {   // arrow callback f-ja
    console.log(this); // window
});

btn3.addEventListener('click', klik); // imenovana callback f-ja

function klik() {    // imenovana f-ja
    console.log(this); // ?
}



let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let divIspis = document.getElementById("ispis");
let clock = null;

/*

0    0.2   0.4   0.6   0.8    1    1.2   1.4   1.6   1.8   2   2.2   2.4 (sekunde)
cl1        cl2                cl1i       cl2i

*/

b1.addEventListener('click', () => {
    if(clock === null) {
        clock = setTimeout(function() {
            let datum = new Date();
            let sati = datum.getHours();
            let minuti = datum.getMinutes();
            let sekundi = datum.getSeconds();
            divIspis.innerHTML += `${sati}:${minuti}:${sekundi}`;
        }, 1000);
    }
});

b2.addEventListener('click', () => {
    clearTimeout(clock);
    clock = null;
});