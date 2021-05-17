let dan = {
    datum: '2021/05/17',
    kisa: true,
    sunce: true,
    oblacno: true,
    temperature: [10, 15, 17, 21, 18, 13, 11],
    prosecna: function () {
        let sum = 0;
        this.temperature.forEach(temp => {
            sum += temp;
        });
        return sum / this.temperature.length;
    }
};

// 1. Metoda: Određuje prosečnu temperaturu izmerenu tog dana
console.log(dan.prosecna());