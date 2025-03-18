document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "l") {
        event.stopImmediatePropagation();
        if (Spicetify.Platform.History.location.pathname !== "/lyrics-plus") {
            Spicetify.Platform.History.push("/lyrics-plus");
        } else {
            Spicetify.Platform.History.goBack();
        }
    }
}, true);
