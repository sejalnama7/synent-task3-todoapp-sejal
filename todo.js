window.onload = loadTasks;

function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value;

  if (task === "") return;

  let taskObj = {
    text: task,
    completed: false
  };

  createTask(taskObj);
  saveTask(taskObj);

  input.value = "";
}