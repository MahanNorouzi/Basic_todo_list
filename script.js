const form = document.querySelector("#new-item-form");
const list = document.querySelector("#list");
const input = document.querySelector("#item-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const item = document.createElement("div");
  item.innerHTML = input.value;
  item.classList.add("list-item");
  console.log(item);
  list.appendChild(item);
  input.value = "";
  item.addEventListener("click", (e) => {
    list.removeChild(item);
  });
});
