function toggleSidebar() {
    var tocContainer = document.querySelector('.toc-container');
    tocContainer.classList.toggle('show');
}

window.onload = function() {
    var toc = document.querySelector('.toc');
    var tocPath = document.querySelector('.toc-marker path');
    var tocItems;

    var TOP_MARGIN = 0.1,
        BOTTOM_MARGIN = 0.2;

    var pathLength;

    var lastPathStart, lastPathEnd;

    window.addEventListener('resize', drawPath, false);
    window.addEventListener('scroll', sync, false);

    drawPath();

    function drawPath() {
        tocItems = [].slice.call(toc.querySelectorAll('li'));

        // cache element ref and measurements
        tocItems = tocItems.map(function(item) {
            var anchor = item.querySelector('a');
            var target = document.getElementById(anchor.getAttribute('href').slice(1));

            return {
                listItem: item,
                anchor: anchor,
                target: target
            };
        });

        // remove missing targets
        tocItems = tocItems.filter(function(item) {
            return !!item.target;
        });

        var path = [];
        var pathIndent;

        tocItems.forEach(function(item, i) {
            var x = item.anchor.offsetLeft - 5,
                y = item.anchor.offsetTop,
                height = item.anchor.offsetHeight;

            if(i===0) {
                // move to x, y. line to x, y + height
                path.push('M', x, y, 'L', x, y + height);
                item.pathStart = 0;
            }
            else {
                // draw extra line if there's an indent
                if(pathIndent !== x) path.push('L', pathIndent, y);

                path.push('L', x, y);

                // set current path for correct measurement, path data attribute
                tocPath.setAttribute('d', path.join(' '));
                item.pathStart = tocPath.getTotalLength() || 0;

                path.push('L', x, y + height);
            }

            pathIndent = x;

            tocPath.setAttribute('d', path.join(' '));
            item.pathEnd = tocPath.getTotalLength();
        });

        pathLength = tocPath.getTotalLength();

        sync();
    }

    function sync() {
        var windowHeight = window.innerHeight;
        
        var pathStart = pathLength,
            pathEnd = 0;

        var visibleItems = 0;

        tocItems.forEach(function(item) {
            var targetBounds = item.target.getBoundingClientRect();

            if(targetBounds.bottom > windowHeight * TOP_MARGIN && targetBounds.top < windowHeight * (1 - BOTTOM_MARGIN)) {
                pathStart = Math.min(item.pathStart, pathStart);
                pathEnd = Math.max(item.pathEnd, pathEnd);

                visibleItems += 1;

                item.listItem.classList.add('visible');

            } else {
                item.listItem.classList.remove('visible');
            }

        });

        // specify visible path or hide if no visible items
        if(visibleItems > 0 && pathStart < pathEnd) {
            if(pathStart !== lastPathStart || pathEnd !== lastPathEnd) {
                tocPath.setAttribute('stroke-dashoffset', '1');
                tocPath.setAttribute('stroke-dasharray', `1, ${pathStart},${pathEnd - pathStart}, ${pathLength}`);
                tocPath.setAttribute('opacity', 1);
            }
        } else {
            tocPath.setAttribute('opacity', 0);
        }

        lastPathStart = pathStart;
        lastPathEnd = pathEnd;
    }

};


// Query all sections and TOC links
const sections = document.querySelectorAll('.section');
const tocLinks = document.querySelectorAll('.toc a');
const tocContainer = document.querySelector('.toc-container');

// Helper function to find the corresponding TOC link
function getTocLinkByHref(href) {
    return document.querySelector(`.toc a[href="${href}"]`);
}

// Intersection Observer to highlight and center the active TOC item
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Find the corresponding TOC link
                const href = `#${entry.target.id}`;
                const activeLink = getTocLinkByHref(href);

                // Remove active class from all links, then add to the active one
                tocLinks.forEach((link) => link.classList.remove('active'));
                if (activeLink) activeLink.classList.add('active');

                // Center the active TOC item within the TOC container
                if (activeLink) {
                    const linkPosition = activeLink.offsetTop;
                    const tocContainerHeight = tocContainer.clientHeight;
                    const linkHeight = activeLink.offsetHeight;
                    
                    // Scroll to center the active link in the TOC container
                    tocContainer.scrollTop = linkPosition - tocContainerHeight / 2 + linkHeight / 2;
                }
            }
        });
    },
    {
        rootMargin: '0px 0px -50% 0px', // Activate when the section is halfway in view
        threshold: 0.5,
    }
);

// Observe each section in the main content
sections.forEach((section) => observer.observe(section));

const header = document.querySelector('.ethics-header');

// Adjust the TOC position when header scrolls out of view
function adjustTocPosition() {
    const headerBottom = header.getBoundingClientRect().bottom;
    if (headerBottom <= 0) {
        tocContainer.classList.add('fixed-toc');
    } else {
        tocContainer.classList.remove('fixed-toc');
    }
}

// Scroll event to handle TOC position adjustment
window.addEventListener('scroll', adjustTocPosition);