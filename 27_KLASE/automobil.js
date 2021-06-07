class Auto {
    // Konstrukotor je ugrađeni metod koji svaka klasa mora da poseduje da bi kreirala objekat
    constructor(b, m) {
        this._boja = b;
        this._marka = m;
    }

    sviraj() {
        console.log(`${this._marka} Beep! beep!`);
    }
}

// Kreiranje novog objekta - Kada se novi objekat kreira, prvo se poziva konstruktor klase, stoga za kreiranje objekta u zagradama je potrbno proslediti vrednosti koje želimo da postavimo u konstruktoru tj. koje konstruktor očekuje
let auto1 = new Auto("red", "Fiat");
console.log(auto1);
console.log(auto1._boja);
console.log(auto1["_boja"]);
auto1.sviraj();

let auto2 = new Auto("white", "Peugeot");
console.log(auto2._marka);
auto2.sviraj();

let auto3 = new Auto("blue", "Toyota");
auto3.sviraj();

let automobili = [auto1, auto2, auto3];
console.log(automobili);

//let auto2 = new Auto(["red", "orange", "yellow"], "Opel");