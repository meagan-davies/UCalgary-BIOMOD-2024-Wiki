const labels = document.querySelectorAll('.diagram-label')
const diagram = document.getElementById('description-diagram')
const resetZoomBtn = document.getElementById('reset-zoom')

let zoomLevel = 1;
let zoomStep = 0.1;
let currentX = 0, currentY = 0;
let minZoom = 0.7;
let dragging = false;
let startX, startY;

// controls scroll zoom in/out
diagram.addEventListener('wheel', (e) => {
    e.preventDefault();

    if (e.deltaY < 0) {
        zoomLevel += zoomStep;
    } else if (e.deltaY > 0 && zoomLevel > zoomStep) {
        zoomLevel -= zoomStep;
    }

    diagram.style.transform = `scale(${zoomLevel}) translate(${currentX}px, ${currentY}px)`;

    // ensure labels stay where needed.
    labels.forEach(label => {
        const labelX = label.style.left.replace('%', '');
        const labelY = label.style.top.replace('%', '');

        label.style.transform = `translate(-50%, -50%) scale(1)`
        label.style.left = `${labelX}%`;
        label.style.top = `${labelY}%`;
    })
})

// mouse dragging event
diagram.addEventListener('mousedown', (e) => {
    dragging = true;
    startX = e.clientX - currentX;
    startY = e.clientY - currentY;
    diagram.style.cursor = 'grabbing'
})

diagram.addEventListener('mousemove', (e) => {
    // make sure mouse is dragging to move
    if (!dragging) return;

    currentX = e.clientX - startX;
    currentY = e.clientY - startY;

    diagram.style.transform = `scale(${zoomLevel}) translate(${currentX}px, ${currentY}px)`
})

diagram.addEventListener('mouseup', () => {
    dragging = false;
    diagram.style.cursor = 'zoom-in'
})

diagram.addEventListener('mouseleave', () => {
    dragging = false;
    diagram.style.cursor = 'zoom-in'
})

// clicking label goes to that section of page
labels.forEach(label => {
    label.addEventListener('click', function() {
        // controlling scroll to specific section
        const targetId = this.getAttribute('data-target')
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" })
    })
})

resetZoomBtn.addEventListener('click', () => {
    zoomLevel = 1;
    currentX = 0;
    currentY = 0;
    diagram.style.transform = 'scale(1) translate(0,0)'

    // reset label position
    labels.forEach(label => {
        label.style.transform = 'translate(-50%, -50%)'
    })
})