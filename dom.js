// ===== dom.js =====

// ===== DOM SELECTION =====
const header = document.getElementById("main-header");
const articles = document.getElementsByTagName("article");
const paragraphs = document.getElementsByTagName("p");
const contents = document.getElementsByClassName("content");
const firstLink = document.querySelector(".nav-link");
const allLinks = document.querySelectorAll(".nav-link");
const navItems = document.querySelectorAll("nav li");

console.log("Header:", header);
console.log("Articles:", articles);
console.log("Paragraphs:", paragraphs);
console.log("Contents:", contents);
console.log("First link:", firstLink);
console.log("All links:", allLinks);
console.log("Nav items:", navItems);

// ===== DOM TRAVERSAL =====
console.log("Parent:", header.parentElement);
console.log("Children:", header.children);
console.log("First child:", header.firstElementChild);
console.log("Last child:", header.lastElementChild);

// ===== SIMPLE DOM MANIPULATION =====

// Change first paragraph text
if (paragraphs.length > 0) {
    paragraphs[0].textContent = "This paragraph text was changed via DOM!";
}

// Add class to articles
for (let article of articles) {
    article.classList.add("highlight");
}

// Change nav link colors
allLinks.forEach(link => {
    link.style.color = "#2ecc71";
});

// Add one test paragraph
const container = document.querySelector(".container");
const newPara = document.createElement("p");
newPara.textContent = "This is a new paragraph added via dom.js!";
container.appendChild(newPara);