    // try {
    //     let badThing = document.querySelector("#component163300");
    //     badThing.remove();
    // } catch (e) {
    //     console.log("No bad thing found.");
    // }

    let dragEnabled = false;
    let draggedElement = null;
    let layoutState = {};

    function enableDrag() {
        dragEnabled = true;
        document.body.classList.add('noSelect');
        document.body.classList.add('noLinks');
    }

    function disableDrag() {
        dragEnabled = false;
        document.body.classList.remove('noSelect');
        document.body.classList.remove('noLinks');
    }

    // Save layout to localStorage
    function saveLayout() {
        const layout = {};
        const draggables = document.querySelectorAll('.component-container');
        draggables.forEach(el => {
            if (el.id) {
                const parentZone = el.parentElement;
                const zoneIndex = Array.from(document.querySelectorAll('.columns')).indexOf(parentZone);
                layout[el.id] = {
                    zone: zoneIndex,
                    order: Array.from(parentZone.children).indexOf(el)
                };
            }
        });
        localStorage.coolerboxLayout = JSON.stringify(layout);
    }

    // Load layout from localStorage
    function loadLayout() {
        try {
            const layout = JSON.parse(localStorage.coolerboxLayout || '{}');
            const dropzones = document.querySelectorAll('.columns');
            const layoutArray = Object.entries(layout).sort((a, b) => a[1].order - b[1].order);
            
            layoutArray.forEach(([elementId, state]) => {
                const el = document.getElementById(elementId);
                if (el && dropzones[state.zone]) {
                    dropzones[state.zone].appendChild(el);
                }
            });
        } catch (e) {
            console.log("Could not load layout:", e);
        }
    }

    addStyle(document.head, `
        /* ========================================
           DRAG & DROP LAYOUT STYLING
           ======================================== */
        
        /* Disable text selection during drag operations */
        .noSelect {
            user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
        }

        /* Prevent link interactions during drag mode */
        .noLinks a {
            pointer-events: none;
        }

        /* Drop zone containers for layout management */
        .columns {
            height: 100% !important;
            position: relative;
        }

        /* Disable transitions while dragging for smooth movement */
        .component-container {
            transition: none !important;
        }
    `);

    const draggables = document.querySelectorAll('.component-container');
    const dropzones = document.querySelectorAll('.columns');

    draggables.forEach(el => {
        el.addEventListener('pointerdown', startDrag);
    });

    function startDrag(e) {
        if (!dragEnabled || draggedElement !== null) return;

        const el = e.currentTarget;
        draggedElement = el;
        let currentZone = el.parentElement;

        // Store original dimensions before making absolute
        const rect = el.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Make element absolutely positioned for dragging
        el.style.position = 'absolute';
        el.style.zIndex = 9999;
        el.style.width = width + 'px';
        el.style.height = height + 'px';

        let shiftX = e.clientX - rect.left;
        let shiftY = e.clientY - rect.top;

        el.setPointerCapture(e.pointerId);

        function moveAt(ev) {
            if (!dragEnabled || draggedElement === null) return;

            // Find the zone under the cursor
            let targetZone = [...dropzones].find(zone => {
                const r = zone.getBoundingClientRect();
                return ev.clientX >= r.left &&
                       ev.clientX <= r.right &&
                       ev.clientY >= r.top &&
                       ev.clientY <= r.bottom;
            });

            if (targetZone && targetZone !== currentZone) {
                currentZone = targetZone;
                currentZone.appendChild(el);
            }

            // Position relative to viewport, not the zone
            let x = ev.clientX - shiftX;
            let y = ev.clientY - shiftY;

            el.style.left = x + 'px';
            el.style.top = y + 'px';
        }

        function stopDrag(ev) {
            // Clean up event listeners
            document.removeEventListener('pointermove', moveAt);
            document.removeEventListener('pointerup', stopDrag);
            
            try {
                el.releasePointerCapture(ev.pointerId);
            } catch (e) {
                console.log("Error releasing pointer capture:", e);
            }

            // Return to static positioning so element flows naturally in its zone
            el.style.position = 'static';
            el.style.left = '';
            el.style.top = '';
            el.style.width = '';
            el.style.height = '';
            el.style.zIndex = '';

            draggedElement = null;
            
            // Save the layout
            saveLayout();
        }

        document.addEventListener('pointermove', moveAt);
        document.addEventListener('pointerup', stopDrag);
    }

    // Load saved layout when page loads
    loadLayout();

    var main = document.querySelector("main") || document.body;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.style.position = "fixed";
    editButton.style.top = "85px";
    editButton.style.right = "10px";
    editButton.style.zIndex = "999999";
    editButton.style.fontSize = "24px";
    editButton.style.padding = "10px 15px";
    editButton.style.borderRadius = "5px";
    editButton.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    main.appendChild(editButton);

    // Setup theme switcher using shared utilities
    const { editDialog } = setupThemeSwitcher({
        storageKey: 'coolerboxTheme',
        defaultTheme: 'light',
        container: main,
        editDialogStyles: {
            border: "1px solid var(--foreground-color)",
            bottom: "25px",
            transform: "translate(25px, 0)",
            backgroundColor: "var(--body-background)"
        },
        onDialogClose: disableDrag
    });

    editButton.addEventListener("click", () => {
        editDialog.show();
        enableDrag();
    });