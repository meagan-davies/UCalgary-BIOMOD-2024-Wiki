const members = [
    { 
        id: 1, 
        name: 'Meagan Davies', 
        role: 'Dry Lab Lead', 
        img: '/img/meagan.JPG', 
        blurb: 'I am passionate about interdisciplinary teamwork and research. Eager to build my leadership and technical skills, I thrive in collaborative environments, solving complex challenges at the intersection of biology, medicine, engineering, physics, and astronomy.', 
        program: 'Astrophysics & Biomedical Engineering', 
        year: '4', 
        attributions: 'Experimental Planning, Design, Modelling, Wiki, Video Development' },
    { 
        id: 2, name: 'Amber Quo', 
        role: 'Wet Lab Member', 
        img: '/img/amber.JPG', 
        blurb: 'I am inspired by the detailed processes that biomedical engineering unveil, specifically the ability to solve problems using biological systems. This project has given me an opportunity to utilise these skills and be a part of innovative research!',
        program: 'Biomedical Engineering w/ minor in Digital Engineering',
        year: '3',
        attributions: 'Experimental Planning, Protocol Development, Wiki Content, Wet Lab Experimentation, Wiki'
    },
    { 
        id: 3, 
        name: 'Jezrael Carpio', 
        role: 'Wet Lab Member', 
        img: '/img/jez.JPG', 
        blurb: 'I have a deep fascination for the intricate processes unveiled by multiple scientific disciplines. From photochemistry and quantum mechanics, to biology and medicine, there are artistic sides to science that fuels my curiosity and drives my passion for research.',
        program: 'Chemistry & Nanoscience',
        year: '4',
        attributions: 'Experimental Planning, Protocol Development, Wiki Content, Wet Lab Experimentation'
    },
    { 
        id: 4, 
        name: 'Stavan Patel', 
        role: 'Wet Lab Member', 
        img: '/img/stavan.JPG', 
        blurb: 'The biological sciences field has always been a passion of mine, from the complex, yet fascinating, mechanisms of the human body to the profound impact of various medicines and treatments on the body. This passion has fueled my curiosity and driven me to pursue research related to the complexities of life at the molecular and cellular levels.', 
        program: 'Biological Sciences (Genetics & Evolution)',
        year: '4',
        attributions: 'Experimental Planning, Protocol Development, Wiki Content, Wet Lab Experimentation'
    },
    { 
        id: 5, 
        name: 'Emma Klaffke', 
        role: 'Wet Lab Member', 
        img: '/img/emma.JPG', 
        blurb: 'The field of chemistry/chemical research has always been very interesting to me. The understanding of matter and chemical substances as they relate to real-world processes and solutions is a passion of mine, which I am very excited to pursue through research. ',
        program: 'Chemistry and Philosophy',
        year: '5',
        attributions: 'Experimental Planning, Protocol Development, Wiki Content, Wet Lab Experimentation'
    },
    { 
        id: 6, 
        name: 'Ziyad Syed', 
        role: 'Wet Lab Member', 
        img: '/img/ziyad.JPG', 
        blurb: 'The machinery that allows cells and microorganisms to grow, sustain themselves, and replicate are teeming with complex activities and mechanisms. Studying these systems is something I love to explore in the lab. Seeing how we can manipulate and change what they do.' ,
        program: 'Cellular, Molecular and Microbial Biology',
        year: '4',
        attributions: 'Experimental Planning, Protocol Development, Wiki Content, Wet Lab Experimentation'
    },
    { 
        id: 7, 
        name: 'Sana Wahab', 
        role: 'Wet Lab Lead', 
        img: '/img/sana.JPG', 
        blurb: 'The complexity on the molecular and nanoscale is simply fascinating. The fact that something so small when studied, manipulated, and used to problem solve has the potential to impact people on a grander scale (e.g., Chimeric Antigen Receptor T-cell Therapy to solve cancer) is what drives me to keep researching and growing as a scientist in the field of biotechnology.',
        program: 'Biological Sciences (Biotechnology Concentration)',
        year: '4',
        attributions: 'Experimental Planning, Protocol Development, Wiki Content, Wet Lab Experimentation'
    }
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
        document.getElementById('infoProgram').innerHTML = "<strong>Program: </strong>" +  member.program
        document.getElementById('infoYear').innerHTML = "<strong>Year: </strong>" +  member.year
        document.getElementById('infoA').innerHTML = "<strong>Attributions: </strong>" +  member.attributions
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