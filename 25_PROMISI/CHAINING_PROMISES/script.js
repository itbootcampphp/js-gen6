let getTodos = resource => {
    // 1. Kreiranje XML objekat
    let request = new XMLHttpRequest();

    // 2. Otvaranje kreiranog zahteva
    request.open('GET', resource);

    // 3. Šaljemo request
    request.send();

    return new Promise((resolve, reject) => {
        request.addEventListener('readystatechange', () => {
            if (request.readyState == 4 && request.status == 200) {
                //Ako je sve OK
                //console.log(request.responseText);
                //callback(request.responseText, undefined);
                resolve(request.responseText);
            }
            else if (request.readyState == 4) {
                //console.log("Ne mogu da dohvatim podatke");
                //callback(undefined, "Ne mogu dohvatim podatke");
                reject("Ne mogu da dohvatim podatke");
            }
        });
    });
}

getTodos("../JSON/fruits.json").then(data => {
    console.log('Promise fruits resolved', data);
    return getTodos("../JSON/vegetabless.json");
}).then(data => {
    console.log('Promise vegetables resolved', data);
    return getTodos("../JSON/cereals.json");
}).then(data => {
    console.log('Promise cereals resolves', data);
}).catch(err => {
    console.log('Promise rejected', err);
});

console.log("KRAJ");