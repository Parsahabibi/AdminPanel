


document.addEventListener("DOMContentLoaded", function () {


    function convertToPersianNumber(input) {
        const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
        return input.replace(/\d/g, d => persianDigits[d]);
    }

    const textElements = document.querySelectorAll('h1, h4, h5, h6 , p , span');
    textElements.forEach(element => {
        element.textContent = convertToPersianNumber(element.textContent);
    });


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


    let ctx = document.getElementById('myBarChart').getContext('2d');

    let myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['19', '20', '21', '22', '23', '24', '25'],
            datasets: [{
                label: 'بخش 1',
                data: [5, 10, 15, 20, 25, 30, 35],
                backgroundColor: '#775FFC'
            }, {
                label: 'بخش 2',
                data: [3, 6, 9, 12, 15, 18, 21],
                backgroundColor: '#6AD2FF'
            }, {
                label: 'بخش 3',
                data: [2, 4, 6, 8, 10, 12, 14],
                backgroundColor: '#EFF4FB'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    stacked: true,
                    gridLines: {
                        drawBorder: false,
                        display: false,
                        drawOnChartArea: false
                    },
                    grid: {
                        display: false
                    },
                    ticks: {
                        display: false,
                        fontSize: 14,
                    }
                },
                x: {
                    stacked: true,
                    barThickness: 17,
                    barPercentage: 0,
                    gridLines: {
                        drawBorder: false,
                        display: false
                    },
                    grid: {
                        display: false
                    },

                },

            }
        }

    });


});
