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

const tocContainer = document.querySelector('.toc-container-e');
const header = document.querySelector('.experiments-diagram');

function adjustTocPosition() {
    const headerBottom = header.getBoundingClientRect().bottom;
    if (headerBottom <= 0) {
        tocContainer.classList.add('fixed-toc');
    } else {
        tocContainer.classList.remove('fixed-toc');
    }
}

window.addEventListener('scroll', adjustTocPosition);


// Get references to contents and TOC containers
const contentsContainer = document.querySelector('.contents-e');

// Sync TOC scroll position with content scroll position
function syncTocScroll() {
    const contentsRect = contentsContainer.getBoundingClientRect();
    const tocRect = tocContainer.getBoundingClientRect();

    // Get the visible center of `.contents-e`
    const contentScrollRatio = (window.scrollY - contentsContainer.offsetTop) / contentsContainer.scrollHeight;

    // Scroll `.toc-container-e` proportionally
    tocContainer.scrollTop = contentScrollRatio * (tocContainer.scrollHeight - tocContainer.clientHeight);
}

// Attach scroll listener to window
window.addEventListener('scroll', syncTocScroll);
