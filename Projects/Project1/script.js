
const todoInput = document.getElementById('todo-input');
const buttonClick = document.getElementById('btn')
const todoList = document.getElementById('todo-list')

let tasks = []
todoInput.addEventListener('click', function () {
    let addTask = todoInput.value.trim();
    if (addTask === '') return;

    const newTask = {
        id: Date.now(),
        text: addTask,
        completed: false
    }
    tasks.push(newTask);
    saveToLocal();
    todoInput.value = '' //clear after adding
    console.log(tasks);
})

//save data to local storage
function saveToLocal() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}