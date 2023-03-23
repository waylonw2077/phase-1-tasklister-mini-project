document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#task-form");
  form.addEventListener("submit", addTask);
});
const form = document.querySelector('#task-form');
    const taskInput = document.querySelector('#task-input');
    const taskList = document.querySelector('#task-list');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const taskText = taskInput.value;
      const taskItem = document.createElement('li');
      taskItem.textContent = taskText;
      taskList.appendChild(taskItem);
      taskInput.value = '';
    });