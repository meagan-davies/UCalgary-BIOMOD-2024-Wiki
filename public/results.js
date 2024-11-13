function openTab(event, tabId, group) {

    const tabGroup = document.querySelector(`.results-sub[data-group="${group}"]`);

    if (!tabGroup) {
        console.error('Tab group not found:', group); // Log error if no tab group is found
        return;
    }


    const tabContents = tabGroup.querySelectorAll('.tab-window');
    const tabButtons = tabGroup.querySelectorAll('.results-tab');


    tabContents.forEach(content => content.classList.remove('active'));
    tabButtons.forEach(button => button.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}
