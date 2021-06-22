export class ChatUI {
    //konstruktor
    constructor(l) {
        this.list = l;
    }

    //geter i seter
    set list(l) {
        this._list = l;
    }

    get list() {
        return this._list;
    }

    formatDate(date) {
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let g = date.getFullYear();

        return `${d}.${m}.${g}.`;
    }

    //Metod koji pravi osnovu za prikaz list item-a
    //data koji prosleđujemo je objekat tj. dokument iz baze
    templateLI(data) {
        let date = data.created_at.toDate();
        let htmlLI =
            `<li>
            <span class="username">${data.username} : </span>
            <span class="message">${data.message}</span>
            <div>${this.formatDate(date)}</div>
            </li>`;
        this.list.innerHTML += htmlLI;
        this.list.scrollTop = this.list.scrollHeight;
    }

    clear() {
        this.list.innerHTML = ``;
    }
}