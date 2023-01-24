export function createCard() {

  const form = document.querySelector("#add-new-employee");

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
    data.push({ name, department, job_title, location, join_date, phone_number, email, description, photo });

    sessionStorage.setItem("data", JSON.stringify(data));

    window.location.replace("#/");

  });

};