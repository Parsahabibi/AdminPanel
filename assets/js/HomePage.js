


document.addEventListener("DOMContentLoaded", function () {
    let hamburgerMenu = document.querySelector('.hamburgerMenu');
    let dashboard = document.querySelector('.Dashboard');
    let overlay = document.querySelector('.overlay');

    hamburgerMenu.addEventListener('click', function (event) {
        if (window.innerWidth <= 900) {
            if (dashboard.classList.contains('visible')) {
                dashboard.style.position = 'absolute';
                dashboard.style.zIndex = '10';
                dashboard.classList.remove('visible');
                overlay.classList.remove('visible');
            } else {
                dashboard.classList.add('visible');
                overlay.classList.add('visible');
            }
        }
        event.stopPropagation();
    });

    document.addEventListener('click', function (event) {
        if (window.innerWidth <= 900) {
            if (!dashboard.contains(event.target) && !hamburgerMenu.contains(event.target)) {
                dashboard.classList.remove('visible');
                overlay.classList.remove('visible');
            }
        }
    });

    dashboard.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});
