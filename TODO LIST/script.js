let tasks = [];

// Add Task 

const addtask = () => {

    let input = document.getElementById('input-text');
    let text = input.value.trim();

    if (text === "") return;

    let newtask = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks = [...tasks, newtask];
    input.value = "";
    rendertask();
}


// Delete task

const deletetask = (id) => {
    tasks = tasks.filter(task => task.id !== id);
    rendertask();
}

// Toggle Tasks

const toggletask = (id) => {
    tasks = tasks.map((task) => {
        if (task.id === id) {
            return { ...task, completed: !task.completed }
        }
        return task;
    })
    rendertask();
}

// Render Tasks

const rendertask = () => {

    let tasklist = document.getElementById('task-list');

    tasklist.innerHTML = tasks.map(task => `
        <li class = "${task.completed ? "completed" : ""}">

        <span onclick = "toggletask(${task.id})">
             ${task.text}
        </span>

        <button onclick = "deletetask(${task.id})"><i class="fa-solid fa-xmark"></i></button> 

        </li>
        `).join(" ");
    toggleEmptyState();
    completedstats();
}


// Toggle Empty state

const toggleEmptyState = () => {

    let emptyimg = document.getElementById('empty-image');
    let tasklist = document.getElementById('task-list');
    emptyimg.style.display = tasklist.children.length === 0 ? 'block' : 'none';

}

// Completed Tasks stats

const completedstats = () => {
    const count = tasks.reduce((acc, task) => {
        return task.completed ? acc + 1 : acc;
    }, 0);
    document.getElementById('stats').innerText = `
    Completed: ${count} / ${tasks.length}`;
}