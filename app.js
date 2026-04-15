// ===== CONTACT FORM =====
const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

function showError(input) {
    input.classList.add("error");
}

function clearError(input) {
    input.classList.remove("error");
}

// Run ONLY if form exists
if (contactForm) {
    contactForm.addEventListener("submit", e => {
        e.preventDefault();

        let valid = true;

        if (nameInput.value.trim().length < 2) {
            showError(nameInput);
            valid = false;
        } else {
            clearError(nameInput);
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailInput.value.trim())) {
            showError(emailInput);
            valid = false;
        } else {
            clearError(emailInput);
        }

        if (valid) {
            alert("Form submitted successfully!");
            contactForm.reset();
        }
    });
}


// ===== TODO LIST =====
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

let todos = [];
let currentFilter = "all";

// Create Todo Element (clean structure)
function createTodoElement(todo) {
    const li = document.createElement("li");
    li.dataset.id = todo.id;
    li.className = todo.completed ? "completed" : "";

    li.innerHTML = `
        <span class="todo-text">${todo.text}</span>
        <button class="delete-btn">X</button>
    `;

    return li;
}

function renderTodos() {
    if (!todoList) return;

    todoList.innerHTML = "";

    let filtered = todos;

    if (currentFilter === "active") {
        filtered = todos.filter(t => !t.completed);
    } else if (currentFilter === "completed") {
        filtered = todos.filter(t => t.completed);
    }

    filtered.forEach(todo => {
        const li = createTodoElement(todo);
        todoList.appendChild(li);
    });

    if (itemsLeft) {
        itemsLeft.textContent = `${todos.filter(t => !t.completed).length} items left`;
    }
}

function addTodo(text) {
    todos.push({
        id: Date.now(),
        text,
        completed: false
    });
    renderTodos();
}

function toggleTodo(id) {
    const todo = todos.find(t => t.id == id);
    if (todo) {
        todo.completed = !todo.completed;
    }
    renderTodos();
}

function deleteTodo(id) {
    todos = todos.filter(t => t.id != id);
    renderTodos();
}

// Add Todo
if (todoForm) {
    todoForm.addEventListener("submit", e => {
        e.preventDefault();

        const value = todoInput.value.trim();

        if (value !== "") {
            addTodo(value);
            todoInput.value = "";
        }
    });
}

// ✅ EVENT DELEGATION (BEST PRACTICE)
if (todoList) {
    todoList.addEventListener("click", e => {
        const li = e.target.closest("li");
        if (!li) return;

        const id = li.dataset.id;

        if (e.target.classList.contains("delete-btn")) {
            deleteTodo(id);
        } else if (e.target.classList.contains("todo-text")) {
            toggleTodo(id);
        }
    });
}

// Filters
filters.forEach(button => {
    button.addEventListener("click", () => {
        currentFilter = button.dataset.filter;

        filters.forEach(b => b.classList.remove("active"));
        button.classList.add("active");

        renderTodos();
    });
});

// Clear completed
if (clearCompletedBtn) {
    clearCompletedBtn.addEventListener("click", () => {
        todos = todos.filter(t => !t.completed);
        renderTodos();
    });
}

// Initial render
renderTodos();


// ===== DAILY CHALLENGES =====

// Color changer
const colorBtn = document.getElementById("color-changer");
if (colorBtn) {
    colorBtn.addEventListener("click", () => {
        const colors = ["#e74c3c", "#3498db", "#2ecc71", "#f1c40f"];

        document.querySelectorAll("h1, h2, h3").forEach(h => {
            h.style.color = colors[Math.floor(Math.random() * colors.length)];
        });
    });
}

// Add paragraph
const addParaBtn = document.getElementById("add-paragraph");
if (addParaBtn) {
    addParaBtn.addEventListener("click", () => {
        const p = document.createElement("p");

        const count = document.querySelectorAll(".container p").length + 1;
        p.textContent = `New paragraph ${count}`;

        document.querySelector(".container").appendChild(p);
    });
}

// Remove images
const removeImgBtn = document.getElementById("remove-images");
if (removeImgBtn) {
    removeImgBtn.addEventListener("click", () => {
        document.querySelectorAll("img").forEach(img => img.remove());
    });
}