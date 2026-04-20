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
            // "--sbx-color-foreground-primary": "#583b15",
            "--sbx-config-color-active": "#dbcc22",
            "--fc-page-bg-color": "#feee00",
        }
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