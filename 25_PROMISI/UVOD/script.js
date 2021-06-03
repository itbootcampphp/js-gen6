// 1. Kreiranje XML objekat
let request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    if (request.readyState == 4 && request.status == 200) {
        //Ako je sve OK
        console.log(request.responseText);
    }
    else if (request.readyState == 4) {
        console.log("Ne mogu da dohvatim podatke");
    }
});

// 2. Otvaranje kreiranog zahteva
request.open('GET', './JSON/todos.json');

// 3. Šaljemo request
request.send();


// PRIMER CALLBACK FUNKCIJE

// Funkcija myFunc prima kao parametar drugu funkciju (callbackFunction)
// myFunc može da poziva funkciju koja joj je prosleđena kao parametar i da joj prosleđuje argumente
let myFunc = callbackFunction => {
    let value1 = 5;
    let value2 = 6;
    callbackFunction(value1, value2);
}

// Kada pozivamo funkciju myFunc ona očekuje da joj se prosledi druga funkcija tj. mi joj prosleđujemo realizaciju callbackFunction funkcije(telo funkcije)
myFunc((val1, val2) => {
    console.log(val1 + val2);
});

