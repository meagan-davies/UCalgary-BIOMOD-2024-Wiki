const timelineItems = [
    { week: 1, blurb: 'May 1-5' },
    { week: 2, blurb: 'May 6-12' },
    { week: 3, blurb: 'May 13-19' },
    { week: 4, blurb: 'May 20-26' },
    { week: 5, blurb: 'May 27 - June 2' },
    { week: 6, blurb: 'June 3-9' },
    { week: 7, blurb: 'June 10-16' },
    { week: 8, blurb: 'June 17-23' },
    { week: 9, blurb: 'June 24-30' },
    { week: 10, blurb: 'July 1-7' },
    { week: 11, blurb: 'July 8-14' },
    { week: 12, blurb: 'July 15-21' },
    { week: 13, blurb: 'July 22-28' },
    { week: 14, blurb: 'July 29 - August 4' },
    { week: 15, blurb: 'August 5-11' },
    { week: 16, blurb: 'August 12-18' },
    { week: 17, blurb: 'August 19-25' },
    { week: 18, blurb: 'August 26 - September 1' },
];
document.addEventListener("DOMContentLoaded", function(){

    const newsData = {
        week2: {
            date: 'May 8th, The Plague Outbreak',
            title: 'BREAKING BIOMOD LAB NEWS!!!',
            quote: ' "Who was patient zero..." ',
            sectionTitle: 'The Plague',
            description: 'Unfortunately, Amber, Stavan, AND Ziyad were brought down by a sickness and unable to be in the lab. Who might get infected next?',
            witnessComments: ' "Cough cough"',
            witness: '-Ziyad Syed 2k24'},

            week7: {
                date: 'June 13th, The Day of Tragic Incidents',
                title: 'BREAKING BIOMOD LAB NEWS!!!',
                quote: '"At least a day in the BIOMOD Group is never dull..."',
                sectionTitle1: 'The Centrifuge Incident',
                description1: 'As the PCR tubes were placed in the centrifuge, the tubes FLUNG out ',
                sectionTitle2: 'The Formaldehyde Gel Incident',
                description2: 'Members Sana and Jezrael were preparing to cast formaldehyde gel before the incident struck them. The agarose gel in the erlenmeyer flask has solidified! Thankfully, the members were able to overcome this obstacle and move on with casting a new solution of agarose mixture.',
                witnessComments: '"It happens to the best of us" -Ziyad Syed 2k24<br>"It was so unexpected" -Sana Wahab 2k24'
            },

            week10: {
                date: 'July 2nd, The Leak Incident...',
                title: 'BREAKING BIOMOD LAB NEWS!!!',
                quote: '“Is it just me, or does it smell like vomit in here…?”',
                sectionTitle: 'The Dark Room Incident',
                description: 'Gel imaging shouldn’t be so difficult, right? Well, that’s what the BIOMOD team thought too. On the day of July 2nd 2024, Ziyad Syed had just finished gel electrophoresis  and was opening the door to the dark room when his left foot gracefully touched suspicious yellow liquid. Like a normal person, Ziyad tried to spray the liquid with 70% ethanol and wipe with paper towels. Obviously, that did not work as well as he’d hoped 😂. Alas, maintenance arrived and announced that the suspicious yellow liquid was from a pipe leak. Mystery solved!<br><br>Thankfully, assistance came and were able to fix the leak, as well as keep the dark room dry and scentless. Well… not fully scentless as the ghost of that pungent smell haunts us to this day (August 8th 2024). That truly was an experience the BIOMOD team never wants to go through again.',
                witnessComments: '"Who pissed in the dark room?!" -Ziyad Syed 2k24<br>"Go Piss Girl :D" -Amber Quo 2k24'
            },

            week15: {
                date: 'August 6th, Inspector Gadget!',
                title: 'BREAKING BIOMOD LAB NEWS!!!',
                quote: '"Perchance Ziyad should wait a few business days to tell the Lab Technician”',
                sectionTitle1: 'The Inspector Incident',
                description1: 'We were framed! By our own team member… The Inspector asked the Lab Technician why there was a block of gel in the dark room and so the lab technician asked the BIOMOD Team if it was ours. One member replied, “It might have been ours.” This is FAKE NEWS!!! It was, in fact, not ours!',
                sectionTitle2: 'The p10 Pipette Incident',
                description2: 'The very same team member who framed us broke a p10 pipette… Sources say he’s trying to make us bankrupt.',
                witnessComments: '"Guess that\'s another $100 gone from our budget" -Stavan Patel 2k24<br>"The p10 pipette cost is coming out of his pocket!" -Jezrael Carpio 2k24',
            },

            week16: {
                date: 'August 13th, Cookie Monster on the Loose!!! Mysterious note unlocked',
                title: 'BREAKING BIOMOD LAB NEWS!!!',
                quote: '“This is MY!!! locker, the cookies are now mine! – thanks”',
                sectionTitle1: 'Cookie Soup Recipe',
                description1: '60 mL of Coffee<br>1-2 3 inch diameter cookies<br>Drop cookies in coffee and mix<br>Microwave for 17 seconds (optional)',
                sectionTitle2: 'Where\'d the cookies go?',
                description2: 'Sources say the cookies left in the locker have disappeared. Sounds like the mysterious cookie soupers strike again. A cookie collection grows (:',
                witnessComments: '"They were souped... By who? That... I can\'t confirm" -Jezrael Carpio 2k24<br>"I made cookie soup!" -Meagan Davies 2k24<br>"I think Sana\'s cookie multiplied" -Unknown',
            }
    };

    // Function to inject news table into Week 2 content
    function injectNewsTable(week) {
        const news = newsData[`week${week}`];
        const table = document.createElement('table');
        table.classList.add('news-table');

        const headerRow = document.createElement('tr');
        const headerCell = document.createElement('th');
        headerCell.classList.add('header');
        headerCell.innerHTML = `<span>🌍 ${news.title}</span>: ${news.date}<br><em>${news.quote}</em>`;
        headerRow.appendChild(headerCell);
        table.appendChild(headerRow);

        const contentRow = document.createElement('tr');
        const contentCell = document.createElement('td');
        contentCell.classList.add('content');

        if (week === 2) {
            contentCell.innerHTML = `
                <h2>${news.sectionTitle}</h2>
                <p>${news.description}</p>
                <p class="witness-comments">
                    <strong>Witness Comments</strong><br>
                    ${news.witnessComments}<br>
                    <span>${news.witness}</span>
                </p>
            `;
        } else if (week === 7) {
            contentCell.innerHTML = `
                <h2>${news.sectionTitle1}</h2>
                <p>${news.description1}</p>
                <h2>${news.sectionTitle2}</h2>
                <p>${news.description2}</p>
                <p class="witness-comments">
                    <strong>Witness Comments</strong><br>
                    ${news.witnessComments}
                </p>
            `;
        } else if (week === 10) {
            contentCell.innerHTML = `
                <h2>${news.sectionTitle}</h2>
                <p>${news.description}</p>
                <p class="witness-comments">
                    <strong>Witness Comments</strong><br>
                    ${news.witnessComments}<br>
                </p>
            `;
        } else if (week === 15) {
            contentCell.innerHTML = `
                <h2>${news.sectionTitle1}</h2>
                <p>${news.description1}</p>
                <h2>${news.sectionTitle2}</h2>
                <p>${news.description2}</p>
                <p class="witness-comments">
                    <strong>Witness Comments</strong><br>
                    ${news.witnessComments}<br>
                </p>
            `;
        } else if (week === 16) {
            contentCell.innerHTML = `
                <h2>${news.sectionTitle1}</h2>
                <p>${news.description1}</p>
                <h2>${news.sectionTitle2}</h2>
                <p>${news.description2}</p>
                <p class="witness-comments">
                    <strong>Witness Comments</strong><br>
                    ${news.witnessComments}<br>
                </p>
            `;
        }

        contentRow.appendChild(contentCell);
        table.appendChild(contentRow);

        const newsContainer = document.getElementById(`news-container-week${week}`);
        if (newsContainer.children.length === 0) {
            newsContainer.appendChild(table); // Avoid appending multiple times
        }
    }

    const week2Content = document.getElementById('content-week2');
    if (week2Content) {
        injectNewsTable(2);
    }
    const week7Content = document.getElementById('content-week7');
    if (week7Content) {
        injectNewsTable(7);
    }
    const week10Content = document.getElementById('content-week10');
    if (week10Content) {
        injectNewsTable(10);
    }
    const week15Content = document.getElementById('content-week15');
    if (week10Content) {
        injectNewsTable(15);
    }
    const week16Content = document.getElementById('content-week16');
    if (week10Content) {
        injectNewsTable(16);
    }
}); 

document.addEventListener("DOMContentLoaded", () => {
    const timelineScroll = document.querySelector('.timeline-scroll');
    let currentIndex = 0;

    // Function to create timeline items
    function createTimelineItems() {
        timelineItems.forEach((item, index) => {
            const timelineItem = document.createElement('div');
            timelineItem.classList.add('timeline-item');
            if (index === currentIndex) {
                timelineItem.classList.add('active-week');
            }

            timelineItem.innerHTML = `
                <div class="timeline-week">Week ${item.week}</div>
                <p class="timeline-blurb"> ${item.blurb} </p>
            `;

            timelineItem.addEventListener('click', () => {
                scrollToWeek(index);
            });

            timelineScroll.appendChild(timelineItem);
        });
    }

    // Function to update the active week
    function updateActiveWeek(index) {
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, i) => {
            item.classList.remove('active-week');
            const blurb = item.querySelector('.timeline-blurb')
            blurb.style.opacity = '0'
        });
        timelineItems[index].classList.add('active-week');
        const activeBlurb = timelineItems[index].querySelector('.timeline-blurb');
        activeBlurb.style.opacity= '1'
    }

    function updateActiveContent(index) {
        const weekContentContainers = document.querySelectorAll('.week-content');
        weekContentContainers.forEach((item, _) => {
            item.classList.remove('active-content')
        })
        weekContentContainers[index].classList.add('active-content')
    }

    // Function to scroll to a specific week
    function scrollToWeek(index) {
        if (index < 0 || index >= timelineItems.length) return;
        const containerWidth = window.innerWidth;
        const itemWidth = timelineScroll.children[index].offsetWidth;
        const activeSpacing = 390;
        const offset = (containerWidth / 2) - (itemWidth / 2) - activeSpacing;
        const scrollPosition = -index * (itemWidth + 20) + offset;

        timelineScroll.style.transform = `translateX(${scrollPosition}px)`;
        updateActiveWeek(index);
        updateActiveContent(index)
        currentIndex = index;
    }

    // Handle horizontal mouse wheel scrolling
    timelineScroll.addEventListener('wheel', (event) => {
        event.preventDefault(); // Prevent vertical scroll
        if (event.deltaY > 0) {
            scrollToWeek(currentIndex + 1);
        } else {
            scrollToWeek(currentIndex - 1);
        }
    });


    // arrow keys can update as well
    timelineScroll.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            scrollToWeek(currentIndex + 1)
        } else if (event.key === 'ArrowRight') {
            scrollToWeek(currentIndex - 1)
        }
    });
    

    // Initialize timeline items and active week
    createTimelineItems();
    scrollToWeek(currentIndex);
});
