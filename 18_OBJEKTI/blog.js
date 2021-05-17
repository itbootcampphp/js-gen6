let blog = {
    title: 'Objekti',
    content: 'Ovo su objekti...',
    author: 'Jelena'
};

console.log(blog);
console.log(typeof blog);

/*
// Možete proveriti tip ma koje druge promenljive
let x = 5;
console.log(typeof x);
*/

// Pristup osobini/propertiju u objetu
console.log(blog.title, blog.author);
console.log(blog['content']);

// Izmena jedne osobine/propertija u objektu
blog.content = "Objekti su složeni tipovi podataka";
console.log(blog.content);

blog['author'] = "Jelena Matejić";
console.log(blog['author']);

/////////////////////////////////////////

let user = {
    username: 'John',
    age: 32,
    blogs: ['Minimum', 'Maximum', 'Average'],
    login: function () {
        console.log('Ulogovani ste!');
    },
    logBlogs: function () {
        //console.log(this.blogs);
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    },
    test: function () {
        console.log(this);
    }
};

console.log(user);
user.login();
user.logBlogs();
user.test(); // Daje informacije o objektu u kome se nalazi
console.log(this);
