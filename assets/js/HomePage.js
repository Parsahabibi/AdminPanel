// document.addEventListener("DOMContentLoaded", function() {
//     let hamburgerMenu = document.querySelector('.hamburgerMenu');
//     let dashboard = document.querySelector('.Dashboard');
//
//     hamburgerMenu.addEventListener('click', function(event) {
//         if (dashboard.style.display === 'none' || dashboard.style.display === '') {
//             dashboard.style.display = 'block';
//             dashboard.style.position = 'absolute'
//             dashboard.style.zIndex ='10';
//         } else {
//             dashboard.style.display = 'none';
//         }
//         event.stopPropagation();
//     });
//     document.addEventListener('click', function(event) {
//         if (!dashboard.contains(event.target) && !hamburgerMenu.contains(event.target)) {
//             dashboard.style.display = 'none';
//         }
//     });
//
//     dashboard.addEventListener('click', function(event) {
//         event.stopPropagation();
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    let hamburgerMenu = document.querySelector('.hamburgerMenu');
    let dashboard = document.querySelector('.Dashboard');

    hamburgerMenu.addEventListener('click', function (event) {
        if (window.innerWidth <= 900) {
            if (dashboard.classList.contains('visible')) {
                dashboard.style.position = 'absolute';
                dashboard.style.zIndex = '10';
                dashboard.classList.remove('visible');
            } else {
                dashboard.classList.add('visible');
            }
        }
        event.stopPropagation();
    });

    document.addEventListener('click', function (event) {
        if (window.innerWidth <= 900) {
            if (!dashboard.contains(event.target) && !hamburgerMenu.contains(event.target)) {
                dashboard.classList.remove('visible');
            }
        }
    });

    dashboard.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});
