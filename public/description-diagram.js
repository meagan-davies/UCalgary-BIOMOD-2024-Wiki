document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('diagram-container');
    const infoBox = document.getElementById('diagram-info-box');
    const infoText = document.getElementById('info-text');

    // original background image
    const originalImage = '/img/temp.jpg';

    const revertButton = document.getElementById('diagram-revert-btn');

    const labelSets = {
        original: document.getElementById('label-original'),
        image1: document.getElementById('label-image1')
    };

    // Show the original label set initially
    labelSets.original.style.display = 'block';

    Object.values(labelSets).forEach(set => {
        set.querySelectorAll('.diagram-label').forEach(label => {
            label.addEventListener('click', (e) => {
                const newImage = e.target.getAttribute('data-image');
                const info = e.target.getAttribute('data-info');
                const section = e.target.getAttribute('data-section');

                if (newImage) {
                    // Change background image
                    container.style.backgroundImage = `url(${newImage})`;
                    // Hide original labels and show new ones
                    labelSets.original.style.display = 'none';
                    labelSets.image1.style.display = 'block'; // Display the next set of labels
                } else if (info) {
                    // Show info box with relevant text
                    infoText.textContent = info;
                    infoBox.style.display = 'block';
                } else if (section) {
                    // Scroll to specified section
                    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    });

    revertButton.addEventListener('click', () => {
        // Revert to original image
        container.style.backgroundImage = `url(${originalImage})`;
        // Hide all label sets and show the original
        Object.values(labelSets).forEach(set => set.style.display = 'none');
        labelSets.original.style.display = 'block'; // Show original labels
        infoBox.style.display = 'none'; // Hide info box on revert
    });
});
