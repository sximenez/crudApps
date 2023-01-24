import { data } from "./data.js";

for (let i = 0; i < data.length; i++) {

  data[i].index = i;

}

data.sort((a, b) => b.index - a.index);

let container = document.getElementById("container");
console.log(container);

// For loop to create the cards
for (let i = 0; i < data.length; i++) {

  let item = data[i];
  let name = item.name;
  let index = item.index;
  let url = item.url;

  container.innerHTML += `
  <a href="${url}" target="_blank">
  
    <div class="card p-6 bg-white border border-gray-200 rounded-lg shadow-md">

      <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">${name}</h5>
      <p class="hidden mb-3 font-normal text-gray-500"></p>
      <p class="inline-flex items-center text-blue-600 hover:underline">See project ${index + 1}
        <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
      </p>
    </div>

  </a>
  `;

};

// Dark mode
let toggle = document.querySelector(".dark-mode-toggle");
let body = document.querySelector("body");

toggle.addEventListener("click", () => {

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    toggle.innerHTML = "Dark mode";
  } else {
    body.classList.add("dark-mode");
    toggle.innerHTML = "Light mode";
  }

});