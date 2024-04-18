function handleFormSubmit(event) {
  event.preventDefault();
  const expense = event.target.expense.value;
  const Description = event.target.Description.value;
  const category = event.target.category.value;
  const userdetails = {
    expense: expense,
    Description: Description,
    category: category,
  };
  saveToLocalStorage(userdetails);
  event.target.reset();
}

function saveToLocalStorage(userdetails) {
  const list = document.getElementById("listofitems");
  const listItem = document.createElement("li");

  const userInfo = document.createElement("span");
  userInfo.textContent = `${userdetails.expense}-${userdetails.category}-${userdetails.Description}`;
  listItem.appendChild(userInfo);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete Expenses";
  deleteBtn.onclick = () => {
    localStorage.removeItem(userdetails.Description);
    list.removeChild(listItem);
  };
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit Expenses";
  editBtn.onclick = () => {
    localStorage.removeItem(userdetails.Description);
    list.removeChild(listItem);
    document.getElementById("expense").value = userdetails.expense;
    document.getElementById("Description").value = userdetails.Description;
    document.getElementById("category").value = userdetails.category;
  };

  listItem.appendChild(deleteBtn);
  listItem.appendChild(editBtn);
  list.appendChild(listItem);

  localStorage.setItem(userdetails.Description, JSON.stringify(userdetails));
}
