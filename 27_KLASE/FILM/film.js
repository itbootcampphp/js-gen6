export class Film {
    constructor(n, r, g, o) {
        this.naslov = n;
        this.reziser = r;
        this.godina = g;
        this.ocene = o;
    }

    // seteri
    set naslov(x) {
        this._naslov = x;
    }
    set reziser(x) {
        this._reziser = x;
    }
    set godina(x) {
        if (x > 1800) {
            this._godina = x; // nego ovde
        }
        else {
            this._godina = 1800;
        }
    }
    set ocene(niz) {
        this._ocene = niz;
    }

    // geteri
    get naslov() {
        return this._naslov;
    }
    get reziser() {
        return this._reziser;
    }
    get godina() {
        return this._godina;
    }
    get ocene() {
        return this._ocene;
    }

    // metodi
    stampaj() {
        console.log(`Naslov filma je ${this.naslov}`);
    }

    prosek() {
        let suma = 0;
        this.ocene.forEach(element => {
            suma += element;
        });
        return suma / this.ocene.length;
    }


}