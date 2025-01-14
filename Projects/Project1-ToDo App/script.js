document.addEventListener('DOMContentLoaded', function () {
    const todoInput = document.getElementById('todo-input');
    const buttonClick = document.getElementById('btn')
    const todoList = document.getElementById('todo-list')

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [] //return data if already loaded or will return empty array, 

    tasks.forEach(task => renderData(task));

    buttonClick.addEventListener('click', function () {
        let addTask = todoInput.value.trim();
        if (addTask === '') return;

        const newTask = {
            id: Date.now(),
            text: addTask,
            completed: false
        }
        tasks.push(newTask);
        saveToLocal();
        renderData(newTask);
        todoInput.value = '' //clear after adding
        console.log(tasks);
    })

    //retrive the data
    function renderData(task) {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.setAttribute("data-id", task.id)
        if (task.completed) li.classList.add('completed');
        li.innerHTML = `
        <span>${task.text}</span>
        <button class="delete-button">delete</button>
        `;
        li.addEventListener('click', function (e) {
            if (e.target.tagName === "BUTTON") return;
            task.completed = !task.completed;
            li.classList.toggle("completed");
            saveToLocal();
        });
        li.querySelector('button')
            .addEventListener('click', (event) => {
                event.stopPropagation();
                tasks = tasks.filter(t => t.id !== t.id)
                li.remove();
                saveToLocal();
            })
        todoList.appendChild(li)
    }

    //save data to local storage
    function saveToLocal() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
})