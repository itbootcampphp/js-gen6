import { Chatroom } from './chat.js';
import { ChatUI } from './ui.js';

// DOM
let ulChatList = document.querySelector('ul');
let formMessage = document.querySelector('#formMessage');
let inputMessage = document.querySelector('#inputMessage');
let navRooms = document.querySelector('nav');

// Čitamo iz lokalne memorije username, ukoliko postoji, u suprotnom default username je anonymus
let username = () => {
    if (localStorage.username) {
        return localStorage.username;
    }
    else {
        return "anonymus";
    }
}

// Čitamo iz lokalne memorije room, ukoliko postoji, u suprotnom default room je general
let room = () => {
    if (localStorage.room) {
        return localStorage.room;
    }
    else {
        return "general";
    }
}

// Kreiramo objekat klase Chatroom
let chatroom2 = new Chatroom(room(), username());

// Kreiranje objekat klase ChatUI
let chatUI1 = new ChatUI(ulChatList);

// Kada se učitava prvi put stranica, ispišemo četove na njoj
chatroom2.getChats(data => {
    chatUI1.templateLI(data);
});

// Kada je submit dugme Send, onda pošalji poruku
formMessage.addEventListener('submit', e => {
    e.preventDefault();
    let message = inputMessage.value;
    chatroom2.addChat(message)
        .then(() => formMessage.reset())
        .catch(error => console.log(error));
});

// Kada je submit dugme Update izmeni korisničko ime
formUsername.addEventListener('submit', e => {
    e.preventDefault();
    let newUsername = inputUsername.value;
    chatroom2.updateUsername(newUsername);
    formUsername.reset();
});

// Dugmad za promenu soba
navRooms.addEventListener('click', e => {
    if (e.target.tagName == "BUTTON") {
        //1. Izbrisati sve poruke sa ekrana
        chatUI1.clear();
        //2. Pozvati promenu sobe
        chatroom2.updateRoom(e.target.id);
        //3. Prikazati četove
        chatroom2.getChats(data => {
            chatUI1.templateLI(data);
        });
        //4. Postaviti u local storage da smo prešli u neku drugu sobu
        localStorage.setItem("room", e.target.id);
    }
});