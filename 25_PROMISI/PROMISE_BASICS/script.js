let getSomething = () => {
    //let obj = new Promise();
    return new Promise((resolve, reject) => {
        // resolve("Nešto resolve...");
        reject("Nešto reject...");
    });
}

console.log(getSomething());

// getSomething vraća resolve ili reject
// Ako vrati resolve onda se izvršava then grana
getSomething().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});