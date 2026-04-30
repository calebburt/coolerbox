

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

    .off-canvas-list .nav-wrapper li a:hover {
        background-color: var(--off-canvas-hover) !important;
    }

    /* ========================================
       PAGE & CONTAINER BACKGROUNDS
       ======================================== */
    body,
    ul.tileList,
    .component-action section {
        background-color: var(--body-background) !important;
    }

    ul.tileList {
        margin: 0 !important;
    }

    .lrn {
        background-color: var(--background-color);
    }

    /* ========================================
       WIDGET & COMPONENT STYLING
       ======================================== */
    .information-list li {
        background-color: var(--widget-background-color);
    }

    li.tile {
        border-radius: 22px;
    }

    /* ========================================
       TEXT & HEADING COLORS
       ======================================== */
    h1, h2,
    .Schoolbox_Calendar_Component_Dashboard_Controller .fc-widget-header .fc-list-heading-main,
    h3, label .unit-heading, h4, h5, h6, th, article, label,
    .rb-description,
    .flex-grade span:not(.grade span),
    .breadcrumb span,
    #lrn-assess,
    .content span:not(.ck span),
    p.filename {
        color: var(--body-foreground) !important;
    }

    article div {
        color: var(--foreground-color);
    }

    /* ========================================
       FORM CONTROLS (SELECT/DROPDOWN)
       ======================================== */
    select {
        background-color: var(--sbx-config-color-active);
        color: var(--foreground-color) !important;
        border: none;
    }

    select:hover {
        background-color: var(--widget-background-color);
    }

    /* ========================================
       CALENDAR & TIMETABLE STYLING
       ======================================== */
    .fc-cell-shaded,
    .tabs {
        background-color: var(--fc-page-bg-color) !important;
    }

    .fc-theme-standard tbody {
        border: none;
    }

    #calendar-163197 table tr td {
        color: var(--body-foreground);
    }

    .timetable-period-active {
        color: var(--content-ui-foreground) !important;
    }

    .timetable-subject a {
        color: hsla(211.36, 48.35%, 35.69%, 1) !important;
    }

    /* ========================================
       EMPTY STATES
       ======================================== */
    .empty-state {
        color: var(--body-foreground);
        background-color: var(--off-canvas-background);
    }
`);

// Initialize theme using shared utilities
initializeTheme('coolerboxTheme', 'light');