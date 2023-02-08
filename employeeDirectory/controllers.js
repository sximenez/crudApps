import { readData, readCard } from "./model/read.js";
import { createCard } from "./model/create.js";
import { updateCard } from "./model/update.js";
import { deleteCard } from "./model/delete.js";
import { searchCard } from "./model/search.js";
import { darkMode } from "./model/dark.js";

// Load layout
export function layout() {

  fetch("./view/layout.html")
    .then((response) => response.text())
    .then((data) => {

      const body = document.getElementsByTagName("body")[0];
      body.innerHTML = data;
      body.classList.add("overflow-y-scroll");

    });

};

// Load header
export function header() {

  fetch("./view/header.html")
    .then((response) => response.text())
    .then((data) => {

      const headerContainer = document.querySelector("#header-container");
      headerContainer.innerHTML = data;
      darkMode();

    });

};

// Load home
export function main() {

  fetch("./view/main.html")
    .then((response) => response.text())
    .then((data) => {

      document.getElementById("content").innerHTML = data;
      readData();
      searchCard();

    });

};

// Load create page
export function create() {

  fetch("./view/create.html")
    .then((response) => response.text())
    .then((data) => {

      document.getElementById("content").innerHTML = data;
      createCard();

    });

};

// Load read page
export function read() {
  
  fetch("./view/read.html")
    .then((response) => response.text())
    .then((data) => {
      
      document.getElementById("content").innerHTML = data;
      readCard();

    });

};

// Load update page
export function update() {

  fetch("./view/update.html")
    .then((response) => response.text())
    .then((data) => {

      document.getElementById("content").innerHTML = data;
      updateCard();

    });

};

// Delete
export function remove() {

  fetch("./view/read.html")
    .then((response) => response.text())
    .then((data) => {

      document.getElementById("content").innerHTML = data;
      readCard();
      deleteCard();

    });

};