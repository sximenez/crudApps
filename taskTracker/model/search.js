let tasks;

function cardProcessing(filteredTasks) {

  const container = document.querySelector("#task-container");
  const taskTable = document.querySelector("#task-table");
  taskTable.innerHTML = "";

  for (let task of filteredTasks) {

    let name = task.name;
    let date = task.date;
    let category = task.category;
    let priority = task.priority;
    let detail = task.detail;

    const row = document.createElement("tr");
    row.classList.add("grid", "grid-cols-1", "lg:grid-rows-1", "lg:grid-cols-6", "gap-2", "p-5", "text-gray-900");

    const buttons = document.createElement("div");
    buttons.classList.add("flex", "md:flex-col", "items-center", "gap-1", "text-sm");

    const updateBtn = document.createElement("button");
    updateBtn.classList.add("border", "w-1/2", "py-1", "rounded-full", "hover:bg-blue-700", "hover:border-blue-700", "hover:text-white", "transition-all");
    updateBtn.innerHTML = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("border", "w-1/2", "py-1", "rounded-full", "hover:bg-red-600", "hover:border-red-600", "hover:text-white", "transition-all");
    deleteBtn.innerHTML = "Delete";

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("border", "w-1/2", "py-1", "rounded-full", "hover:bg-green-700", "hover:border-green-700", "hover:text-white", "transition-all");
    doneBtn.innerHTML = "Done";

    buttons.append(doneBtn, updateBtn, deleteBtn);

    row.innerHTML = `
    
    <td class="flex items-center justify-center md:justify-start text-xl font-bold tracking-tight">${name}</td>

    <td class="flex items-center justify-center md:justify-center font-semibold text-sm">${date}</td>
    
    <td class="w-fit mx-auto md:m-auto px-4 py-1 font-semibold text-sm rounded-full ${category === "Work" ? "bg-purple-200" : "bg-blue-200"}">${category}</td>
    
    <td class="w-fit mx-auto md:m-auto px-4 py-1 font-semibold text-sm rounded-full ${priority === "Urgent" ? "bg-red-500  text-white" : "border border-slate-200"}">${priority}</td>

    <td class="flex items-center justify-center font-semibold text-sm">${detail}</td>
        
      `;

    // Update event
    updateBtn.addEventListener("click", event => {

      event.preventDefault();

      localStorage.setItem("clickedCardData", JSON.stringify(task));

      window.location.href = "#/update";

    });

    deleteBtn.addEventListener("click", event => {

      event.preventDefault();

      localStorage.setItem("clickedCardData", JSON.stringify(task));

      window.location.href = "#/delete";

    });

    doneBtn.addEventListener("click", event => {

      event.preventDefault();

      localStorage.setItem("clickedCardData", JSON.stringify(task));

      if (task.done === false) {
        task.done = true;
        doneBtn.innerHTML = `Undo`;
        row.classList.add("opacity-50");
      } else {
        task.done = false;
        doneBtn.innerHTML = `Done`;
        row.classList.remove("opacity-50");
      };

    });

    container.appendChild(taskTable);
    row.prepend(buttons);
    taskTable.appendChild(row);

  };
};

export async function searchTasks() {

  try {

    if (!tasks) {
      const response = await fetch("./model/data.json");
      if (!response.ok) throw new Error(response.statusText);
      const jsonData = await response.json();
      let sessionData = JSON.parse(sessionStorage.getItem("data"));
      if (sessionData) tasks = jsonData.concat(sessionData);
      else tasks = jsonData;

    } else {
      const response = await fetch("./model/data.json");
      if (!response.ok) throw new Error(response.statusText);
      const jsonData = await response.json();
      let sessionData = JSON.parse(sessionStorage.getItem("data"));
      if (sessionData) tasks = jsonData.concat(sessionData);

    }

    let priorityFilter = document.querySelector("#priority_filter");
    console.log(priorityFilter.value);
    priorityFilter.addEventListener("input", debounce(filterTasksByPriority, 100));

    let categoryFilter = document.querySelector("#category_filter");
    categoryFilter.addEventListener("input", debounce(filterTasksByCategory, 100));

    let resetBtn = document.querySelector("#reset_btn");
    resetBtn.addEventListener("click", () => {

      // console.log(resetBtn);
      document.querySelector("#priority_filter").value = "reset";
      document.querySelector("#category_filter").value = "reset";
      
      const taskTable = document.querySelector("#task-table");
      taskTable.classList.add("border");
      
      console.log(tasks);
      tasks.sort((b, a) => new Date(a.date) - new Date(b.date));
      cardProcessing(tasks);

    });

  } catch (error) {
    console.log(error);

  };
};

function debounce(fn, delay) {

  let timer;

  return function () {
    clearTimeout(timer);

    let opacityLayer = document.querySelector("#task-container");
    console.log(opacityLayer);
    opacityLayer.classList.add("opacity-30");

    timer = setTimeout(() => {

      fn();
      opacityLayer.classList.remove("opacity-30");

    }, delay);

  };
};

function filterTasksByPriority() {

  let searchValueByPriority = document.querySelector("#priority_filter").value;
  console.log(searchValueByPriority);

  let filteredTasks = tasks.filter(e => e.priority === searchValueByPriority);
  console.log(tasks);
  console.log(filteredTasks);
  filteredTasks.sort((b, a) => new Date(a.date) - new Date(b.date));

  const taskTable = document.querySelector("#task-table");
  const searchResult = document.createElement("p");
  searchResult.innerHTML = `No tasks found.`;

  if (filteredTasks.length === 0) {

    taskTable.innerHTML = "";
    taskTable.classList.remove("border");
    taskTable.appendChild(searchResult);

  } else {

    taskTable.classList.add("border");
    cardProcessing(filteredTasks);

  };
};

function filterTasksByCategory() {

  let searchValueByCategory = document.querySelector("#category_filter").value;
  console.log(searchValueByCategory);

  let filteredTasks = tasks.filter(e => e.category === searchValueByCategory);
  filteredTasks.sort((b, a) => new Date(a.date) - new Date(b.date));
  console.log(filteredTasks);

  const taskTable = document.querySelector("#task-table");
  const searchResult = document.createElement("p");
  searchResult.innerHTML = `No tasks found.`;

  if (filteredTasks.length === 0) {

    taskTable.innerHTML = "";
    taskTable.classList.remove("border");
    taskTable.appendChild(searchResult);

  } else {

    taskTable.classList.add("border");
    cardProcessing(filteredTasks);

  };

};