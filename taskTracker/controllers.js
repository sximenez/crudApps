import { readData } from "./model/read.js";
import { createTask } from "./model/create.js";
import { updateTask } from "./model/update.js";
import { deleteTask } from "./model/delete.js";
import { searchTasks } from "./model/search.js";

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

    });

};

// Load main
export function main() {
  
  fetch("./view/main.html")
    .then((response) => response.text())
    .then((data) => {

      document.getElementById("content").innerHTML = data;
      readData();
      searchTasks();

    });

};

// Load create
export function create() {

  console.log("create loaded");
  fetch("./view/create.html")
    .then((response) => response.text())
    .then((data) => {

      document.getElementById("content").innerHTML = data;
      createTask();

    });

};

// Load update page
export function update() {

  fetch("./view/update.html")
    .then((response) => response.text())
    .then((data) => {

      document.getElementById("content").innerHTML = data;
      updateTask();

    });

};

// Apply delete
export function remove() {

  deleteTask();

};