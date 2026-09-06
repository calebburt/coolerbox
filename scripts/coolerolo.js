var main = document.body;

var btn = document.createElement("button");
btn.textContent = "Edit";
btn.style.position = "absolute";
btn.style.top = "15px";
btn.style.left = "85vw";
main.appendChild(btn);

// Setup theme switcher using shared utilities
const { editDialog } = setupThemeSwitcher({
    storageKey: 'cooleroloTheme',
    defaultTheme: 'light',
    container: main,
    editDialogStyles: {
        bottom: "25px",
        transform: "translate(25px, 0)"
    }
});

btn.addEventListener("click", () => {
    editDialog.show();
});
