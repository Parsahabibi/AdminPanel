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


    Chart.defaults.font.family = "Yekan Bakh";


    let ctx = document.getElementById('myBarChart').getContext('2d');

    let myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['19', '20', '21', '22', '23', '24', '25'].map(convertToPersianNumber),
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


    let ctxOne = document.getElementById('myLineChart').getContext('2d');


    let myChart = new Chart(ctxOne, {
        type: 'line',
        data: {
            labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
            datasets: [
                {
                    label: 'مخارج',
                    data: [25, 25, 6, 28, 6, 24, 18],
                    borderColor: '#6AD2FF',
                    borderWidth: 4,
                    fill: false,
                    tension: 0.4
                },

                {
                    label: 'درآمد',
                    data: [25, 25, 6, 28, 6, 24, 18],
                    borderColor: '#4318FF',
                    borderWidth: 4,
                    fill: false,
                    tension: 0.4
                },]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            dir: 'rtl',
            plugins: {
                legend: {
                    display: false,
                    labels: { // with an "s"
                        font: {
                            family: "Yekan Bakh" // right here
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                    backgroundColor: function (context) {
                        const tooltipItem = context.tooltip.dataPoints[0];
                        if (context.chart.data.datasets[tooltipItem.datasetIndex].label === "مخارج") {
                            return '#6AD2FF';
                        } else {
                            return '#4318FF';
                        }
                    },
                    callbacks: {
                        label: function (tooltipItem) {
                            return tooltipItem.formattedValue + ' میلیون';
                        },
                        title: function () {
                            return [];
                        },
                    },
                    displayColors: false,
                    yAlign: 'bottom',
                    bodyFont: {
                        family: 'Yekan Bakh',
                        weight: 700,
                        color: 'black'
                    },
                    borderColor: 'black',
                    borderWidth: 0,
                    titleFont: {
                        family: 'Yekan Bakh'
                    }
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
                        fontFamily: 'Yekan Bakh'
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


    let ctxTwo = document.getElementById('myPieChart').getContext('2d');

    let dataValues = [63, 25, 12];  // مقادیری که می‌توانید تغییر دهید

    let myPieChart = new Chart(ctxTwo, {
        type: 'pie',
        data: {
            labels: ['فایل های شما', 'سیستم', 'سایر'],
            datasets: [{
                data: dataValues,
                backgroundColor: ['#4318FF', '#6AD2FF', '#EFF4FB'],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    rtl: true,
                    callbacks: {
                        label: function (tooltipItem) {
                            const persianValue = convertToPersianNumber(tooltipItem.formattedValue);
                            return  persianValue + ' درصد' + '                ';
                        },
                    },

                    displayColors: false,
                    titleFont: {
                        family: 'Yekan Bakh',
                        size: 14
                    },
                    bodyFont: {
                        family: 'Yekan Bakh',
                        size: 14
                    },

                }

            }
        }

    });


});
