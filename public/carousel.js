

const imgContainer = document.querySelector('.carousel-container')
const img = document.getElementById('carousel');

// link to pictures for carousel
let pictures = ['/img/temp.jpg','/img/logo.png']

img.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
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
