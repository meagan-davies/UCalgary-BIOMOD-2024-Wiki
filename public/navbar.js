document.addEventListener('DOMContentLoaded', function () {
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');

    navbarToggle.addEventListener('click', function () {
        navbarMenu.classList.toggle('active');
    });
});
