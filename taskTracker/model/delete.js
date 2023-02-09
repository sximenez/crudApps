export function deleteTask() {

  let data = JSON.parse(sessionStorage.getItem("data")) || [];

  const newData = JSON.parse(localStorage.getItem("clickedCardData"));

  const index = newData.index - 1;

  // console.log(data, newData, index);

  data.splice(index, 1);

  sessionStorage.setItem("data", JSON.stringify(data));

  window.location.replace("#/");

};