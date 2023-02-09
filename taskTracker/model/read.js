function cardProcessing(data) {

  const container = document.querySelector("#task-container");
  const taskTable = document.querySelector("#task-table");
  container.innerHTML = "";

  for (let task of data) {

    let name = task.name;
    let date = task.date;
    let category = task.category;
    let priority = task.priority;
    let detail = task.detail;
    let done = task.done;

    const row = document.createElement("tr");
    row.classList.add("grid", "grid-cols-1", "md:grid-rows-1", "md:grid-cols-6", "gap-2", "p-5", "text-gray-900");

    const buttons = document.createElement("div");
    buttons.classList.add("flex", "md:flex-col", "items-center", "gap-1", "text-sm");

    const updateBtn = document.createElement("button");
    updateBtn.classList.add("border", "w-full", "md:w-2/3", "lg:w-1/2", "py-1", "rounded-full", "hover:bg-blue-700", "hover:border-blue-700", "hover:text-white", "transition-all");
    updateBtn.innerHTML = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("border", "w-full", "md:w-2/3", "lg:w-1/2", "py-1", "rounded-full", "hover:bg-red-600", "hover:border-red-600", "hover:text-white", "transition-all");
    deleteBtn.innerHTML = "Delete";

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("border", "w-full", "md:w-2/3", "lg:w-1/2", "py-1", "rounded-full", "hover:bg-green-700", "hover:border-green-700", "hover:text-white", "transition-all");
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

export function readData() {

  fetch("./model/data.json")
    .then(response => response.json())
    .then(jsonData => {

      let data = jsonData;
      let sessionData = JSON.parse(sessionStorage.getItem("data"));
      if (sessionData) data = data.concat(sessionData);
      console.log(sessionData, data);

      let index = 0;
      for (let task of data) {

        task.index = index;
        index++;

      };

      data.sort((b, a) => new Date(a.date) - new Date(b.date));

      cardProcessing(data);

    });

};