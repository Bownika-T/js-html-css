const taskList = [];

function renderTasks() {
  const taskListElement = document.querySelector('#task-list ul');
  taskListElement.innerHTML = '';
  for (let i = 0; i < taskList.length; i++) {
    const task = taskList[i];
    const taskElement = document.createElement('li');
    taskElement.innerHTML = `
      <span class="task-name">${task.taskName}</span>
      <span class="due-date">Due: ${task.dueDate}</span>
      <span class="priority">${task.priority}</span>
      <span class="completed">${task.completed ? 'Completed' : 'Not Completed'}</span>
      <button class="delete-task">Delete</button>
    `;
    taskListElement.appendChild(taskElement);
    const deleteButton = taskElement.querySelector('.delete-task');
    deleteButton.addEventListener('click', () => {
      taskList.splice(i, 1);
      renderTasks();
    });
  }
}

const addTaskForm = document.querySelector('#add-task-form');
addTaskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskNameInput = document.querySelector('#task-name');
  const dueDateInput = document.querySelector('#due-date');
  const priorityInput = document.querySelector('#priority');
  const task = {
    taskName: taskNameInput.value,
    dueDate: dueDateInput.value,
    priority: priorityInput.value,
    completed: false,
  };
  taskList.push(task);
  taskNameInput.value = '';
  dueDateInput.value = '';
  priorityInput.value = '';
  renderTasks();
});

renderTasks();