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
    // TO-DO LIST
    // ======================
    const input = document.getElementById("task-input");
    const addBtn = document.getElementById("add-task");
    const list = document.getElementById("todo-list");

    if (addBtn) {
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
            });

            // delete button
            const delBtn = document.createElement("button");
            delBtn.textContent = "Delete";
            delBtn.classList.add("delete-btn");

            delBtn.addEventListener("click", () => {
                li.remove();
            });

            li.appendChild(span);
            li.appendChild(delBtn);
            list.appendChild(li);

            input.value = "";
        });
    }

    // ======================
    // CHALLENGES
    // ======================

    // 1. Random heading color
    const colorBtn = document.getElementById("color-changer");
    const h1 = document.querySelector("h1");

    if (colorBtn) {
        colorBtn.addEventListener("click", () => {
            h1.style.color = `hsl(${Math.random()*360},70%,50%)`;
        });
    }

    // 2. Add paragraph
    const addParaBtn = document.getElementById("add-paragraph");

    if (addParaBtn) {
        addParaBtn.addEventListener("click", () => {
            const p = document.createElement("p");
            p.textContent = "New paragraph added!";
            document.body.appendChild(p);
        });
    }

    // 3. Remove images
    const removeImgBtn = document.getElementById("remove-images");

    if (removeImgBtn) {
        removeImgBtn.addEventListener("click", () => {
            document.querySelectorAll("img").forEach(img => img.remove());
        });
    }

});