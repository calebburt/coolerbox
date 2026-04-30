var main = document.querySelector("main") || document.body;
var head = document.head || document.getElementsByTagName("head")[0];

addStyle(head, `
    /* ========================================
       NAVIGATION & SIDEBAR STYLING
       ======================================== */
    .left-off-canvas-menu ul.off-canvas-list li h3,
    .left-off-canvas-menu ul.off-canvas-list li h4 {
        color: var(--body-foreground);
    }

    /* ========================================
       GLOBAL TEXT COLOR
       ======================================== */
    * {
        color: var(--body-foreground) !important;
    }

    /* Override specific text colors for contrast */
    .css-1rx03ox, .css-s5xdrg {
        color: white !important;
    }

    .css-1bft1dv-makeBodyComponent, .css-em3g7v path {
        color: black !important;
    }

    /* Headers and icons in specific containers */
    .css-d9jmvw h2,
    .css-d9jmvw h3,
    .css-oiymbp svg {
        color: rgb(62, 62, 76) !important;
    }

    /* ========================================
       BACKGROUND COLOR
       ======================================== */
    div:has(nav), .css-1emh2t .evxkqpl0 {
        background-color: var(--background-color) !important;
    }

    .css-7aozyn-Navbar {
        border: none !important;
    }
`);

// Initialize theme using shared utilities
initializeTheme('coolmathspaceTheme', 'light');