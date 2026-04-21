function addStyle(head, css) {
    const style = document.createElement("style");
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);
}

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
            // "--off-canvas-foreground-h": 0,
            // "--off-canvas-foreground-s": 0,
            // "--off-canvas-foreground-l": 0.13,
            // "--off-canvas-foreground-a": 3,
            "--off-canvas-foreground": "var(--foreground-color)",
            "--widget-background-color": "#dddd00",
            "--content-ui-foreground": "#5d4114",
            "--content-ui-background": "rgb(241, 211, 89)",
            "--content-ui-hover": "rgb(213, 195, 62)",
            "--sbx-color-foreground-primary": "#eeee11",
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

    };

    var main = document.querySelector("main") || document.body;
    var head = document.head || document.getElementsByTagName("head")[0];

    addStyle(head, `
        .left-off-canvas-menu ul.off-canvas-list li h3, .left-off-canvas-menu ul.off-canvas-list li h4 {
            color: var(--body-foreground);
        }
        
        .information-list li {
            background-color: var(--widget-background-color);
        }

        .off-canvas-list .nav-wrapper li a:hover {
            background-color: var(--off-canvas-hover) !important;
            // color: var(--content-ui-foreground);
        }
        
        ul.tileList {
            background-color: var(--body-background);
            margin: 0 !important;
        }

        h1, h2, .Schoolbox_Calendar_Component_Dashboard_Controller .fc-widget-header .fc-list-heading-main, h3, label .unit-heading, h4, h5, h6, th, article, label, .rb-description, .flex-grade span:not(.grade span), .breadcrumb span, #lrn-assess, .content span:not(.ck span), p.filename {
            color: var(--body-foreground) !important;
        }

        select {
            background-color: var(--sbx-config-color-active);
            color: var(--foreground-color) !important;
            border: none;
        }

        select:hover {
            background-color: var(--widget-background-color);
            color: var(--foreground-color) !important;
        }

        .empty-state {
            color: var(--body-foreground);
            background-color: var(--off-canvas-background);    
        }

        .component-action section {
            background-color: var(--body-background);
        }

        .timetable-period-active {
            color: var(--content-ui-foreground) !important;
        }
        
        .timetable-subject {
            // filter: brightness(0.7);
        }
        
        .timetable-subject a {
            color: hsla( 211.36, 48.35%, 35.69%, 1) !important;
        }

        article div {
            color: var(--foreground-color);
        }

        .fc-cell-shaded, .tabs {
            background-color: var(--fc-page-bg-color) !important;
        }

        .fc-theme-standard tbody {
            border: none;
        }

        #calendar-163197 table tr td {
            color: var(--body-foreground);
        }

        li.tile {
            border-radius: 22px;
        }

        .lrn {
            background-color: var(--background-color);
        }
    `);

document.addEventListener("new_theme", function(e) {
    console.log(e);
    const vars = themes[e.detail.theme];
        
    for (const key in vars) {
        document.documentElement.style.setProperty(key, vars[key]);
    }
})

if (localStorage.coolerboxTheme) {
    console.log("Loading theme...")
    var event = new CustomEvent("new_theme", {
            detail: {
                theme: localStorage.coolerboxTheme,
            },
            bubbles: true, // Allows the event to bubble up the DOM tree (default: false)
            cancelable: true // Allows the default action to be prevented (default: false)
        });

        document.dispatchEvent(event);
}