
const dotsContainer = document.getElementById('dots')
const imgContainer = document.querySelector('.carousel-container')
const img = document.getElementById('carousel');

// link to pictures for carousel
let pictures = ['/img/teamgroup.JPG','/img/teamgroup2.JPG','/img/teamgroup3.JPG','/img/teamgroup4.JPG','/img/teamgroup5.JPG']
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
    }
    else {
        position++
    }
    updateCarousel(position)
}

const moveLeft = () => {
    if (position <= 0) {
        position = pictures.length - 1;
    }
    else {
        position--;
    }
    updateCarousel(position)
}

// Move image accordingly to whether or not user clicks left or right side of the image
imgContainer.addEventListener('click', function (event) {
    const imageRect = img.getBoundingClientRect();
    const clickX = event.clientX;
    const middleX = imageRect.left + (imageRect.width / 2);

    if (clickX < middleX) {
        moveLeft();
    } else {
        moveRight();
    }
})

// TODO: Create dots to display below image for users to click and move accordingly to that image
function updateCarousel(idx) {
    img.src = pictures[idx]
    position = idx
    updateDots();
}

function generateDots() {
    pictures.forEach((_, idx) => {
        const dot = document.createElement('span');
        dot.classList.add('dot')

        dot.addEventListener('click', (e) =>{
            e.stopPropagation();
            updateCarousel(idx)
        })
        dotsContainer.appendChild(dot)
    })
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot')
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === position)
    })
}

function initCarousel() {
    img.src = pictures[0]
    generateDots();
}

initCarousel();