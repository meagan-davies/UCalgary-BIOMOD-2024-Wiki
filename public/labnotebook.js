// Sample data structure for notebook pages
const labNotebookPages = [
    { id: 1, date: '2024-11-01', experimentType: 'Biochemistry', classification: 'Type A', content: 'Page content 1...' },
    { id: 2, date: '2024-11-02', experimentType: 'Cell Culture', classification: 'Type B', content: 'Page content 2...' },
    // Add as many pages as needed
];

// Render notebook grid
function renderNotebookGrid(pages) {
    const notebookGrid = document.getElementById('notebookGrid');
    notebookGrid.innerHTML = '';  // Clear previous content

    pages.forEach(page => {
        const pageBox = document.createElement('div');
        pageBox.classList.add('page-box');
        pageBox.innerText = `Page ${page.id}`;
        pageBox.onclick = () => openPageModal(page);
        notebookGrid.appendChild(pageBox);
    });
}

// Filter the notebook pages based on selected tags
function filterPages() {
    const selectedTags = {
        date: document.querySelectorAll('.tag.date.selected'),
        experimentType: document.querySelectorAll('.tag.experimentType.selected'),
        classification: document.querySelectorAll('.tag.classification.selected')
    };

    const filteredPages = labNotebookPages.filter(page =>
        (selectedTags.date.length === 0 || selectedTags.date.some(tag => tag.dataset.value === page.date)) &&
        (selectedTags.experimentType.length === 0 || selectedTags.experimentType.some(tag => tag.dataset.value === page.experimentType)) &&
        (selectedTags.classification.length === 0 || selectedTags.classification.some(tag => tag.dataset.value === page.classification))
    );

    renderNotebookGrid(filteredPages);
}

// Open a modal to show page details
function openPageModal(page) {
    const modal = document.getElementById('pageModal');
    modal.querySelector('.modal-content').innerText = page.content;
    modal.style.display = 'block';
}

// Close the modal
function closePageModal() {
    document.getElementById('pageModal').style.display = 'none';
}

// Toggle tag selection
function toggleTag(tag) {
    tag.classList.toggle('selected');
    filterPages();
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderNotebookGrid(labNotebookPages);

    // Add event listeners to tags for filtering
    document.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener('click', () => toggleTag(tag));
    });
});
