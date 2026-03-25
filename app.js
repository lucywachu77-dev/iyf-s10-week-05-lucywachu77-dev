// ===== app.js =====

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


// ===== TODO LIST =====
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

let todos = [];
let currentFilter = "all";

function renderTodos() {
    todoList.innerHTML = "";

    let filtered = todos;

    if (currentFilter === "active") {
        filtered = todos.filter(t => !t.completed);
    }

    if (currentFilter === "completed") {
        filtered = todos.filter(t => t.completed);
    }

    filtered.forEach(todo => {
        const li = document.createElement("li");
        li.className = todo.completed ? "completed" : "";

        const span = document.createElement("span");
        span.textContent = todo.text;
        li.appendChild(span);

        // Toggle complete
        span.addEventListener("click", () => {
            toggleTodo(todo.id);
        });

        // Delete button
        const btn = document.createElement("button");
        btn.textContent = "X";
        btn.addEventListener("click", () => {
            deleteTodo(todo.id);
        });

        li.appendChild(btn);
        todoList.appendChild(li);
    });

    itemsLeft.textContent = `${todos.filter(t => !t.completed).length} items left`;
}

function addTodo(text) {
    todos.push({
        id: Date.now(),
        text: text,
        completed: false
    });

    renderTodos();
}

function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
    }
    renderTodos();
}

function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    renderTodos();
}

// Add todo
todoForm.addEventListener("submit", e => {
    e.preventDefault();

    const value = todoInput.value.trim();

    if (value !== "") {
        addTodo(value);
        todoInput.value = "";
    }
});

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
clearCompletedBtn.addEventListener("click", () => {
    todos = todos.filter(t => !t.completed);
    renderTodos();
});

// Initial render
renderTodos();


// ===== DAILY CHALLENGES =====

// Random heading color
document.getElementById("color-changer").addEventListener("click", () => {
    const colors = ["#e74c3c", "#3498db", "#2ecc71", "#f1c40f"];

    document.querySelectorAll("h1, h2, h3").forEach(h => {
        h.style.color = colors[Math.floor(Math.random() * colors.length)];
    });
});

// Add paragraph
document.getElementById("add-paragraph").addEventListener("click", () => {
    const p = document.createElement("p");

    const count = document.querySelectorAll(".container p").length + 1;
    p.textContent = `New paragraph ${count}`;

    document.querySelector(".container").appendChild(p);
});

// Remove images
document.getElementById("remove-images").addEventListener("click", () => {
    document.querySelectorAll("img").forEach(img => img.remove());
});