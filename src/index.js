document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#create-task-form");
    form.addEventListener("submit", addTask);
  });
  
  function addTask(event) {
    event.preventDefault();
    
    const inputField = document.querySelector("#new-task-description");
    const task = inputField.value;
    const taskList = document.querySelector("#tasks");
    const taskItem = document.createElement("li");
    taskItem.textContent = task;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    deleteButton.addEventListener("click", () => {
    taskList.removeChild(taskItem);
      });
    event.target.reset();
  }