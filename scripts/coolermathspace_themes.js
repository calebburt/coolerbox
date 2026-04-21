var head = document.head;
var style = document.createElement("style");
style.innerText = `
div:has(nav) {
    background-color: var(--bg);
}
`;
head.appendChild(style);