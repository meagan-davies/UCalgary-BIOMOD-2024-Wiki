document.addEventListener("DOMContentLoaded", function () {
    const tocLinks = document.querySelectorAll(".toc ul li a");
    const sections = Array.from(tocLinks).map(link =>
        document.querySelector(link.getAttribute("href"))
    );
    const markerPath = document.querySelector(".toc-marker path");

    window.addEventListener("scroll", function () {
        let currentIndex = sections.findIndex(section =>
            section.getBoundingClientRect().top <= 50
        );

        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex >= sections.length) currentIndex = sections.length - 1;

        tocLinks.forEach(link => link.parentElement.classList.remove("active"));
        tocLinks[currentIndex].parentElement.classList.add("active");

        // Set SVG path animation for each active section
        const dashOffset = 300 * currentIndex; // Adjust this for each li position
        markerPath.style.strokeDasharray = `${dashOffset}, 1500`;
    });
});
