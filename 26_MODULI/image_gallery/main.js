/*
import generateImage from "./modules/general.js";
import {generateList, generateItem as generateListItem} from "./modules/list.js";
import {generateTable, generateTableRow, generateItem as generateTableItem} from "./modules/table.js";

document.body.appendChild(generateImage('images/1.jpg'));
document.body.appendChild(generateImage('images/2.jpg'));
document.body.appendChild(generateImage('images/3.jpg'));

let ul = generateList(document.body);
let li1 = generateListItem(ul, 'images/1.jpg');
let li2 = generateListItem(ul, 'images/2.jpg');
let li3 = generateListItem(ul, 'images/3.jpg');

let t = generateTable(document.body);
let tr = generateTableRow(t);
for(let i = 1; i <= 3; i++) {
    generateTableItem(tr, `images/${i}.jpg`);
}
*/

import generateImage from "./modules/general.js";
import * as List from "./modules/list.js";
import * as Table from "./modules/table.js";

document.body.appendChild(generateImage('images/1.jpg'));
document.body.appendChild(generateImage('images/2.jpg'));
document.body.appendChild(generateImage('images/3.jpg'));

let ul = List.generateList(document.body);
let li1 = List.generateItem(ul, 'images/1.jpg');
let li2 = List.generateItem(ul, 'images/2.jpg');
let li3 = List.generateItem(ul, 'images/3.jpg');

let t = Table.generateTable(document.body);
let tr = Table.generateTableRow(t);
for(let i = 1; i <= 3; i++) {
    Table.generateItem(tr, `images/${i}.jpg`);
}