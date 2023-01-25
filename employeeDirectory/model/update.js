export function updateCard() {

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
        <a href="#/read" class="mb-4 text-sm font-medium text-gray-900 hover:underline">
          ← Back  
        </a> 
      
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Update employee details
        </h3>
      </div>

      <!-- Body -->
      <form action="#" id="update-employee">
        <div class="grid gap-4 mb-4 sm:grid-cols-2">
          <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input type="text" name="name" id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="" required="" value="${data.name}">
          </div>
          
          <div>
            <label for="department"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
            <select type="text" name="department" id="department"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="" required="" value="">
              <option value="">Select an option</option>
              <option ${data.department === "ACC" ? "selected" : ""} value="ACC">Accounts</option>
              <option ${data.department === "MGNT" ? "selected" : ""} value="MGNT">Admin</option>
              <option ${data.department === "HR" ? "selected" : ""} value="HR">Human resources</option>
              <option ${data.department === "CYBER" ? "selected" : ""} value="CYBER">Server security</option>
              <option ${data.department === "BI" ? "selected" : ""} value="BI">Business development</option>
              <option ${data.department === "IT" ? "selected" : ""} value="IT">Programming</option>
              <option ${data.department === "MAR" ? "selected" : ""} value="MAR">Marketing</option>
              <option ${data.department === "PUR" ? "selected" : ""} value="PUR">Purchasing</option>
              <option ${data.department === "COM" ? "selected" : ""} value="COM">Communication</option>
            </select>

          </div>
          
          <div>
            <label for="job_title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job
              title</label>
            <input type="text" name="job_title" id="job_title"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="" required="" value="${data.job_title}">
          </div>

          <div>
            <label for="location"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
            <select type="text" name="location" id="location"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="" required="">
              <option value="">Select an option</option>
              <option value="Remote" ${data.location === "Remote" ? "selected" : ""}>Remote</option>
              <option value="On-site" ${data.location === "On-site" ? "selected" : ""}>On-site</option>
            </select>
          </div>

          <div>
            <label for="join_date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Join date</label>
            <input type="date" name="join_date" id="join_date"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="dd/mm/yyyy" required="" value="${data.join_date}">
          </div>
          
          <div>
            <label for="phone_number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input type="number" name="phone_number" id="phone_number"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-4567-890" required="" value="${data.phone_number}">
          </div>
          
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" name="email" id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="@helloworld.com" required="" value="${data.email}">
          </div>
          
          <div>
            <label for="photo"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo</label>
            <select type="text" name="photo" id="photo"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="" required="" >
              <option value="">Select a photo</option>
              <option ${data.photo === "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600" ? "selected" : ""} value="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600">Man 1</option>
              <option ${data.photo === "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1600" ? "selected" : ""} value="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1600">Woman 1</option>
              <option ${data.photo === "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600" ? "selected" : ""} value="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600">Man 2</option>
              <option ${data.photo === "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600" ? "selected" : ""} value="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600">Woman 2</option>
            </select>
          </div>

          <div class="sm:col-span-2">
            <label for="description"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short description</label>
            <textarea id="description" rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="" value="">${data.description}</textarea>
          </div>

        </div>
        <button type="submit"
          class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Update employee details
        </button>
      </form>
    </div>
  `;

  container.appendChild(card);

  const form = document.querySelector("#update-employee");

  form.addEventListener("submit", (e) => {

    e.preventDefault();
    let name = document.querySelector("#name").value;
    name = name
      .split(" ")
      .map(e => e[0].toUpperCase() + e.substring(1).toLowerCase())
      .join(" ");


    const department = document.querySelector("#department").value;
    let job_title = document.querySelector("#job_title").value;
    job_title = job_title
      .split(" ")
      .map(e => e[0].toUpperCase() + e.substring(1).toLowerCase())
      .join(" ");

    const location = document.querySelector("#location").value;
    const join_date = document.querySelector("#join_date").value;
    const phone_number = document.querySelector("#phone_number").value;
    const email = document.querySelector("#email").value;
    let description = document.querySelector("#description").value;
    description = description[0].toUpperCase() + description.substring(1).toLowerCase();

    const photo = document.querySelector("#photo").value;

    let data = JSON.parse(sessionStorage.getItem("data")) || [];

    const newData = JSON.parse(localStorage.getItem("clickedCardData"));
    console.log(newData);

    const index = newData.index;

    const id = newData.index - 1;

    // console.log(data, newData, id);

    data[id] = { name, department, job_title, location, join_date, phone_number, email, description, photo, index };
    // console.log(data[id]);

    sessionStorage.setItem("data", JSON.stringify(data));

    window.location.replace("#/");

  });

};