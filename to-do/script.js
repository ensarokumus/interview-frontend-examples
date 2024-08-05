(() => {
  const $input = document.querySelector("#todo-input");
  const $submitBtn = document.querySelector("#todo-btn");
  const $todoList = document.querySelector("ul");

  const createTodoItem = (text) => {
    const $newListItem = document.createElement("li");
    const $listItemSpan = document.createElement("span");
    $listItemSpan.textContent = text;
    const $newDeleteButton = document.createElement("button");
    $newDeleteButton.textContent = "Delete";
    $newDeleteButton.classList.add("delete-btn");
    $newListItem.appendChild($listItemSpan);
    $newListItem.appendChild($newDeleteButton);
    return $newListItem;
  };

  const addDeleteListener = ($deleteBtn) => {
    $deleteBtn.addEventListener("click", () => {
      $deleteBtn.closest("li").remove();
    });
  };

  $submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!$input.value.trim()) return;

    const $newListItem = createTodoItem($input.value.trim());
    $todoList.appendChild($newListItem);
    addDeleteListener($newListItem.querySelector(".delete-btn"));
    $input.value = "";
  });

  // Add delete listeners to existing todo items
  document.querySelectorAll(".delete-btn").forEach(addDeleteListener);
})();
