function addStyle(head, css) {
    const style = document.createElement("style");
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);
}

    // try {
    //     let badThing = document.querySelector("#component163300");
    //     badThing.remove();
    // } catch (e) {
    //     console.log("No bad thing found.");
    // }

    let dragEnabled = false;

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

    addStyle(document.head, `
        .noSelect {
            user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
        }
        .noLinks a {
            pointer-events: none;
        }
        .columns {
            height: 100% !important;
        }
    `);

    const draggables = document.querySelectorAll('.component-container');
    const dropzones = document.querySelectorAll('.columns');

    draggables.forEach(el => {
        el.addEventListener('pointerdown', startDrag);
    });

    function startDrag(e) {
        if (!dragEnabled) return;

        const el = e.currentTarget;
        let currentZone = el.parentElement;

        el.style.position = 'absolute';
        el.style.zIndex = 9999;

        const rect = el.getBoundingClientRect();
        let shiftX = e.clientX - rect.left;
        let shiftY = e.clientY - rect.top;

        el.setPointerCapture(e.pointerId);

        function moveAt(ev) {
            if (!dragEnabled) return;

            let targetZone = [...dropzones].find(zone => {
                const r = zone.getBoundingClientRect();
                return ev.clientX >= r.left &&
                       ev.clientX <= r.right &&
                       ev.clientY >= r.top &&
                       ev.clientY <= r.bottom;
            });

            if (targetZone && targetZone !== currentZone) {
                currentZone = targetZone;
                targetZone.appendChild(el);
            }

            const zoneRect = currentZone.getBoundingClientRect();
            let x = ev.clientX - zoneRect.left - shiftX;
            let y = ev.clientY - zoneRect.top - shiftY;

            x = Math.max(0, Math.min(x, zoneRect.width - el.offsetWidth));
            y = Math.max(0, Math.min(y, zoneRect.height - el.offsetHeight));

            el.style.left = x + 'px';
            el.style.top = y + 'px';
        }

        function stopDrag(ev) {
            el.removeEventListener('pointermove', moveAt);
            el.removeEventListener('pointerup', stopDrag);
            el.releasePointerCapture(ev.pointerId);

            el.style.position = 'static';
            el.style.left = '';
            el.style.top = '';
            el.style.zIndex = '';
        }

        el.addEventListener('pointermove', moveAt);
        el.addEventListener('pointerup', stopDrag);
    }

    
    var main = document.querySelector("main") || document.body;
    var head = document.head || document.getElementsByTagName("head")[0];

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

    editDialog = document.createElement("dialog");
    editDialog.innerHTML = `
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
    editDialog.style.border = "1px solid var(--foreground-color)";
    editDialog.style.borderRadius = "5px";
    editDialog.style.boxShadow = "0 8px 10px rgba(0, 0, 0, 0.2)";
    editDialog.style.position = "fixed";
    editDialog.style.bottom = "25px";
    editDialog.style.transform = "translate(25px, 0)";
    editDialog.style.zIndex = "100";
    editDialog.style.backgroundColor = "var(--body-background)";
    editDialog.style.color = "var(--body-foreground)";
    main.appendChild(editDialog);

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
                <option value="rainbow">Rainbow</option>
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
        <button id="closeThemeDialog" style="position: absolute; top: 10px; right: 10px;">Close</button>
    </div>
    `;
    themeDialog.style.border = "1px solid var(--foreground-color)";
    themeDialog.style.borderRadius = "5px";
    themeDialog.style.boxShadow = "0 8px 10px rgba(0, 0, 0, 0.2)";
    themeDialog.style.minWidth = "300px";
    themeDialog.style.position = "fixed";
    themeDialog.style.top = "50%";
    themeDialog.style.left = "50%";
    themeDialog.style.transform = "translate(-50%, -50%)";
    themeDialog.style.zIndex = "100";
    themeDialog.style.backgroundColor = "var(--body-background)";
    themeDialog.style.color = "var(--body-foreground)";
    document.body.appendChild(themeDialog);

    if (localStorage.coolerboxTheme) {
        themeDialog.querySelector("#themeSelect").value = localStorage.coolerboxTheme;
    }

    editDialog.querySelector("#closeEditDialog").addEventListener("click", () => {
        editDialog.close();
        disableDrag();
    });

    editDialog.querySelector("#changeThemeButton").addEventListener("click", () => {
        themeDialog.showModal();
    });

    themeDialog.querySelector("#closeThemeDialog").addEventListener("click", () => {
        themeDialog.close();
    });

    themeDialog.querySelector("#themeSelect").addEventListener("change", (event) => {
        var theme = event.target.value;
        localStorage.coolerboxTheme = theme;
        var event = new CustomEvent("new_theme", {
            detail: {
                theme: theme,
            },
            bubbles: true, // Allows the event to bubble up the DOM tree (default: false)
            cancelable: true // Allows the default action to be prevented (default: false)
        });

        document.dispatchEvent(event);
    });

    editButton.addEventListener("click", () => {
        editDialog.show();
        enableDrag();
    });