document.addEventListener("DOMContentLoaded", function () {

    // ======================
    // CONTACT FORM
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
                form.reset();
            }
        });
    }

    // ======================
    // TODO ELEMENTS
    // ======================
    const input = document.getElementById("task-input");
    const addBtn = document.getElementById("add-task");
    const list = document.getElementById("todo-list");
    const itemsLeft = document.getElementById("items-left");
    const clearBtn = document.getElementById("clear-completed");
    const filterButtons = document.querySelectorAll(".filter");

    // ======================
    // UPDATE COUNTER
    // ======================
    function updateCounter() {
        const activeTasks = document.querySelectorAll(".todo-item:not(.completed)");
        itemsLeft.textContent = `${activeTasks.length} items left`;
    }

    // ======================
    // ADD TASK
    // ======================
    addBtn.addEventListener("click", function () {
        const text = input.value.trim();

        if (text === "") return;

        const li = document.createElement("li");
        li.classList.add("todo-item");

        const span = document.createElement("span");
        span.textContent = text;

        // toggle complete
        span.addEventListener("click", () => {
            li.classList.toggle("completed");
            updateCounter();
        });

        // delete task
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

    // ======================
    // FILTER SYSTEM (FIXED)
    // ======================
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {

            const filter = button.dataset.filter;
            const tasks = document.querySelectorAll(".todo-item");

            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            tasks.forEach(task => {

                const isCompleted = task.classList.contains("completed");

                if (filter === "all") {
                    task.style.display = "flex";
                }

                else if (filter === "active") {
                    task.style.display = isCompleted ? "none" : "flex";
                }

                else if (filter === "completed") {
                    task.style.display = isCompleted ? "flex" : "none";
                }
            });
        });
    });

    // ======================
    // CLEAR COMPLETED
    // ======================
    clearBtn.addEventListener("click", () => {
        document.querySelectorAll(".todo-item.completed").forEach(task => task.remove());
        updateCounter();
    });

    // ======================
    // CHALLENGES
    // ======================

    // Random heading color
    document.getElementById("color-changer").addEventListener("click", () => {
        document.querySelector("h1").style.color =
            `hsl(${Math.random() * 360},70%,50%)`;
    });

    // Add paragraph
    document.getElementById("add-paragraph").addEventListener("click", () => {
        const p = document.createElement("p");
        p.textContent = "New paragraph added!";
        document.body.appendChild(p);
    });

    // Remove images
    document.getElementById("remove-images").addEventListener("click", () => {
        document.querySelectorAll("img").forEach(img => img.remove());
    });

    // initial counter
    updateCounter();

});