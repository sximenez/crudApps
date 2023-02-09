export function updateTask() {

  let data = JSON.parse(localStorage.getItem("clickedCardData"));
  console.log(data);

  let redirect = window.location.pathname + window.location.hash + `?id=${data.index}`;
  window.location.href = redirect;

  const container = document.querySelector("#card-container");
  container.innerHTML = "";

  const card = document.createElement("div");

  card.innerHTML = `
  <!-- Content -->
    <div class="bg-white rounded-lg border p-4 md:p-12 mt-[24px]">

      <!-- Header -->
      <div class="flex flex-col justify-between items-start pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
        <a href="#/" class="mb-4 text-sm font-medium text-gray-900 hover:underline">
          ← Back
        </a>

        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Update task
        </h3>
      </div>

      <!-- Body -->
      <form action="#" id="update-task">
        <div class="grid gap-4 mb-4 sm:grid-cols-2">
          <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input type="text" name="name" id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="" required="" value="${data.name}">
          </div>

          <div>
            <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
            <select type="text" name="category" id="category"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="" required="">
              <option selected="" value="">Select an option</option>
              <option ${data.category === "Personal" ? "selected" : ""} class="text-black not-italic" value="Personal">Personal</option>
              <option ${data.category === "Work" ? "selected" : ""} class="text-black not-italic" value="Work">Work</option>
            </select>

          </div>

          <div>
            <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deadline</label>
            <input type="date" name="date" id="date"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="dd/mm/yyyy" required="" value="${data.date}">
          </div>

          <div>
            <label for="priority" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Priority</label>
            <select type="text" name="priority" id="priority"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="" required="">
              <option value="">Select an option</option>
              <option ${data.priority === "Not urgent" ? "selected" : ""} class="text-black not-italic" value="Not urgent">Not urgent</option>
              <option ${data.priority === "Urgent" ? "selected" : ""} class="text-black not-italic" value="Urgent">Urgent</option>
            </select>

          </div>

          <div class="sm:col-span-2">
            <label for="detail" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Detail</label>
            <textarea id="detail" rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="">${data.detail}</textarea>
          </div>

        </div>
        <button type="submit"
          class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Update task
        </button>
      </form>
    </div>
  `;

  container.appendChild(card);

  const form = document.querySelector("#update-task");

  form.addEventListener("submit", (e) => {

    e.preventDefault();
    const name = document.querySelector("#name").value;
    const category = document.querySelector("#category").value;
    const date = document.querySelector("#date").value;
    const priority = document.querySelector("#priority").value;
    const detail = document.querySelector("#detail").value;
    let done = false;

    let data = JSON.parse(sessionStorage.getItem("data")) || [];

    const newData = JSON.parse(localStorage.getItem("clickedCardData"));
    // console.log(newData);

    const index = newData.index;

    const id = newData.index - 1;

    // console.log(data, newData, id);

    data[id] = { name, category, date, priority, detail, done, index };
    // console.log(data[id]);

    sessionStorage.setItem("data", JSON.stringify(data));

    window.location.replace("#/");

  });

};