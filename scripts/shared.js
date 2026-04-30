// Shared utility function
function addStyle(head, css) {
    const style = document.createElement("style");
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);
}

// Centralized theme definitions
const themes = {
    light: {
        "--background-color": "#f9f9f9",
        "--body-background": "var(--background-color)",
        "--off-canvas-background": "#eee",
        "--off-canvas-hover": "#ccc",
        "--foreground-color": "#222",
        "--body-foreground": "var(--foreground-color)",
        "--off-canvas-foreground-h": 0,
        "--off-canvas-foreground-s": 0,
        "--off-canvas-foreground-l": 0.13,
        "--off-canvas-foreground-a": 3,
        "--off-canvas-foreground": "var(--foreground-color)",
        "--widget-background-color": "white",
        "--content-ui-foreground": "hsla( 211.36, 48.35%, 35.69%, 1)",
        "--content-ui-background": "hsla( 205.16, 100%, 90.84%, 1)",
        "--content-ui-hover": "hsla( 204.78, 100%, 90.98%, 1)",
        "--sbx-color-foreground-primary": "#fff",
        "--sbx-config-color-active": "#eff5ff",
        "--fc-page-bg-color": "#fff",
    },
    dark: {
        "--background-color": "#1e1e1e",
        "--body-background": "var(--background-color)",
        "--off-canvas-background": "#2c2c2c",
        "--off-canvas-hover": "#333",
        "--foreground-color": "#ddd",
        "--body-foreground": "var(--foreground-color)",
        "--off-canvas-foreground-h": 0,
        "--off-canvas-foreground-s": 0,
        "--off-canvas-foreground-l": 0.85,
        "--off-canvas-foreground-a": 3,
        "--off-canvas-foreground": "var(--foreground-color)",
        "--widget-background-color": "#2a2a2a",
        "--content-ui-foreground": "hsla( 211.36, 60.35%, 70.69%, 1)",
        "--content-ui-background": "hsla( 211.36, 48.35%, 35.69%, 1)",
        "--content-ui-hover": "hsla( 210.78, 50%, 45.98%, 1)",
        "--sbx-color-foreground-primary": "#2c2c2c",
        "--sbx-config-color-active": "#333",
        "--fc-page-bg-color": "#222",
    },
    blue: {
        "--background-color": "#11111b",
        "--body-background": "var(--background-color)",
        "--off-canvas-background": "#1e1e2e",
        "--off-canvas-hover": "#2a2f35",
        "--foreground-color": "#cdd6f4",
        "--body-foreground": "var(--foreground-color)",
        "--off-canvas-foreground-h": 0,
        "--off-canvas-foreground-s": 0,
        "--off-canvas-foreground-l": 0.85,
        "--off-canvas-foreground-a": 3,
        "--off-canvas-foreground": "var(--foreground-color)",
        "--widget-background-color": "#1e1e2e",
        "--content-ui-foreground": "hsla( 211.36, 60.35%, 70.69%, 1)",
        "--content-ui-background": "#1e1e2e",
        "--content-ui-hover": "hsla( 210.78, 50%, 45.98%, 1)",
        "--sbx-color-foreground-primary": "#2c2c3c",
        "--sbx-config-color-active": "#334",
        "--fc-page-bg-color": "#24243a",
    },
    banana: {
        "--background-color": "#ffff00",
        "--body-background": "var(--background-color)",
        "--off-canvas-background": "#eeee00",
        "--off-canvas-hover": "#dddd66",
        "--foreground-color": "#4d310e",
        "--body-foreground": "var(--foreground-color)",
        "--off-canvas-foreground-h": 0,
        "--off-canvas-foreground-s": 0,
        "--off-canvas-foreground-l": 0.13,
        "--off-canvas-foreground-a": 3,
        "--off-canvas-foreground": "var(--foreground-color)",
        "--widget-background-color": "#dddd00",
        "--content-ui-foreground": "#5d4114",
        "--content-ui-background": "rgb(241, 211, 89)",
        "--content-ui-hover": "rgb(213, 195, 62)",
        "--sbx-color-foreground-primary": "#eeee11",
        "--sbx-config-color-active": "#dbcc22",
        "--fc-page-bg-color": "#feee00",
    },
    cheese: {
        "--background-color": "#e4df84",
        "--body-background": "var(--background-color)",
        "--off-canvas-background": "#eee546",
        "--off-canvas-hover": "#f0e36e",
        "--foreground-color": "#644c00",
        "--body-foreground": "var(--foreground-color)",
        "--off-canvas-foreground-h": 0,
        "--off-canvas-foreground-s": 0,
        "--off-canvas-foreground-l": 0.13,
        "--off-canvas-foreground-a": 3,
        "--off-canvas-foreground": "var(--foreground-color)",
        "--widget-background-color": "#e6da09",
        "--content-ui-foreground": "#7c5e01",
        "--content-ui-background": "rgb(241, 211, 89)",
        "--content-ui-hover": "rgb(211, 186, 94)",
        "--sbx-color-foreground-primary": "#f6df50",
        "--sbx-config-color-active": "#dbcc22",
        "--fc-page-bg-color": "#feee00",
    },
    rainbow: {
        "--background-color": "linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)",
        "--body-background": "var(--background-color)",
        "--off-canvas-background": "linear-gradient(135deg, rgba(255, 0, 0, 0.1), rgba(255, 127, 0, 0.1), rgba(255, 255, 0, 0.1), rgba(0, 255, 0, 0.1), rgba(0, 0, 255, 0.1), rgba(75, 0, 130, 0.1), rgba(148, 0, 211, 0.1))",
        "--off-canvas-hover": "linear-gradient(135deg, rgba(255, 0, 0, 0.2), rgba(255, 127, 0, 0.2), rgba(255, 255, 0, 0.2), rgba(0, 255, 0, 0.2), rgba(0, 0, 255, 0.2), rgba(75, 0, 130, 0.2), rgba(148, 0, 211, 0.2))",
        "--foreground-color": "#000000",
        "--body-foreground": "var(--foreground-color)",
        "--off-canvas-foreground-h": 0,
        "--off-canvas-foreground-s": 0,
        "--off-canvas-foreground-l": 0,
        "--off-canvas-foreground-a": 1,
        "--off-canvas-foreground": "var(--foreground-color)",
        "--widget-background-color": "linear-gradient(135deg, rgba(255, 0, 0, 0.1), rgba(255, 127, 0, 0.1), rgba(255, 255, 0, 0.1), rgba(0, 255, 0, 0.1), rgba(0, 0, 255, 0.1), rgba(75, 0, 130, 0.1), rgba(148, 0, 211, 0.1))",
        "--content-ui-foreground": "#000000",
        "--content-ui-background": "linear-gradient(135deg, rgba(255, 0, 0, 0.1), rgba(255, 127, 0, 0.1), rgba(255, 255, 0, 0.1), rgba(0, 255, 0, 0.1), rgba(0, 0, 255, 0.1), rgba(75, 0, 130, 0.1), rgba(148, 0, 211, 0.1))",
        "--content-ui-hover": "linear-gradient(135deg, rgba(255, 0, 0, 0.2), rgba(255, 127, 0, 0.2), rgba(255, 255, 0, 0.2), rgba(0, 255, 0, 0.2), rgba(0, 0, 255, 0.2), rgba(75, 0, 130, 0.2), rgba(148, 0, 211, 0.2))",
        "--sbx-color-foreground-primary": "#ffffff",
        "--sbx-config-color-active": "linear-gradient(135deg, rgba(255, 0, 0, 0.1), rgba(255, 127, 0, 0.1), rgba(255, 255, 0, 0.1), rgba(0, 255, 0, 0.1), rgba(0, 0, 255, 0.1), rgba(75, 0, 130, 0.1), rgba(148, 0, 211, 0.1))",
        "--fc-page-bg-color": "linear-gradient(135deg, rgba(255, 0, 0, 0.1), rgba(255, 127, 0, 0.1), rgba(255, 255, 0, 0.1), rgba(0, 255, 0, 0.1), rgba(0, 0, 255, 0.1), rgba(75, 0, 130, 0.1), rgba(148, 0, 211, 0.1))",
    },
    ocean: {
        "--background-color": "#1e3a5f",
        "--body-background": "var(--background-color)",
        "--off-canvas-background": "#0b2039",
        "--off-canvas-hover": "#1a3a5f",
        "--foreground-color": "#e8f4f8",
        "--body-foreground": "var(--foreground-color)",
        "--off-canvas-foreground-h": 0,
        "--off-canvas-foreground-s": 0,
        "--off-canvas-foreground-l": 0.85,
        "--off-canvas-foreground-a": 3,
        "--off-canvas-foreground": "var(--foreground-color)",
        "--widget-background-color": "#2c5f7f",
        "--content-ui-foreground": "#11233c",
        "--content-ui-background": "#4a90a4",
        "--content-ui-hover": "#5ba0b4",
        "--sbx-color-foreground-primary": "#152c49",
        "--sbx-config-color-active": "#3d7a99",
        "--fc-page-bg-color": "#2c5f7f",
    },
    forest: {
        "--background-color": "#2d5016",
        "--body-background": "var(--background-color)",
        "--off-canvas-background": "#132a08",
        "--off-canvas-hover": "#2d5016",
        "--foreground-color": "#f0f8e7",
        "--body-foreground": "var(--foreground-color)",
        "--off-canvas-foreground-h": 0,
        "--off-canvas-foreground-s": 0,
        "--off-canvas-foreground-l": 0.85,
        "--off-canvas-foreground-a": 3,
        "--off-canvas-foreground": "var(--foreground-color)",
        "--widget-background-color": "#4a7c2d",
        "--content-ui-foreground": "#1b310c",
        "--content-ui-background": "#6b9e4a",
        "--content-ui-hover": "#7bb05a",
        "--sbx-color-foreground-primary": "#1d360d",
        "--sbx-config-color-active": "#5a8f3d",
        "--fc-page-bg-color": "#4a7c2d",
    },
    neon: {
        "--background-color": "#0a0a0a",
        "--body-background": "var(--background-color)",
        "--off-canvas-background": "#050505",
        "--off-canvas-hover": "#0a0a0a",
        "--foreground-color": "#ffffff",
        "--body-foreground": "var(--foreground-color)",
        "--off-canvas-foreground-h": 0,
        "--off-canvas-foreground-s": 0,
        "--off-canvas-foreground-l": 0.95,
        "--off-canvas-foreground-a": 3,
        "--off-canvas-foreground": "var(--foreground-color)",
        "--widget-background-color": "#1a1a1a",
        "--content-ui-foreground": "#00ffff",
        "--content-ui-background": "#ff00ff",
        "--content-ui-hover": "#ffff00",
        "--sbx-color-foreground-primary": "#0a0a0a",
        "--sbx-config-color-active": "#2a2a2a",
        "--fc-page-bg-color": "#1a1a1a",
    },
    pastel: {
        "--background-color": "#f8e8ff",
        "--body-background": "var(--background-color)",
        "--off-canvas-background": "#e0d4f0",
        "--off-canvas-hover": "#f8e8ff",
        "--foreground-color": "#4a4a8a",
        "--body-foreground": "var(--foreground-color)",
        "--off-canvas-foreground-h": 0,
        "--off-canvas-foreground-s": 0,
        "--off-canvas-foreground-l": 0.3,
        "--off-canvas-foreground-a": 3,
        "--off-canvas-foreground": "var(--foreground-color)",
        "--widget-background-color": "#e8f4ff",
        "--content-ui-foreground": "#4a4a8a",
        "--content-ui-background": "#ffe8f0",
        "--content-ui-hover": "#ffd4e0",
        "--sbx-color-foreground-primary": "#f8e8ff",
        "--sbx-config-color-active": "#d4e8ff",
        "--fc-page-bg-color": "#e8f4ff",
    },
    monochrome: {
        "--background-color": "#f5f5f5",
        "--body-background": "var(--background-color)",
        "--off-canvas-background": "#e0e0e0",
        "--off-canvas-hover": "#d0d0d0",
        "--foreground-color": "#333333",
        "--body-foreground": "var(--foreground-color)",
        "--off-canvas-foreground-h": 0,
        "--off-canvas-foreground-s": 0,
        "--off-canvas-foreground-l": 0.2,
        "--off-canvas-foreground-a": 3,
        "--off-canvas-foreground": "var(--foreground-color)",
        "--widget-background-color": "#e0e0e0",
        "--content-ui-foreground": "#333333",
        "--content-ui-background": "#cccccc",
        "--content-ui-hover": "#bbbbbb",
        "--sbx-color-foreground-primary": "#f5f5f5",
        "--sbx-config-color-active": "#d0d0d0",
        "--fc-page-bg-color": "#e0e0e0",
    },
    minimalist: {
        "--background-color": "#ffffff",
        "--body-background": "var(--background-color)",
        "--off-canvas-background": "#f8f8f8",
        "--off-canvas-hover": "#f0f0f0",
        "--foreground-color": "#333333",
        "--body-foreground": "var(--foreground-color)",
        "--off-canvas-foreground-h": 0,
        "--off-canvas-foreground-s": 0,
        "--off-canvas-foreground-l": 0.2,
        "--off-canvas-foreground-a": 3,
        "--off-canvas-foreground": "var(--foreground-color)",
        "--widget-background-color": "#f8f8f8",
        "--content-ui-foreground": "#333333",
        "--content-ui-background": "#e8e8e8",
        "--content-ui-hover": "#e0e0e0",
        "--sbx-color-foreground-primary": "#ffffff",
        "--sbx-config-color-active": "#f0f0f0",
        "--fc-page-bg-color": "#f8f8f8",
    },
    cyberpunk: {
        "--background-color": "#0a0a0a",
        "--body-background": "var(--background-color)",
        "--off-canvas-background": "#1a0a2e",
        "--off-canvas-hover": "#2a1a3e",
        "--foreground-color": "#00ff41",
        "--body-foreground": "var(--foreground-color)",
        "--off-canvas-foreground-h": 120,
        "--off-canvas-foreground-s": 100,
        "--off-canvas-foreground-l": 0.5,
        "--off-canvas-foreground-a": 3,
        "--off-canvas-foreground": "var(--foreground-color)",
        "--widget-background-color": "#1a0a2e",
        "--content-ui-foreground": "#00ff41",
        "--content-ui-background": "#ff0080",
        "--content-ui-hover": "#00ffff",
        "--sbx-color-foreground-primary": "#0a0a0a",
        "--sbx-config-color-active": "#2a1a3e",
        "--fc-page-bg-color": "#1a0a2e",
    },
    silly_animals: {
        "--body-background": "image-url('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Sacabambaspis_Wiki1.png/250px-Sacabambaspis_Wiki1.png')",
    }
};

// Apply a theme to the document
function applyTheme(themeName) {
    const themeVars = themes[themeName];
    if (!themeVars) return;
    
    for (const key in themeVars) {
        document.documentElement.style.setProperty(key, themeVars[key]);
    }
}

// Initialize theme from localStorage or default
function initializeTheme(storageKey, defaultTheme = 'light') {
    if (localStorage.getItem(storageKey)) {
        const themeName = localStorage.getItem(storageKey);
        applyTheme(themeName);
    } else if (defaultTheme) {
        applyTheme(defaultTheme);
    }
    
    // Listen for custom theme events
    document.addEventListener("new_theme", function(e) {
        const themeName = e.detail.theme;
        localStorage.setItem(storageKey, themeName);
        applyTheme(themeName);
    });
}

// Create theme selector dialog
function createThemeDialog(storageKey, styles = {}) {
    const themeDialog = document.createElement("dialog");
    themeDialog.innerHTML = `
    <div style="padding: 20px;">
        <h2>Select a Theme</h2>
        <h3>Presets</h3>
        <select id="themeSelect">
            <optgroup label="Default Themes">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="blue">Blue/Mocha</option>
            </optgroup>
            <optgroup label="Fun Themes">
                <option value="banana">BANANA</option>
                <option value="cheese">CHEESE</option>
            </optgroup>
            <optgroup label="Color Themes">
                <option value="ocean">Ocean</option>
                <option value="forest">Forest</option>
                <option value="neon">Neon</option>
                <option value="pastel">Pastel</option>
            </optgroup>
            <optgroup label="Aesthetic Themes">
                <option value="monochrome">Monochrome</option>
                <option value="minimalist">Minimalist</option>
                <option value="cyberpunk">Cyberpunk</option>
            </optgroup>
        </select>
        <h2>Style Themes</h2>
        
        <button id="closeThemeDialog" style="position: absolute; top: 10px; right: 10px;">Close</button>
    </div>
    `;
    
    // Apply default styles
    const defaultStyles = {
        border: "1px solid var(--foreground-color)",
        borderRadius: "5px",
        boxShadow: "0 8px 10px rgba(0, 0, 0, 0.2)",
        minWidth: "300px",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "100",
        backgroundColor: "var(--body-background)",
        color: "var(--body-foreground)"
    };
    
    // Merge with custom styles
    const finalStyles = { ...defaultStyles, ...styles };
    
    // Apply all styles to dialog
    Object.assign(themeDialog.style, finalStyles);
    
    document.body.appendChild(themeDialog);

    if (localStorage.getItem(storageKey)) {
        themeDialog.querySelector("#themeSelect").value = localStorage.getItem(storageKey);
    }

    themeDialog.querySelector("#closeThemeDialog").addEventListener("click", () => {
        themeDialog.close();
    });

    themeDialog.querySelector("#themeSelect").addEventListener("change", (event) => {
        const customEvent = new CustomEvent("new_theme", {
            detail: { theme: event.target.value },
            bubbles: true,
            cancelable: true
        });
        document.dispatchEvent(customEvent);
    });

    return themeDialog;
}

// Create edit dialog with theme button
function createEditDialog(config) {
    const dialog = document.createElement("dialog");
    dialog.innerHTML = `
    <div style="padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
            <h2 style="margin: 0; padding-right: 30px;">Edit</h2>
            <button id="closeEditDialog" style="margin-left: auto;">Close</button>
        </div>
        <div style="display: flex; align-items: center;">
            <h3 style="margin: 0; padding-right: 25px;">Themes</h3>
            <button id="changeThemeButton" style="margin-left: auto;">Change Theme</button>
        </div>
    </div>
    `;
    
    // Default styles
    const defaultStyles = {
        border: "1px solid var(--foreground-color)",
        borderRadius: "5px",
        boxShadow: "0 8px 10px rgba(0, 0, 0, 0.2)",
        position: "fixed",
        bottom: "25px",
        transform: "translate(25px, 0)",
        zIndex: "100",
        backgroundColor: "var(--body-background)",
        color: "var(--body-foreground)"
    };
    
    // Merge with custom styles
    const customStyles = config.styles || {};
    const finalStyles = { ...defaultStyles, ...customStyles };
    
    // Apply all styles to dialog
    Object.assign(dialog.style, finalStyles);
    
    config.container.appendChild(dialog);
    
    return dialog;
}

// Setup theme switching UI
function setupThemeSwitcher(config) {
    const { storageKey, container = document.body, editDialogStyles = {}, themeDialogStyles = {}, defaultTheme = 'light' } = config;
    
    // Initialize theme
    initializeTheme(storageKey, defaultTheme);
    
    // Create dialogs
    const editDialog = createEditDialog({
        container,
        styles: editDialogStyles
    });
    
    const themeDialog = createThemeDialog(storageKey, themeDialogStyles);
    
    // Wire up event listeners
    editDialog.querySelector("#closeEditDialog").addEventListener("click", () => {
        editDialog.close();
        if (config.onDialogClose) config.onDialogClose();
    });

    editDialog.querySelector("#changeThemeButton").addEventListener("click", () => {
        themeDialog.showModal();
    });
    
    return { editDialog, themeDialog };
}
