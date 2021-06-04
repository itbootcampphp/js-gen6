// fetch vraća promise - asocijacija na promise je then i catch
// Upada u catch granu samo ako je došlo do network error-a
// Sled od 4 koraka:
// 1. fetch .json fajla
// 2. return response.json() koji je promise
// 3. uzeti podatke iz response.json
// 4. catch error

fetch("../JSON/todos.json").then(response => {
    //response je objekat, koji nosi sa sobom veliki broj atributa
    console.log("resolved", response);
    return response.json(); //response.json() je promise i zbog toga opet moramo da radimo then i catch
}).then(data => {
    console.log("resolved 1", data);
}).catch(err => {
    console.log("rejected", err);
});

// ASYNC & AWAIT

// Asinhrona funkcija se prosleđuje kao parametar i ima zagrade ()
// Asinhrnona funkcija izpred () mora da ima async
// Kao rezultat vraća promise
let getTodos = async () => {
    let response = await fetch("../JSON/todos.json");
    // Fatch vraća response zbog čega smo ranije koristili then i catch
    // Await - "Čekaj" / Zaustavi izvršavanje koda u ovoj niti dokle god se ne izvrši komanda koja je iza await
    // Await isključivo u asinhronoj funkciji 
    // console.log(response);

    // Ispitivanje statusa
    if (response.status != 200) {
        throw new Error("Ne mogu da dohvatim podatke");
    }
    else {
        let data = await response.json(); // response.json() vraća promise
    }

    //Sa ovim delom kreće tek kada su izvršene prethodne linije u potpunosti
    response = await fetch("../JSON/fruits.json");
    data = await response.json();

    return data; // vraćam promise, što znači da ću za njega morati da radim .then .catch
}

console.log(1);
console.log(2);
getTodos()
    .then(data => console.log('resolved', data))
    .catch(err => console.log('rejected', err));
console.log(3);
console.log(4);