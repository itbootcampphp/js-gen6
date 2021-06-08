class Auto {
    constructor(b, m, k) {
        // Ovde pozivamo setere
        this.boja = b; //this.boja je seter, seter pozivamo kao promenljivu, bez navođenja zagrada iako je metod
        this.marka = m;
        this.krov = k;
    }

    // Seteri - Postavljaju vrednost poljima - Upisuju vrednost u polja
    // Pravimo metod seter za svako polje
    set boja(x) {
        this._boja = x;
    }
    set marka(x) {
        this._marka = x;
    }
    set krov(x) {
        if (x === true || x === false) {
            this._krov = x;
        }
        else {
            this._krov = true;
        }
    }

    // Geteri - Vraćaju vrednost polja - Čitaju vrednost iz polja
    get boja() {
        return this._boja;
    }
    get marka() {
        return this._marka;
    }
    get krov() {
        return this._krov;
    }

}

let auto1 = new Auto("red", "Fiat", true);
// Ovako NE!!!
// console.log(auto1._boja);
// auto1._boja = true;
// console.log(auto1._boja);

// Ovako DA
// Pristup poljima isključivo preko getera i setera
// console.log(auto1.boja()); //Ne radi pristup geteru sa ()
console.log(auto1.boja); //geteru pristupamo ali bez zagrada
auto1.boja = "white"; //pristupam seteru za boju, opet bez zagrada
console.log(auto1.boja);

