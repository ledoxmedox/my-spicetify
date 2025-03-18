document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'ArrowDown') {
        event.stopImmediatePropagation();
        Spicetify.Player.setMute(true);
    }
    if (event.ctrlKey && event.shiftKey && event.key === 'ArrowUp') {
        event.stopImmediatePropagation();
        Spicetify.Player.setMute(false);
    }
}, true);