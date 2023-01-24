function cardProcessing(data) {

  const container = document.querySelector("#card-container");
  container.innerHTML = "";

  for (let employee of data) {

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

let dataFromJson = null;

export function readData() {

  if (dataFromJson === null) {

    fetch("./model/data.json")
      .then(response => response.json())
      .then(jsonData => {

        dataFromJson = jsonData;
        let data = dataFromJson;
        let sessionData = JSON.parse(sessionStorage.getItem("data"));
        if (sessionData) data = data.concat(sessionData);
        console.log(dataFromJson, sessionData, data);

        let index = 0;
        for (let employee of data) {

          employee.index = index;
          index++;

        };

        data.sort((b, a) => new Date(a.join_date) - new Date(b.join_date));

        cardProcessing(data);
        console.log(sessionStorage);

      });

  } else {

    let data = dataFromJson;
    let sessionData = JSON.parse(sessionStorage.getItem("data"));
    if (sessionData) data = data.concat(sessionData);
    console.log(data);

    let index = 0;
    for (let employee of data) {

      employee.index = index;
      index++;
    };

    data.sort((b, a) => new Date(a.join_date) - new Date(b.join_date));

    cardProcessing(data);

  };
};

export function readCard() {

  const data = JSON.parse(localStorage.getItem("clickedCardData"));

  let redirect = window.location.pathname + window.location.hash + `?id=${data.index}`;
  window.location.href = redirect;

  const container = document.querySelector("#card-container");
  container.innerHTML = "";

  const card = document.createElement("div");

  card.innerHTML = `

    <div class="overflow-y-auto overflow-x-hidden h-full w-full">
      <div class="flex flex-col w-full h-full md:grow md:h-auto gap-x-6">

        <!-- Image block -->
        <div class="flex flex-col md:w-[300px] md:fixed md:h-[calc(100vh - 70px)] md:overflow-y-auto h-fit"> 
        
          <a href="#/" class="w-fit mb-4 text-sm font-medium text-gray-900 hover:underline">
            ← Back  
          </a>
        
          <div class="border rounded-lg p-5">
          
            <div class="w-full flex justify-center my-3 h-64">
              <img class="hidden h-fit w-fit rounded-full" src="${data.photo}"
                alt="Profile picture of ${data.name}">
                <div class="w-64 h-64 bg-cover bg-center border rounded-full"
                  style="background-image: url('${data.photo}')"></div>
            </div>

            <!-- Buttons -->
            <div class="p-6">

              <div class="flex items-center justify-evenly space-x-3 sm:space-x-4">

                <a href="#/update"
                  class="text-blue-700 inline-flex items-center border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <svg aria-hidden="true" class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                    </path>
                    <path fill-rule="evenodd"
                      d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                      clip-rule="evenodd"></path>
                  </svg>
                  Edit
                </a>

                <a id="delete-button" href="#/delete"
                  class="inline-flex items-center text-red-600 border border-red-600 hover:bg-red-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
                  <svg aria-hidden="true" class="w-5 h-5 mr-1.5 -ml-1" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clip-rule="evenodd"></path>
                  </svg>
                  Delete
                </a>

              </div>

            </div>

          </div>

        </div>

        <!-- Content block -->
        <div class="w-full md:pl-[325px] bg-white h-auto">

          <!-- Details -->
          <div class="w-full flex justify-between mb-6 rounded-t">
            <div class="w-full text-gray-900 md:text-lg dark:text-white">
              <h3 class="text-2xl font-bold my-6 md:mt-0">${data.name}</h3>

              <div class="border rounded-lg p-6 pb-0 mb-6">
                <div>
                  <p class="text-sm my-2 font-semibold leading-none text-gray-500 dark:text-white">Job Title</p>
                  <p class="mb-2 font-normal sm:mb-8 dark:text-gray-400">${data.job_title}</p>
                </div>

                <div>
                  <p class="text-sm my-2 font-semibold leading-none text-gray-500 dark:text-white">Department</p>
                  <p class="mb-2 font-normal sm:mb-8 dark:text-gray-400">${data.department}</p>
                </div>

                <div>
                  <p class="text-sm my-2 font-semibold leading-none text-gray-500 dark:text-white">Location</p>
                  <p class="mb-2 font-normal sm:mb-8 dark:text-gray-400">${data.location}</p>
                </div>
              </div>

              <div class="border rounded-lg p-6 pb-0 mb-6">
                <div>
                  <p class="text-sm my-2 font-semibold leading-none text-gray-500 dark:text-white">Phone</p>
                  <p class="mb-2 font-normal sm:mb-8 dark:text-gray-400">${data.phone_number}</p>
                </div>

                <div>
                  <p class="text-sm my-2 font-semibold leading-none text-gray-500 dark:text-white">Email</p>
                  <p class="mb-2 font-normal sm:mb-8 dark:text-gray-400">${data.email}</p>
                </div>
              </div>

              <div class="border rounded-lg p-6 pb-0 mb-6">
                <div>
                  <p class="text-sm my-2 font-semibold leading-none text-gray-500 dark:text-white">About</p>
                  <p class="mb-2 font-normal sm:mb-8 dark:text-gray-400">${data.description}</p>
                </div>
              </div>

              <div class="hidden">
                <p class="text-xl font-normal pb-6">${data.job_title}</p>
                <div class="bg-gray-50 p-5 mb-6 rounded-lg">
                  <p class="text-normal font-normal">${data.department} department</p>
                  <p class="text-normal font-normal">${data.location}</p>
                </div>
                <div class="bg-gray-50 p-5 mb-6 rounded-lg">
                  <p class="font-normal">${data.phone_number}</p>
                  <p class="font-normal">${data.email}</p>
                </div>
                <div class="border p-5 rounded-lg">
                  <p class="font-normal text-lg dark:text-gray-400">${data.description}</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  `;

  container.appendChild(card);

};