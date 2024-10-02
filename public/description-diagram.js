const labels = document.querySelectorAll('.diagram-label')
const diagram = document.getElementById('description-diagram')
const resetZoomBtn = document.getElementById('reset-zoom')

labels.forEach(label => {
    label.addEventListener('click', function() {

        scale = 2;

        var box = this.getBoundingClientRect();

        var centerX = (box.left + box.right) / 2;
        var centerY = (box.top + box.bottom) / 2;

        console.log(box, centerX, centerY)

        diagram.style.transform = `scale(${scale}) translate(${centerX}, ${centerY})`

        // controlling scroll to specific section
        const targetId = this.getAttribute('data-target')
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" })
    })
})

resetZoomBtn.addEventListener('click', () => {
    diagram.style.transform = 'scale(1) translate(0,0)'
})