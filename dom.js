// ===== dom.js =====

// DOM SELECTIONS
const header = document.getElementById("main-header"); // select header by ID
const articles = document.getElementsByTagName("article"); // select all articles
const paragraphs = document.getElementsByTagName("p"); // select all paragraphs
const contents = document.getElementsByClassName("content"); // select by class name
const firstLink = document.querySelector(".nav-link"); // first element matching selector
const allLinks = document.querySelectorAll(".nav-link"); // all elements matching selector
const navItems = document.querySelectorAll("nav li"); // all list items in nav

console.log("Header element:", header);
console.log("Articles:", articles);
console.log("Paragraphs:", paragraphs);
console.log("Contents by class name:", contents);
console.log("First nav link:", firstLink);
console.log("All nav links:", allLinks);
console.log("Nav list items:", navItems);

// ===== DOM TRAVERSAL =====
console.log("Header's parent element:", header.parentElement); // usually <body>
console.log("Header's children:", header.children);
console.log("Header's first element child:", header.firstElementChild);
console.log("Header's last element child:", header.lastElementChild);

// Traversing siblings
if (header.nextElementSibling) {
    console.log("Header's next sibling element:", header.nextElementSibling);
}
if (header.previousElementSibling) {
    console.log("Header's previous sibling element:", header.previousElementSibling);
}

// ===== DOM MANIPULATION EXAMPLES =====

// Change first paragraph text
if(paragraphs.length > 0){
    paragraphs[0].textContent = "This paragraph text was changed via DOM!";
}

// Add a new class to all articles
for (let article of articles) {
    article.classList.add("highlight");
}

// Change all nav link colors
allLinks.forEach(link => link.style.color = "#2ecc71");

// Append a new paragraph dynamically (as a test)
const container = document.querySelector(".container");
const newPara = document.createElement("p");
newPara.textContent = "This is a new paragraph added via dom.js!";
container.appendChild(newPara);