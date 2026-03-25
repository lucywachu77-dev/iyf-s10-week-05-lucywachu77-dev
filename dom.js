// DOM Selection
const header = document.getElementById("main-header");
const contents = document.getElementsByClassName("content");
const paragraphs = document.getElementsByTagName("p");
const firstLink = document.querySelector(".nav-link");
const allLinks = document.querySelectorAll(".nav-link");
const contactForm = document.getElementById("contact-form");
const emailInput = document.getElementById("email");
const navItems = document.querySelectorAll("nav li");

// DOM Traversal
console.log(header.parentElement); // body
console.log(header.children);
console.log(header.firstElementChild);
console.log(header.lastElementChild);

// Daily Challenges
document.getElementById("color-changer").addEventListener("click", () => {
    const colors = ["#e74c3c","#3498db","#2ecc71","#f1c40f"];
    document.querySelectorAll("h1, h2, h3").forEach(h => {
        h.style.color = colors[Math.floor(Math.random() * colors.length)];
    });
});

document.getElementById("add-paragraph").addEventListener("click", () => {
    const p = document.createElement("p");
    p.textContent = `New paragraph ${document.querySelectorAll(".container p").length + 1}`;
    document.querySelector(".container").appendChild(p);
});

document.getElementById("remove-images").addEventListener("click", () => {
    document.querySelectorAll("img").forEach(img => img.remove());
});