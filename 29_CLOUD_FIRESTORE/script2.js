// Dohvatanje jednog dokumenta iz kolekcije
/*
db.collection('customers').doc('customer-01')
.get()
.then(doc => {
    if(doc.exists) {
        let t = doc.data();
        console.log(t);
    }
    else {
        console.log(`No document with id: ${doc.id}`);
    }
})
.catch(err => {
    console.log(`Desila se greska: ${err}`);
});
*/

// Dohvatanje svih dokumenata iz kolekcije
/*
db.collection('customers')
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        let id = doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Dohvatanje svih dokumenata iz kolekcije, samo u nekom redosledu
/*
db.collection('users')
.orderBy('surname', 'asc')
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        let id = doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Dohvatanje svih dokumenata iz kolekcije, samo u nekom redosledu
// (Isto kao i malopre, samo se sortira po vise polja)
/*
db.collection('users')
.orderBy('surname', 'asc')
.orderBy('name', 'asc')
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        let id = doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/


// Dohvatanje ogranicenog broja dokumenata iz kolekcije
/*
db.collection('users')
//.orderBy('surname', 'asc')
//.orderBy('name', 'asc')
.limit(2)
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        let id = doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/


// Dohvatanje dokumenata iz kolekcije koji zadovoljavaju 
// odredjene uslove (filtriranje dokumenata)

// Dohvati sve korisnike mladje od 30 godina
/*
db.collection('customers')
.where('age', '>=', 30)
//.orderBy('age', 'asc') 
//.orderBy('name', 'desc')
//.limit(2)
// where i orderBy mogu da se kombinuju po razlicitim poljima, ali to povlaci:
// 1) Da se sva polja navedena u where nalaze i u orderBy
// 2) Da postoji kompozitni index za sva polja i redoslede navedene u orderBy
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        let id = doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Dohvatiti sve korisnike cija je adresa u Nisu
/*
db.collection('customers')
.where('addresses', 'array-contains', 'Beograd')
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        let id = doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Dohvatiti sve korisnike koji imaju 25 ili 31 godinu
/*
db.collection('customers')
.where('age', 'in', [25, 31])
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        let id = doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Dohvatiti sve korisnike koji se zovu Pera ili Laza
/*
db.collection('customers')
.where('name', 'in', ['Pera', 'Laza'])
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        let id = doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Dohvatiti sve korisnike koji zive u Nisu ili Loznici
db.collection('customers')
.where('addresses', 'array-contains-any', ['Beograd', 'Loznica'])
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        let id = doc.id;
        console.log(`Document ${id}:`);
        console.log(t);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});