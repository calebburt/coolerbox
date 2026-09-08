var main = document.querySelector("main") || document.body;
var head = document.head || document.querySelector("head");

// Correction CSS
addStyle(head, `
.styles__heading___hUk0M, .styles__display___gTvbx {
    color: var(--color-surface-7) !important;
}

.SidebarLayout__sidebarWrapper___ckbHk, .SidebarLayout__sidebarWrapper___ckbHk a {
    background-color: var(--off-canvas-background) !important;
    color: var(--off-canvas-foreground) !important;
}

.Sidebar__lessonTitle___Ks5M2 {
    color: var(--off-canvas-foreground) !important;
}

.NavBar__navBar___NNMJQ, .styles__footer___INaIC, .NavBar__navBar___NNMJQ *, .styles__footer___INaIC a {
    background-color: var(--widget-background-color) !important;
    color: var(--widget-foreground-color) !important;
}

:root {
  /* Primary scale (neutral-ish blues → mapped to neutrals) */
  --color-primary-1: var(--background-color) !important;
  --color-primary-2: var(--off-canvas-background) !important;
  --color-primary-3: var(--off-canvas-hover) !important;
  --color-primary-4: var(--foreground-color) !important;
  --color-primary-5: var(--foreground-color) !important;
  --color-primary-6: var(--foreground-color) !important;
  --color-primary-7: var(--foreground-color) !important;

  /* Secondary scale (also neutral-ish → mapped similarly) */
  --color-secondary-1: var(--background-color) !important;
  --color-secondary-2: var(--off-canvas-background) !important;
  --color-secondary-3: var(--off-canvas-hover) !important;
  --color-secondary-4: var(--foreground-color) !important;
  --color-secondary-5: var(--foreground-color) !important;
  --color-secondary-6: var(--foreground-color) !important;
  --color-secondary-7: var(--foreground-color) !important;

  /* Surface scale (true neutrals → perfect mapping) */
  --color-surface-1: var(--fc-page-bg-color) !important;
  --color-surface-2: var(--off-canvas-background) !important;
  --color-surface-3: var(--off-canvas-hover) !important;
  --color-surface-4: var(--content-ui-background) !important;
  --color-surface-5: var(--content-ui-hover) !important;
  --color-surface-6: var(--foreground-color) !important;
  --color-surface-7: var(--foreground-color) !important;

  /* Bounds / overlays / panels (neutral translucents) */
  --colors-bounds: var(--content-ui-foreground) !important;
  --colors-boundsBg: var(--content-ui-background) !important;

  --colors-hover: var(--off-canvas-hover) !important;

  --colors-overlay: var(--blackTranslucent40) !important;
  --colors-overlayContrast: var(--whiteTranslucent40) !important;

  --colors-panel: var(--widget-background-color) !important;
  --colors-panelContrast: var(--fc-page-bg-color) !important;

  --colors-selected: var(--content-ui-foreground) !important;
  --colors-selectedContrast: var(--widget-background-color) !important;

  /* Text / tooltip neutrals */
  --colors-text: var(--foreground-color) !important;
  --colors-tooltip: var(--foreground-color) !important;
  --colors-tooltipContrast: var(--fc-page-bg-color) !important;

  /* Warn (neutralized) */
  --colors-warn: var(--off-canvas-hover) !important;

  /* Canvas */
  --colors-canvas: var(--background-color) !important;
}

button, input:not([type="checkbox"]), select {
    background-color: var(--color-surface-2);
    border-radius: var(--spacer-2);
    padding: 10px;
    border: 1px solid var(--color-surface-3);
    min-width: 5vw;
    min-height: 3vw;
    color: var(--color-surface-6);
}
`);

// Initialize theme using shared utilities
initializeTheme('cooleroloTheme', 'light');

setTimeout(function() {addStyle(head, `
    * {
        transition:
            color .35s ease-in,
            background-color .35s ease-in,
            border-radius .35s ease-in
        !important;
    }
`)}, 1000)
// Add transitions after initial load
