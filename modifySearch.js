(function modifySearchNav() {
    function updateSearchText() {
        const searchNavItem = document.querySelector('li[data-id="/search"] span[data-encore-id="text"]');
        if (searchNavItem && !searchNavItem.innerText.includes('(Ctrl+K)')) {
            searchNavItem.innerText += ' (Ctrl+K)';
        }
    }

    updateSearchText();

    const observer = new MutationObserver(updateSearchText);
    observer.observe(document.body, { subtree: true, childList: true });

})();
