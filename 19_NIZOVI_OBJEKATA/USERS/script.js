let blog1 = {
    title: 'HTML',
    likes: 50,
    dislikes: 3
};

let blog2 = {
    title: 'CSS',
    likes: 170,
    dislikes: 105
};

let blog3 = {
    title: 'JS',
    likes: 205,
    dislikes: 110
};

let user1 = {
    username: 'Stefan',
    age: 31,
    blogs: [blog1, blog2, blog3],
    logBlogs: function () {
        this.blogs.forEach(blog => {
            console.log(blog.title);
        });
    },
    sumLikes: function () {
        let sum = 0;
        this.blogs.forEach(blog => {
            sum += blog.likes;
        });
        return sum;
    }
};
user1.logBlogs();

// Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova. Svaki blog u ovom nizu je objekat.
let user2 = {
    username: 'Jelena',
    age: 16,
    blogs: [blog2, blog3],
    sumLikes: function () {
        let sum = 0;
        this.blogs.forEach(blog => {
            sum += blog.likes;
        });
        return sum;
    }
};

let user3 = {
    username: 'Milena',
    age: 14,
    blogs: [blog1],
    sumLikes: function () {
        let sum = 0;
        this.blogs.forEach(blog => {
            sum += blog.likes;
        });
        return sum;
    }
};

let users = [user1, user2, user3];

// Ispisati imena onih autora koji imaju ispod 18 godina
users.forEach(user => {
    let godine = user.age;
    if (godine < 18) {
        console.log(user.username);
    }
});

// Ispisati naslove onih blogova koji imaju više od 50 lajkova
users.forEach(user => {
    let userBlogs = user.blogs; // Izdvojimo niz blogova tekućeg korisnika
    userBlogs.forEach(blog => {
        if (blog.likes > 50) {
            console.log(blog.title);
        }
    });
});

// Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali
// 1.  način
users.forEach(user => {
    let userBlogs = user.blogs;
    let sumLikes = 0;
    userBlogs.forEach(blog => {
        sumLikes += blog.likes;
    });
    if (sumLikes > 100) {
        console.log(user.username);
    }
});

// 2. način
users.forEach(user => {
    if (user.sumLikes() > 100) {
        console.log(user.username);
    }
});

// 3. način
let sum = blogs => {
    let s = 0;
    blogs.forEach(blog => {
        s += blog.likes;
    });
    return s;
}
users.forEach(user => {
    let userBlogs = user.blogs;
    let likes = sum(userBlogs);
    if (likes > 100) {
        console.log(user.username);
    }
});

// Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena
let avgGeneral; // Prosečna ocena u odnosu na SVE BLOGOVE svih korisnika
let sumGeneral = 0;
let countGeneral = 0;
// 1. način određivanja prosečnog broja pozitivnih ocena
// users.forEach(user => {
//     user.blogs.forEach(blog => {
//         sumGeneral += blog.likes;
//         countGeneral++;
//     });
// });
// avgGeneral = sumGeneral / countGeneral;
// console.log(avgGeneral);

// 2. način određivanja prosečnog broja pozitivnih ocena
users.forEach(user => {
    sumGeneral += user.sumLikes();
    countGeneral += user.blogs.length;
});

avgGeneral = sumGeneral / countGeneral;
console.log(avgGeneral);

users.forEach(user => {
    user.blogs.forEach(blog => {
        if (blog.likes > avgGeneral) {
            console.log(blog.title);
        }
    });
});

