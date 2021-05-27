console.log("Events");

// Postupak dodavanja click eventa:
// 1. Dohvatiti dugme
let btn = document.querySelector('button');

// 2. Dodati event listener na željeni element (on aktivno sluša sve što se događa nad tim elementom)
// btn.addEventListener('noziv eventa', funkcija koja se realizuje ka da se aktivira);
btn.addEventListener('click', () => {
    console.log('Jednostruki klik');
});

////////////////////////////

// 1. Dohvatimo element
// let dupliKlik = document.querySelector('#dupli_klik');
let dupliKlik = document.getElementById('dupli_klik');

// 2. Dodati event listener
dupliKlik.addEventListener('dblclick', function () {
    console.log('Dvostruki klik');
});

////////////////////////////

// 2. NAČIN DODAVANJA EVENTA

function klikni() {
    console.log("Kliknuto");
}

////////////////////////////

// 1. Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br. Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.
