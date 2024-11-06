window.onscroll = function() {
    scrollFunction()
}

function scrollFunction() {
    const scrollBtn = document.getElementById("scrollToTopBtn")

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block"
    } else {
        scrollBtn.style.display = "none"
    }
}

document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})