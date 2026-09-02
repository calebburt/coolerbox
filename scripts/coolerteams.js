function waitForElement(selector, timeout = 5000) {
    return new Promise((resolve, reject) => {
        // Check if element already exists
        const existing = document.querySelector(selector);
        if (existing) {
            return resolve(existing);
        }

        // Set up timeout
        const timer = setTimeout(() => {
            observer.disconnect();
            reject(new Error(`Timeout: Element "${selector}" not found within ${timeout}ms`));
        }, timeout);

        // Observe DOM changes
        const observer = new MutationObserver(() => {
            const el = document.querySelector(selector);
            if (el) {
                clearTimeout(timer);
                observer.disconnect();
                resolve(el);
            }
        });

        observer.observe(document.documentElement, {
            childList: true,
            subtree: true
        });
    });
}

var main = document.querySelector("main") || document.body;

var btn = document.createElement("button");
btn.textContent = "Edit";
btn.style.position = "fixed";
btn.style.top = "650px";
btn.style.left = "15px";
document.body.appendChild(btn);

// Setup theme switcher using shared utilities
const { editDialog } = setupThemeSwitcher({
    storageKey: 'coolerteamsTheme',
    defaultTheme: 'dark',
    container: main,
    editDialogStyles: {
        bottom: "25px",
        transform: "translate(25px, 0)"
    }
});

// Optional: what happens when clicked
btn.addEventListener("click", () => {
    editDialog.show();
});
