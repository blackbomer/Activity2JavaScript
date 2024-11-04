document.addEventListener("DOMContentLoaded", function () {
    const list = document.getElementById("lista");
    const addButton = document.getElementById("addButton");
    addButton.addEventListener("click", function () {
      const newItem = document.createElement("li");
      const itemCount = list.getElementsByTagName("li").length + 1;
      newItem.textContent = "Elemento " + itemCount;
      newItem.classList.add("list-group-item");
      list.appendChild(newItem);
    });
  });
  