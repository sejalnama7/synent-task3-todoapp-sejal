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

function createTask(taskObj) {
  let li = document.createElement("li");

  let leftDiv = document.createElement("div");
  leftDiv.style.display = "flex";
  leftDiv.style.alignItems = "center";
  leftDiv.style.gap = "10px";

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = taskObj.completed;

  let span = document.createElement("span");
  span.innerText = taskObj.text;

  
  if (taskObj.completed) {
    span.style.textDecoration = "line-through";
  }


  checkbox.onchange = function () {
    if (checkbox.checked) {
      span.style.textDecoration = "line-through";
    } else {
      span.style.textDecoration = "none";
    }

    updateTaskStatus(taskObj.text, checkbox.checked);
  };

  leftDiv.appendChild(checkbox);
  leftDiv.appendChild(span);

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";

  delBtn.onclick = function () {
    li.remove();
    deleteTask(taskObj.text);
  };

  li.style.display = "flex";
  li.style.justifyContent = "space-between";
  li.style.alignItems = "center";

  li.appendChild(leftDiv);
  li.appendChild(delBtn);

  document.getElementById("taskList").appendChild(li);
}