const timelineItems = [
    { week: 1, blurb: 'Week 1 blurb' },
    { week: 2, blurb: 'Week 2 blurb' },
    { week: 3, blurb: 'Week 3 blurb' },
    { week: 4, blurb: 'Week 4 blurb' },
    { week: 5, blurb: 'Week 5 blurb' },
    { week: 6, blurb: 'Week 6 blurb' },
    { week: 7, blurb: 'Week 7 blurb' },
    { week: 8, blurb: 'Week 8 blurb' },
    { week: 9, blurb: 'Week 9 blurb' },
    { week: 10, blurb: 'Week 10 blurb' },
    { week: 11, blurb: 'Week 11 blurb' },
    { week: 12, blurb: 'Week 12 blurb' },
    { week: 13, blurb: 'Week 13 blurb' },
    { week: 14, blurb: 'Week 14 blurb' },
    { week: 15, blurb: 'Week 15 blurb' },
    { week: 16, blurb: 'Week 16 blurb' },
    { week: 17, blurb: 'Week 17 blurb' },
    { week: 18, blurb: 'Week 18 blurb' },
];

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

    // Initialize timeline items and active week
    createTimelineItems();
    scrollToWeek(currentIndex);
});
