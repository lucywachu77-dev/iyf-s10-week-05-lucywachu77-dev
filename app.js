console.log("Week 5 JS loaded successfully");

// ==========================
// DOM ELEMENTS
// ==========================

// IMPORTANT: declare each variable only ONCE
const emailInput = document.getElementById("email");
const form = document.getElementById("contact-form");

const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const todoList = document.getElementById("todo-list");

// ==========================
// CONTACT FORM VALIDATION
// ==========================

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        if (!emailInput.value.trim()) {
            emailInput.classList.add("error");
            alert("Email is required!");
        } else {
            emailInput.classList.remove("error");
            alert("Form submitted successfully!");
        }
    });
}

// ==========================
// TO-DO LIST FUNCTIONALITY
// ==========================

if (addTaskBtn) {
    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create list item
        const li = document.createElement("li");
        li.classList.add("todo-item");

        // Task text
        const span = document.createElement("span");
        span.textContent = taskText;

        // Toggle complete
        span.addEventListener("click", function () {
            li.classList.toggle("completed");
        });

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", function () {
            li.remove();
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);

        todoList.appendChild(li);

        // clear input
        taskInput.value = "";
    });
}

// ==========================
// DAILY DOM CHALLENGES
// ==========================

// Change heading color randomly
function randomColor() {
    return `hsl(${Math.random() * 360}, 70%, 50%)`;
}

const h1 = document.querySelector("h1");
if (h1) {
    h1.addEventListener("click", function () {
        h1.style.color = randomColor();
    });
}

// Remove all images
const removeImagesBtn = document.getElementById("remove-images");

if (removeImagesBtn) {
    removeImagesBtn.addEventListener("click", function () {
        document.querySelectorAll("img").forEach(img => img.remove());
    });
}