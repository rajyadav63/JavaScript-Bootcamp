document.addEventListener('DOMContentLoaded', function () {
    const todoInput = document.getElementById('todo-input');
    const buttonClick = document.getElementById('btn')
    const todoList = document.getElementById('todo-list')

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [] //return data if already loaded or will return empty array, 

    tasks.forEach(task => renderData(task));

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

    //retrive the data
    function renderData(task) {
        const li = document.createElement('id');
        li.className = 'task-item';
        li.setAttribute("data-id", task.id)
        li.innerHTML = `
        <span>${task.text}</span>
        <button class="delete-button">delete</button>
        `
        todoList.appendChild(li)

    }

    //save data to local storage
    function saveToLocal() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
})