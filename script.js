const ADD_TASK = document.querySelector(".add-task"),
  INPUT_TASK = document.querySelector("#input-task"),
  PLUS = document.querySelector(".plus"),
  TASKS_CONTENT = document.querySelector(".tasks-content"),
  TASK_STATS = document.querySelector(".task-stats"),
  TASKS_COUNT = document.querySelector(".tasks-count span"),
  TASK_COMPLETED = document.querySelector(".tasks-completed span"),
  CLEAR_ALL = document.querySelector(".clear-all"),
  FINISHED_ALL = document.querySelector(".finished-all");

window.onload = () => {
  INPUT_TASK.focus();
  noTasks();
};

let taskNum = 0;
let text = "";

PLUS.addEventListener("click", () => {
  const NO_TASKS = document.querySelector(".no-tasks-message");
  if (document.body.contains(NO_TASKS)) {
    NO_TASKS.remove();
  }

  const value = INPUT_TASK.value;
  if (value && value !== text) {
    const element = document.createElement("span");
    element.setAttribute("class", "task-box");
    element.innerHTML = value;
    const element_sub = document.createElement("span");
    element_sub.setAttribute("class", "delete");
    element_sub.innerHTML = "Delete";
    element.appendChild(element_sub);
    TASKS_CONTENT.appendChild(element);
    INPUT_TASK.value = "";
  } else if (!value) {
    alert("you did not add nothing");
    if (TASKS_CONTENT.childElementCount == 0) {
      noTasks();
    }
  } else if (value && value == text) {
    alert("you already added it");

    INPUT_TASK.value = "";
  }
  text = value;

  clacTasks();

  INPUT_TASK.focus();
});
document.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    e.target.parentNode.remove();

    if (TASKS_CONTENT.childElementCount == 0) {
      noTasks();
    }
  }

  if (e.target.classList.contains("task-box")) {
    e.target.classList.toggle("finished");
  }
  clacTasks();
});

CLEAR_ALL.addEventListener("click", () => {
  TASK_BOX = document.querySelectorAll(".task-box");
  for (let i = 0; i < TASK_BOX.length; i++) {
    TASK_BOX[i].remove();
  }

  clacTasks();

  if (TASKS_CONTENT.childElementCount == 0) {
    noTasks();
  }
  INPUT_TASK.value = "";
});

FINISHED_ALL.addEventListener("click", () => {
  TASK_BOX = document.querySelectorAll(".task-box");
  for (let i = 0; i < TASK_BOX.length; i++) {
    TASK_BOX[i].classList.add("finished");
  }

  clacTasks();
});

function noTasks() {
  const element = document.createElement("span");
  element.className = "no-tasks-message";
  element.innerHTML = "No tasks are added";
  TASKS_CONTENT.appendChild(element);
}

function clacTasks() {
  TASK_BOX = document.querySelectorAll(".task-box");
  TASKS_COUNT.innerHTML = TASK_BOX.length;
  TASK_COMPLETED.innerHTML = document.querySelectorAll(".finished").length;
}
