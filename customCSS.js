function applyCustomStyles() {
    const style = document.createElement("style");
    style.innerHTML = `
        .main-cardImage-circular {
            border-radius: 0% !important;
        }
        .main-cardImage-image {
            border-radius: 0px !important;
            display: block !important;
        }
    `;
    document.head.appendChild(style);
}

function waitForSpicetify() {
    if (typeof Spicetify !== "undefined" && Spicetify.Platform) {
        applyCustomStyles();
    } else {
        setTimeout(waitForSpicetify, 500);
    }
}
