const members = [
    { id: 1, name: 'Amber Quo', role: 'role', img: '/img/temp.jpg', blurb: 'this is a blurb' },
    { id: 2, name: 'Emma Klaffke', role: 'role', img: '/img/temp.jpg', blurb: 'this is a blurb' },
    { id: 3, name: 'Ziyad Ali Syed', role: 'role', img: '/img/temp.jpg', blurb: 'this is a blurb' },
    { id: 4, name: 'Sana Wahab', role: 'role', img: '/img/temp.jpg', blurb: 'this is a blurb' },
    { id: 5, name: 'Meagan Davies', role: 'role', img: '/img/temp.jpg', blurb: 'this is a blurb' },
    { id: 6, name: 'Stavan Patel', role: 'role', img: '/img/temp.jpg', blurb: 'this is a blurb' },
    { id: 7, name: 'Jezrael Carpio', role: 'role', img: '/img/temp.jpg', blurb: 'this is a blurb' }
]

// TODO: add advisors (or just get #)
const advisors = [
    {}
]

function generateCards() {
    const cardsGrid = document.getElementById('cardsGrid')
    members.forEach(member => {
        const card = document.createElement('div')
        card.className = 'card'
        card.style.backgroundImage = `url('${member.img}')`

        card.innerHTML = `
            <div class="card-info">
                <h3>${member.name}</h3>
                <p>${member.role}</p>
                <button class="info-btn" onclick="openInfo(${member.id})">
                    <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2 4v16.002c0 .385.22.735.567.902.346.166.758.119 1.058-.121l4.725-3.781h12.65c.552 0 1-.448 1-1v-12.002c0-.552-.448-1-1-1h-18c-.552 0-1 .448-1 1zm18.5 11.502h-12.677l-4.323 3.46v-14.462h17zm-8.502-6.5c.414 0 .75.336.75.75v3.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-3.5c0-.414.336-.75.75-.75zm.002-3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" fill-rule="nonzero"/></svg>
                </button>
            </div>
        `
        cardsGrid.appendChild(card)
    })
}

document.addEventListener('DOMContentLoaded', generateCards)

// open second screen
function openInfo(memberId) {
    const member = members.find(m => m.id === memberId)
    if (member) {
        const secondScreen = document.getElementById('secondScreen')
        secondScreen.style.display = 'flex'

        document.getElementById('infoImage').src = member.img
        document.getElementById('infoName').innerText = member.name
        document.getElementById('infoRole').innerText = member.role
        document.getElementById('infoBlurb').innerText = member.blurb
    }
}

// close second screen info
function closeInfo() {
    const secondScreen = document.getElementById('secondScreen')
    secondScreen.style.display = 'none'
}

// close secondscreen if user clicks outside of it
window.onclick = function(event) {
    const secondScreen = document.getElementById('secondScreen')
    const secondContent = document.querySelector('.second-content')
    if (event.target === secondScreen && !secondContent.contains(event.target)) {
        closeInfo();
    }
}