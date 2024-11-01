function openTab(event, tabId) {
    const tabContents = document.querySelectorAll('.tab-window')
    tabContents.forEach(content => content.classList.remove('active'))

    const tabButtons = document.querySelectorAll('.results-tab')
    tabButtons.forEach(button => button.classList.remove('active'))

    document.getElementById(tabId).classList.add('active')
    event.currentTarget.classList.add('active')
}