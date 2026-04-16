document.addEventListener("DOMContentLoaded", function () {

    console.log("App loaded");

    // ======================
    // FORM VALIDATION
    // ======================
    const form = document.getElementById("contact-form");
    const emailInput = document.getElementById("email");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            if (emailInput.value.trim() === "") {
                emailInput.classList.add("error");
                alert("Email is required!");
            } else {
                emailInput.classList.remove("error");
                alert("Form submitted successfully!");
            }
        });
    }

    // ======================
    // TODO LIST
    // ======================
    const input = document.getElementById("task-input");
    const addBtn = document.getElementById("add-task");
    const list = document.getElementById("todo-list");
    const itemsLeft = document.getElementById("items-left");
    const clearCompletedBtn = document.getElementById("clear-completed");

    function updateCounter() {
        const allTasks = document.querySelectorAll(".todo-item");
        const activeTasks = document.querySelectorAll(".todo-item:not(.completed)");
        itemsLeft.textContent = `${activeTasks.length} items left`;
    }

    if (addBtn) {
        addBtn.addEventListener("click", function () {
            const text = input.value.trim();
            if (text === "") return;

            const li = document.createElement("li");
            li.classList.add("todo-item");

            const span = document.createElement("span");
            span.textContent = text;

            // Toggle completed
            span.addEventListener("click", () => {
                li.classList.toggle("completed");
                updateCounter();
            });

            // Delete button
            const delBtn = document.createElement("button");
            delBtn.textContent = "Delete";
            delBtn.classList.add("delete-btn");

            delBtn.addEventListener("click", () => {
                li.remove();
                updateCounter();
            });

            li.appendChild(span);
            li.appendChild(delBtn);
            list.appendChild(li);

            input.value = "";
            updateCounter();
        });
    }

    // ======================
    // FILTER BUTTONS
    // ======================
    const filterButtons = document.querySelectorAll(".filter");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter;
            const tasks = document.querySelectorAll(".todo-item");

            // active button style
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            tasks.forEach(task => {
                if (filter === "all") {
                    task.style.display = "flex";
                } 
                else if (filter === "active") {
                    task.style.display = task.classList.contains("completed") ? "none" : "flex";
                } 
                else if (filter === "completed") {
                    task.style.display = task.classList.contains("completed") ? "flex" : "none";
                }
            });
        });
    });

    // ======================
    // CLEAR COMPLETED
    // ======================
    if (clearCompletedBtn) {
        clearCompletedBtn.addEventListener("click", () => {
            document.querySelectorAll(".todo-item.completed").forEach(task => task.remove());
            updateCounter();
        });
    }

    // ======================
    // CHALLENGES
    // ======================

    // Random heading color
    const colorBtn = document.getElementById("color-changer");
    const h1 = document.querySelector("h1");

    if (colorBtn) {
        colorBtn.addEventListener("click", () => {
            h1.style.color = `hsl(${Math.random()*360},70%,50%)`;
        });
    }

    // Add paragraph
    const addParaBtn = document.getElementById("add-paragraph");

    if (addParaBtn) {
        addParaBtn.addEventListener("click", () => {
            const p = document.createElement("p");
            p.textContent = "New paragraph added!";
            document.body.appendChild(p);
        });
    }

    // Remove images
    const removeImgBtn = document.getElementById("remove-images");

    if (removeImgBtn) {
        removeImgBtn.addEventListener("click", () => {
            document.querySelectorAll("img").forEach(img => img.remove());
        });
    }

});