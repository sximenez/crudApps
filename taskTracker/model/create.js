export function createTask() {

  const form = document.querySelector("#add-new-task");

  form.addEventListener("submit", (e) => {

    e.preventDefault();
    const name = document.querySelector("#name").value;
    const category = document.querySelector("#category").value;
    const date = document.querySelector("#date").value;
    const priority = document.querySelector("#priority").value;
    const detail = document.querySelector("#detail").value;
    let done = false;

    let data = JSON.parse(sessionStorage.getItem("data")) || [];
    data.push({ name, date, category, priority, detail, done });

    sessionStorage.setItem("data", JSON.stringify(data));

    window.location.replace("#/");

  });

};