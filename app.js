// To-Do List
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

let todos = [];
let currentFilter = "all";

function renderTodos() {
    todoList.innerHTML = "";
    let filtered = todos;
    if(currentFilter === "active") filtered = todos.filter(t => !t.completed);
    if(currentFilter === "completed") filtered = todos.filter(t => t.completed);

    filtered.forEach(todo => {
        const li = document.createElement("li");
        li.textContent = todo.text;
        li.className = todo.completed ? "completed" : "";
        li.dataset.id = todo.id;

        // Delete button
        const btn = document.createElement("button");
        btn.textContent = "X";
        btn.addEventListener("click", () => deleteTodo(todo.id));
        li.appendChild(btn);

        // Toggle complete
        li.addEventListener("click", e => {
            if(e.target.tagName !== "BUTTON") toggleTodo(todo.id);
        });

        todoList.appendChild(li);
    });

    itemsLeft.textContent = `${todos.filter(t => !t.completed).length} items left`;
}

function addTodo(text) {
    todos.push({id: Date.now(), text, completed: false});
    renderTodos();
}

function toggleTodo(id) {
    const todo = todos.find(t => t.id == id);
    todo.completed = !todo.completed;
    renderTodos();
}

function deleteTodo(id) {
    todos = todos.filter(t => t.id != id);
    renderTodos();
}

// Filters
filters.forEach(f => {
    f.addEventListener("click", () => {
        currentFilter = f.dataset.filter;
        filters.forEach(b => b.classList.remove("active"));
        f.classList.add("active");
        renderTodos();
    });
});

// Clear Completed
clearCompletedBtn.addEventListener("click", () => {
    todos = todos.filter(t => !t.completed);
    renderTodos();
});

// Handle form
form.addEventListener("submit", e => {
    e.preventDefault();
    if(input.value.trim() !== "") addTodo(input.value.trim());
    input.value = "";
});

// Contact Form Validation
const nameInput = document.getElementById("name");
const emailFormInput = document.getElementById("email");

function showError(input, message){
    input.classList.add("error");
}

function clearError(input){
    input.classList.remove("error");
}

contactForm.addEventListener("submit", e => {
    e.preventDefault();
    if(nameInput.value.length < 2) showError(nameInput); else clearError(nameInput);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(emailInput.value)) showError(emailInput); else clearError(emailInput);
});