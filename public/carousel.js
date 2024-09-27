// document.addEventListener("DOMContentLoaded", function() {
//     let carousel = document.querySelector(".carousel");
//     let items = carousel.querySelectorAll(".item");
//     let dotsContainer = document.querySelector('.carousel-dots');

//     // create dots
//     items.forEach((_, index) => {
//         let dot = document.createElement("span");
//         dot.classList.add('dot');
//         if (index === 0) dot.classList.add("active");
//         dot.dataset.index = index;
//         dotsContainer.appendChild(dot)
//     })

//     let dots = document.querySelectorAll('.dot');

//     // show specific item
//     function showItem(index) {
//         items.forEach((item, idx) => {
//             item.classList.remove('active')
//             dots[idx].classList.remove('active')
//             if (idx === index) {
//                 item.classList.add('active')
//                 dots[idx].classList.add('active')
//             }
//         })
//     }

//     document.querySelector('.prev').addEventListener('click', () => {
//         let index = [...items].findIndex((item) =>
//             item.classList.contains('active')
//         )
//         showItem((index - 1 + items.length) % items.length)
//     })

//     document.querySelector('.next').addEventListener('click', () => {
//         let index = [...items].findIndex((item) =>
//             item.classList.contains('active')
//         )
//         showItem((index + 1) % items.length)
//     })


//     dots.forEach((dot) => {
//         dot.addEventListener('click', () => {
//             let index = parseInt(dot.dataset.index);
//             showItem(index)
//         })
//     })
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