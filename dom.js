// ===== dom.js =====

// ===== DOM SELECTION =====
const header = document.getElementById("main-header");
const articles = document.getElementsByTagName("article");
const paragraphs = document.getElementsByTagName("p");
const contents = document.getElementsByClassName("content");
const firstLink = document.querySelector(".nav-link");
const allLinks = document.querySelectorAll(".nav-link");
const navItems = document.querySelectorAll("nav li");

// Additional required selections
const h1 = document.querySelector("h1");
const form = document.getElementById("contact-form");
const emailInput = document.getElementById("email");
const lastParagraph = document.querySelector("p:last-of-type");

// Logs
console.log("Header:", header);
console.log("Articles:", articles);
console.log("Paragraphs:", paragraphs);
console.log("Contents:", contents);
console.log("First link:", firstLink);
console.log("All links:", allLinks);
console.log("Nav items:", navItems);
console.log("H1:", h1);
console.log("Form:", form);
console.log("Email Input:", emailInput);
console.log("Last Paragraph:", lastParagraph);

// ===== DOM TRAVERSAL =====
console.log("Parent of header:", header.parentElement);
console.log("Children of header:", header.children);
console.log("First child of header:", header.firstElementChild);
console.log("Last child of header:", header.lastElementChild);

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

// ===== ADD NEW ELEMENT =====
const container = document.querySelector(".container");

if (container) {
    const newPara = document.createElement("p");
    newPara.textContent = "This is a new paragraph added via dom.js!";
    container.appendChild(newPara);
}