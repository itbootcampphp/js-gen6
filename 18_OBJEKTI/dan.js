let dan = {
    datum: '2021/05/17',
    kisa: true,
    sunce: true,
    oblacno: true,
    temperature: [5, -10, -15, -17, -21, -18, -21, -13, -11],
    // 1. Metoda: Određuje prosečnu temperaturu izmerenu tog dana
    prosecna: function () {
        let sum = 0;
        this.temperature.forEach(temp => {
            sum += temp;
        });
        return sum / this.temperature.length;
    },
    // 2. Metoda: Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
    natprosecna: function () {
        let avg = this.prosecna();
        let br = 0;
        this.temperature.forEach(element => {
            if (element > avg) {
                br++;
            }
        });
        return br;
    },
    //3.
    maksimalna: function () {
        let maks = this.temperature[0];
        // Traženje maksimuma for petljom
        // for (let i = 0; i < this.temperature.length; i++) {
        //     if (maks < this.temperature[i]) {
        //         maks = this.temperature[i];
        //     }
        // }

        // Traženje maksimuma forEach petljom
        this.temperature.forEach(element => {
            if (maks < element) {
                maks = element;
            }
        });
        return maks;
    },
    brojMaksimalnih: function () {
        let maks = this.maksimalna();
        let brMaks = 0;
        this.temperature.forEach(element => {
            if (element == maks) {
                brMaks++;
            }
        });
        return brMaks;
    },
    //4.
    izmedjuDve: function (temp1, temp2) {
        // Ukoliko je temp1 > temp2, treba da zamene mesta
        if (temp1 > temp2) {
            let tmp = temp1;
            temp1 = temp2;
            temp2 = tmp;
        }
        // Može i ovako, ali ne savetujem
        //[temp1, temp2] = [temp2, temp1];

        let br = 0;
        this.temperature.forEach(element => {
            if (element > temp1 && element < temp2) {
                br++;
            }
        });
        return br;
    },
    // 5. 
    vecinomNatprosecna: function () {
        let iznad = this.natprosecna();
        let ispod = this.temperature.length - iznad;
        return iznad > ispod;
        // if(iznad > ispod) {
        //     return true;
        // }
        // else {
        //     return false;
        // }
    },
    // 6.
    ledenDan: function () {
        // 1. način
        let leden = true;
        this.temperature.forEach(element => {
            // element >= 0 ? leden = false : null;
            if (element >= 0) {
                leden = false;
            }
        });
        return leden;

        //2. način
        // for (let i = 0; i < this.temperature.length; i++) {
        //     if (this.temperature[i] >= 0) {
        //         return false;
        //     }
        // }
        // return true;

        //3. način
        // let leden = true;
        // for (let i = 0; i < this.temperature.length; i++) {
        //     if (this.temperature[i] >= 0) {
        //         leden = false;
        //         break;
        //     }
        // }
        // return leden;
    }
};

// 1. Metoda: Određuje prosečnu temperaturu izmerenu tog dana
console.log(dan.prosecna());

// 2. Metoda: Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
console.log(dan.natprosecna());

// 3. Metoda: Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom. 
console.log(dan.brojMaksimalnih());

// 4. Metoda: Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti). 
console.log(dan.izmedjuDve(16, 20));
console.log(dan.izmedjuDve(20, 16));

// 5. Metoda: Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false.
console.log(dan.vecinomNatprosecna());

// 6. Metoda: Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.
console.log(dan.ledenDan());
