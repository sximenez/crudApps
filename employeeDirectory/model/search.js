let cards;

function cardProcessing(filteredCards) {

  const container = document.querySelector("#card-container");
  container.innerHTML = "";

  for (let employee of filteredCards) {

    let name = employee.name;
    let department = employee.department;
    let job_title = employee.job_title;
    let join_date = employee.join_date;
    let photo = employee.photo;
    let index = employee.index;

    const card = document.createElement("div");
    card.classList.add("border", "items-center", "bg-white", "rounded-lg", "flex-col", "cursor-pointer", "hover:border-gray-500", "transition-all");

    card.innerHTML = `
      <div class="flex justify-center p-8 h-72 w-72 md:h-52 md:w-52 mx-auto">
        <img src="${photo}" class="w-full h-full object-cover rounded-full">
      </div>
          
      <div class="p-5 pt-0 text-center">
        <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white truncate ...">${name}</h3>
        <p class="mb-4 font-semibold text-sm text-gray-500 dark:text-gray-400 truncate ...">${department} | ${job_title}</p>
        <p class="mt-3 mb-4 font-semibold text-sm text-gray-500 dark:text-gray-400">Joined: ${join_date}</p>
      </div>
      `;

    // Event listener to access individual data
    card.addEventListener("click", event => {

      event.preventDefault();

      localStorage.setItem("clickedCardData", JSON.stringify(employee));

      window.location.href = "#/read";

    });

    container.appendChild(card);

  };

};

export async function searchCard() {

  try {

    if (!cards) {
      const response = await fetch("./model/data.json");
      if (!response.ok) throw new Error(response.statusText);
      const jsonData = await response.json();
      let sessionData = JSON.parse(sessionStorage.getItem("data"));
      if (sessionData) cards = jsonData.concat(sessionData);
      else cards = jsonData;

    } else {
      const response = await fetch("./model/data.json");
      if (!response.ok) throw new Error(response.statusText);
      const jsonData = await response.json();
      let sessionData = JSON.parse(sessionStorage.getItem("data"));
      if (sessionData) cards = jsonData.concat(sessionData);
      console.log(cards);

    }

    let nameFilter = document.querySelector("#name_filter");
    nameFilter.addEventListener("input", debounce(filterCardsByName, 300));

    let departmentFilter = document.querySelector("#department_filter");
    departmentFilter.addEventListener("input", debounce(filterCardsByDepartment, 300));

    let resetBtn = document.querySelector("#reset_btn");
    resetBtn.addEventListener("click", () => {

      document.querySelector("#name_filter").value = "";
      document.querySelector("#department_filter").value = "";

      cards.sort((b, a) => new Date(a.join_date) - new Date(b.join_date));
      cardProcessing(cards);

    });

  } catch (error) {
    console.log(error);

  };
};

function debounce(fn, delay) {

  let timer;

  return function () {
    clearTimeout(timer);

    let opacityLayer = document.querySelector("#card-container");
    opacityLayer.classList.add("opacity-30");

    timer = setTimeout(() => {

      fn();
      opacityLayer.classList.remove("opacity-30");

    }, delay);

  };
};

function filterCardsByName() {

  let searchValueByName = document.querySelector("#name_filter").value.toLowerCase();
  console.log(searchValueByName);

  let filteredCards = cards.filter(e => e.name.toLowerCase().includes(searchValueByName));
  filteredCards.sort((b, a) => new Date(a.join_date) - new Date(b.join_date));
  console.log(filteredCards);

  const container = document.querySelector("#card-container");

  if (filteredCards.length === 0) {

    container.innerHTML = `No employees found.`;

  } else {

    cardProcessing(filteredCards);

  };
};

function filterCardsByDepartment() {

  let searchValueByDepartment = document.querySelector("#department_filter").value;
  console.log(searchValueByDepartment);

  let filteredCards = cards.filter(e => e.department === searchValueByDepartment);
  filteredCards.sort((b, a) => new Date(a.join_date) - new Date(b.join_date));
  console.log(filteredCards);

  const container = document.querySelector("#card-container");

  if (filteredCards.length === 0) {

    container.innerHTML = `No employees found.`;

  } else {

    cardProcessing(filteredCards);

  };

};