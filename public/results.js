function openTab(event, tabId, tabGroup) {
    const tabContainer = document.getElementById(`${tabGroup}-tabs`);
    
    if (!tabContainer) {
        console.error(`Tab group '${tabGroup}' not found.`);
        return;
    }

    const tabContents = document.querySelectorAll(`#${tabGroup}-tabs + .results-window .tab-window`);
    tabContents.forEach(content => content.classList.remove('active'));

    const tabButtons = tabContainer.querySelectorAll('.results-tab');
    tabButtons.forEach(button => button.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');

    if (event.currentTarget.classList.contains('toc-link')) {
        const buttonTab = tabContainer.querySelector(`[onclick*="'${tabId}', '${tabGroup}'"]`);
        if (buttonTab) buttonTab.classList.add('active');
    } else {
        event.currentTarget.classList.add('active');
    }
}
