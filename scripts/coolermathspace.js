// Initialize theme system
setupThemeSwitcher({
    storageKey: 'coolmathspaceTheme',
    defaultTheme: 'banana'
});

(function () {
  const NAVBAR_SELECTOR = ".css-1n7poe7-NavList";
  const BUTTON_ID = "mathspace-edit-button";

  function tryInsert() {
    const navbar = document.querySelector(NAVBAR_SELECTOR);
    if (!navbar) return;

    // Prevent duplicates if the DOM rerenders
    if (navbar.querySelector(`#${BUTTON_ID}`)) return;

    const editButton = document.createElement("li");
    editButton.id = BUTTON_ID;
    editButton.className = "css-o69446-NavListItem exjiuam2";
    editButton.innerHTML = `
      <a class="css-q02vqg-NavElementLink esyqyuo3" href="javascript:void(0)">
        <div class="css-1w3vkz3-SelectedPip esyqyuo2"></div>
        <div class="css-buplwb-NavLabel esyqyuo0">Edit</div>
      </a>
    `;

    // Create dialogs with mathspace-specific styling
    const editDialog = createEditDialog({
        container: document.body,
        styles: {
            border: "none",
            backgroundColor: "color-mix(in srgb, var(--background-color) 85%, rgba(255, 255, 255, 0.15))",
            backdropFilter: "blur(12px)",
            fontFamily: "\"Proxima Nova\", Helvetica, Arial, sans-serif"
        }
    });
    
    const themeDialog = createThemeDialog('coolmathspaceTheme', {
        border: "none",
        backgroundColor: "color-mix(in srgb, var(--background-color) 85%, rgba(255, 255, 255, 0.15))",
        backdropFilter: "blur(12px)",
        fontFamily: "\"Proxima Nova\", Helvetica, Arial, sans-serif",
        color: "#333"
    });

    editButton.firstElementChild.addEventListener("click", function () {
      editDialog.show();
    });

    editDialog.querySelector("#closeEditDialog").addEventListener("click", () => {
        editDialog.close();
    });

    editDialog.querySelector("#changeThemeButton").addEventListener("click", () => {
        themeDialog.showModal();
    });

    navbar.appendChild(editButton);

    var head = document.head;
    var style = document.createElement("style");
    style.innerText = `
        /* ========================================
           DIALOG & MODAL BACKGROUNDS
           ======================================== */
        /* Shared blur & tinted background for all containers */
        .css-1u3rtbi,
        .boxInner_1fvckc1-o_O-isOverflowHidden_1rineb,
        .css-1fw89b3,
        .css-geg8ft,
        .css-i47zne,
        .css-7zvp3y-CardBody,
        .css-lvquzb,
        .css-1xx8rd1,
        .css-1vp34mw,
        .css-1t1nv0p,
        .css-gel2e2,
        button,
        select {
            backdrop-filter: blur(12px);
            background-color: color-mix(in srgb, var(--background-color) 75%, rgba(255, 255, 255, 0.15)) !important;
        }

        /* Transparent modal interior for proper layering */
        .boxInner_1fvckc1-o_O-isOverflowHidden_1rineb-o_O-modalBoxInnerStyles_vuhj4b {
            background-color: transparent !important;
        }

        /* Special borders for panels/drawers */
        .css-lvquzb,
        .css-1xx8rd1,
        .css-1vp34mw,
        .css-16jzvql,
        .css-1t1nv0p,
        .css-gel2e2 {
            border: color-mix(in srgb, var(--background-color) 75%, rgba(255, 255, 255, 0.7)) !important;
        }

        /* ========================================
           VISUAL EFFECTS & BORDERS
           ======================================== */
        /* Rounded corners for dialog elements */
        .css-rpz78q {
            border-radius: 12px;
        }

        /* Slight transparency overlay for depth */
        .css-rdsoad {
            background-color: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
        }

        /* Menu separators */
        .css-11orwsa {
            border-top: 1px solid rgba(255, 255, 255, 0.4);
        }

        /* Remove default navbar decorations */
        .css-1n7poe7-NavList::after {
            content: "";
        }

        /* Remove pseudo-element backgrounds for cleaner look */
        .css-i47zne::before {
            backdrop-filter: none !important;
            background-color: transparent !important;
        }

        /* ========================================
           BUTTONS & FORM CONTROLS
           ======================================== */
        /* Extended styling for buttons and form controls */
        button,
        select {
            border-radius: 21px;
            border-color: var(--background-color) !important;
            box-sizing: border-box;
            display: inline-flex;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            font-family: "Proxima Nova", Helvetica, Arial, sans-serif;
            font-size: 16px;
            font-weight: 600;
            height: 42px;
            line-height: 1;
            transition: background-color 0.15s, border-color 0.15s, color 0.15s;
            -webkit-font-smoothing: subpixel-antialiased;
            padding: 0px 24px;
            text-decoration: none;
            border-style: solid;
            cursor: pointer;
            user-select: none;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            border-width: 1px;
            text-wrap: nowrap;
        }

        /* Special button styling for specific selectors */
        .css-mr5hjf,
        .css-18e0h60 {
            border: none !important;
        }

        .css-16jzvql {
            background-color: color-mix(in srgb, var(--background-color) 40%, black) !important;
            border: 1px solid color-mix(in srgb, var(--background-color) 50%, transparent) !important;
        }
    `;
head.appendChild(style);
  }

  // Try immediately (in case it already exists)
  tryInsert();

  // Observe for late-loaded navbars
  const observer = new MutationObserver(tryInsert);
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
