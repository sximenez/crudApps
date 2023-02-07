export function darkMode() {

  let toggle = document.querySelector(".dark-mode-toggle");
  let body = document.querySelector("body");

  toggle.addEventListener("click", () => {

    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      toggle.innerHTML = "Dark";
    } else {
      body.classList.add("dark-mode");
      toggle.innerHTML = "Light";
    }

  });
};