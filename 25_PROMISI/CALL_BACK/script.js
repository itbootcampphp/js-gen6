let getTodos = (resource, callback) => {
    // 1. Kreiranje XML objekat
    let request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState == 4 && request.status == 200) {
            //Ako je sve OK
            //console.log(request.responseText);
            callback(request.responseText, undefined);
        }
        else if (request.readyState == 4) {
            //console.log("Ne mogu da dohvatim podatke");
            callback(undefined, "Ne mogu dohvatim podatke");
        }
    });

    // 2. Otvaranje kreiranog zahteva
    request.open('GET', resource);

    // 3. Šaljemo request
    request.send();
}

// getTodos("../JSON/todos.json" , () => {});

getTodos("../JSON/todos.json", (data, err) => {
    console.log("Callback okinuta");
    // Ako je err == true, ispisati tu grešku
    if (err) {
        console.log(err); //Ispisuje grešku
    }
    else {
        console.log(data); //Ispisuje podatke sa kojima možete dalje da raspolažete
    }
});

console.log("KRAJ");