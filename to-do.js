const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');

let tasks = [];

addTaskButton.addEventListener('click', addTask);

function addTask() {
  const newTask = newTaskInput.value.trim();
  if (newTask) {
    tasks.push({ text: newTask, completed: false });
    newTaskInput.value = '';
    renderTaskList();
  }
}

function renderTaskList() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskElement = document.createElement('li');
    taskElement.textContent = task.text;
    if (task.completed) {
      taskElement.classList.add('completed');
    }
    taskElement.addEventListener('click', () => {
      tasks[index].completed = !tasks[index].completed;
      renderTaskList();
    });
    taskList.appendChild(taskElement);
  });
}