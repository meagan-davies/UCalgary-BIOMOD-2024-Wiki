// const slider = document.querySelector('.carousel');

// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener('mousedown', e => {
//     isDown = true;
//     slider.classList.add('active');
//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
// })

// slider.addEventListener('mouseleave', _ => {
//     isDown = false;
//     slider.classList.remove('active')
// })

// slider.addEventListener('mouseup', _ => {
//     isDown = false;
//     slider.classList.remove('active');
// })

// // mouse move 
// slider.addEventListener('mousemove', e => {
//     if(!isDown) return;

//     e.preventDefault();
//     const x = e.pageX - slider.offsetLeft;
//     const SCROLL_SPEED = 3;
//     const walk = (x - startX) * SCROLL_SPEED;
//     slider.scrollLeft = scrollLeft - walk;
// })

const img = document.getElementById('carousel');
const rightBtn = document.getElementById('carousel-right-btn');
const leftBtn = document.getElementById('carousel-left-btn');

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

rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft)