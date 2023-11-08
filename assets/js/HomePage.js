
const mainColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color').trim();
const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim();
const oneColor = getComputedStyle(document.documentElement).getPropertyValue('--one-color').trim();
const twoColor = getComputedStyle(document.documentElement).getPropertyValue('--two-color').trim();
const threeColor = getComputedStyle(document.documentElement).getPropertyValue('--three-color').trim();
const fourColor = getComputedStyle(document.documentElement).getPropertyValue('--four-color').trim();
const fiveColor = getComputedStyle(document.documentElement).getPropertyValue('--five-color').trim();
const sixColor = getComputedStyle(document.documentElement).getPropertyValue('--six-color').trim();
const sevenColor = getComputedStyle(document.documentElement).getPropertyValue('--seven-color').trim();
const eightColor = getComputedStyle(document.documentElement).getPropertyValue('--eight-color').trim();


document.addEventListener("DOMContentLoaded", function () {


    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    for (const checkbox of checkboxes) {
        checkbox.setAttribute("background-color", "red");
    }



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
                backgroundColor:fourColor
            }, {
                label: 'بخش 2',
                data: [3, 6, 9, 12, 15, 18, 21],
                backgroundColor:fiveColor
            }, {
                label: 'بخش 3',
                data: [2, 4, 6, 8, 10, 12, 14],
                backgroundColor: sixColor
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
                    borderColor: fiveColor,
                    borderWidth: 4,
                    fill: false,
                    tension: 0.4
                },

                {
                    label: 'درآمد',
                    data: [25, 25, 6, 28, 6, 24, 18],
                    borderColor: mainColor,
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
                            return fiveColor;
                        } else {
                            return mainColor;
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
                backgroundColor: [mainColor, fiveColor, sixColor],
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
                            return persianValue + ' درصد' + '                ';
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


    let data = [
        {number: 0, value: 50},
        {number: 4, value: 100},
        {number: 8, value: 60},
        {number: 12, value: 80},
        {number: 14, value: 50},
        {number: 16, value: 70},
        {number: 18, value: 30}
    ];

    function toPersianNum(englishNumber) {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return englishNumber.toString().split('').map(d => persianDigits[parseInt(d, 10)]).join('');
    }

    function createBarCharts(dataArray) {
        const container = document.querySelector('.BarChartSingle');

        dataArray.forEach((item) => {

            const barChartDiv = document.createElement('div');
            barChartDiv.classList.add('BarCharts');

            const barDiv = document.createElement('div');
            barDiv.classList.add('Bar');
            barDiv.style.borderRadius = '60px 60px 0 0'
            barDiv.style.height = `${item.value / 1}px`;  // Setting the height based on value
            barChartDiv.appendChild(barDiv);

            const desktopLabelP = document.createElement('p');
            desktopLabelP.classList.add('DesktopLabel', 'medium');
            desktopLabelP.textContent = toPersianNum(item.number < 10 ? '0' + item.number : item.number);
            barChartDiv.appendChild(desktopLabelP);

            const mobileLabelSpan = document.createElement('span');
            mobileLabelSpan.classList.add('MobileLabel', 'small');
            mobileLabelSpan.textContent = toPersianNum(item.number < 10 ? '0' + item.number : item.number);
            barChartDiv.appendChild(mobileLabelSpan);

            container.appendChild(barChartDiv);
        });
    }

    createBarCharts(data);


    const dataTask = [
        {id: 1, text: "لورم ایپسوم "},
        {id: 2, text: "لورم ایپسوم "},
        {id: 3, text: "لورم ایپسوم "},
        {id: 4, text: "لورم ایپسوم "},
        {id: 5, text: "لورم ایپسوم "},
        {id: 6, text: "لورم ایپسوم "},
    ];

    const mainCheckboxTask = document.querySelector('.CheckTask input[type="checkbox"]');
    const allTaskContainer = document.querySelector('.AllTask');

    dataTask.forEach((item) => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('Task');

        const titleTaskDiv = document.createElement('div');
        titleTaskDiv.classList.add('TitleTask');

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = `input-${item.id}`;

        const label = document.createElement('label');
        label.setAttribute('for', `input-${item.id}`);
        label.innerText = item.text;

        input.addEventListener('change', function () {
            if (input.checked) {
                label.style.color = primaryColor;
                label.style.fontWeight = 'bold';
            } else {
                label.style.color = '';
                label.style.fontWeight = '';
            }

            const allChecked = [...allTaskContainer.querySelectorAll('.TitleTask input[type="checkbox"]')].every(inp => inp.checked);
            mainCheckboxTask.checked = allChecked;

        });

        const dragDiv = document.createElement('div');
        dragDiv.classList.add('drag');

        const img = document.createElement('img');
        img.src = '../assets/image/dragIndicator.svg';
        img.alt = 'Drag Indicator';

        titleTaskDiv.appendChild(input);
        titleTaskDiv.appendChild(label);
        dragDiv.appendChild(img);

        taskDiv.appendChild(titleTaskDiv);
        taskDiv.appendChild(dragDiv);

        allTaskContainer.appendChild(taskDiv);
    });

    const taskInputs = allTaskContainer.querySelectorAll('.TitleTask input[type="checkbox"]');
    const taskLabels = allTaskContainer.querySelectorAll('.TitleTask label');

    mainCheckboxTask.addEventListener('change', function () {
        taskInputs.forEach((input, index) => {
            input.checked = mainCheckboxTask.checked;
            if (input.checked) {
                taskLabels[index].style.color = primaryColor;
                taskLabels[index].style.fontWeight = '700';
            } else {
                taskLabels[index].style.color = '';
                taskLabels[index].style.fontWeight = '';
            }
        });
    });


    let optionDivs = document.querySelectorAll('.Option');

    optionDivs.forEach(optionDiv => {
        let dropdownChart = optionDiv.querySelector('.DropDownChart');
        let img = optionDiv.querySelector('img');

        img.addEventListener('click', function (event) {
            event.stopPropagation();

            if (getComputedStyle(dropdownChart).opacity == "0") {
                dropdownChart.style.opacity = '1';
                dropdownChart.style.maxHeight = '500px';
                dropdownChart.style.visibility = 'visible';
            } else {
                dropdownChart.style.opacity = '0';
                dropdownChart.style.maxHeight = '0';
                setTimeout(() => {
                    dropdownChart.style.visibility = 'hidden';
                }, 200);
            }
        });
    });

    document.addEventListener('click', function () {
        optionDivs.forEach(optionDiv => {
            let dropdownChart = optionDiv.querySelector('.DropDownChart');
            dropdownChart.style.opacity = '0';
            dropdownChart.style.maxHeight = '0';
            setTimeout(() => {
                dropdownChart.style.visibility = 'hidden';
            }, 200);
        });
    });


    const mainCheckbox = document.querySelector('.CheckTask input[type="checkbox"]');


    const taskCheckboxes = document.querySelectorAll('.TitleTask input[type="checkbox"]');


    mainCheckbox.addEventListener('change', function () {
        taskCheckboxes.forEach(checkbox => {
            checkbox.checked = mainCheckbox.checked;
        });
    });





    let dataTable = [
        {name: "لورم ایپسوم1", progress: "15%", count: "3.456", date: "25.فرو.1402"},
        {name: "لورم ایپسوم2", progress: "25%", count: "4.789", date: "26.فرو.1402"},
        {name: "لورم ایپسوم2", progress: "25%", count: "4.789", date: "26.فرو.1402"},
        {name: "لورم ایپسوم2", progress: "25%", count: "4.789", date: "26.فرو.1402"},
        {name: "لورم ایپسوم2", progress: "25%", count: "4.789", date: "26.فرو.1402"},
        {name: "لورم ایپسوم2", progress: "25%", count: "4.789", date: "26.فرو.1402"},
        {name: "لورم ایپسوم2", progress: "25%", count: "4.789", date: "26.فرو.1402"},
        {name: "لورم ایپسوم2", progress: "25%", count: "4.789", date: "26.فرو.1402"},
        {name: "لورم ایپسوم2", progress: "25%", count: "4.789", date: "26.فرو.1402"},
    ];


    let tbody = document.querySelector('tbody');

    dataTable.forEach((item, index) => {
        let tr = document.createElement('tr');

        let tdCheckBox = document.createElement('td');
        tdCheckBox.className = 'CheckBox';

        let input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('id', 'Check' + index);

        tdCheckBox.appendChild(input);

        let label = document.createElement('label');
        label.setAttribute('for', 'Check' + index);
        label.textContent = item.name;
        tdCheckBox.appendChild(label);


        let tdProgress = document.createElement('td');
        tdProgress.textContent = item.progress;

        let tdCount = document.createElement('td');
        tdCount.textContent = item.count;

        let tdDate = document.createElement('td');
        tdDate.textContent = item.date;

        tr.appendChild(tdCheckBox);
        tr.appendChild(tdProgress);
        tr.appendChild(tdCount);
        tr.appendChild(tdDate);

        tbody.appendChild(tr);

        // input.addEventListener('change', function() {
        //     // Check if checkbox is checked
        //     if (this.checked) {
        //         // Change checkbox color to red
        //         this.style.backgroundColor = 'red';
        //     } else {
        //         // Change checkbox color to blue
        //         this.style.backgroundColor = 'blue';
        //     }
        // });

    });



    let dataTableComplex = [
        {
            title: "لورم ایپسوم",
            description: "لورم ایپسوم",
            statusImage: "../assets/image/cancel.svg",
            statusText: "غیرفعال",
            statusSubText: "غیرفعال",
            dateText: "24.فرو.1402",
            dateSubText: "24.فرو.1402",
            progressWidth: "100%"
        },
        {
            title: "لورم ایپسوم",
            description: "لورم ایپسوم",
            statusImage: "../assets/image/check_circle.svg",
            statusText: "تایید شده",
            statusSubText: "تایید شده",
            dateText: "24.فرو.1402",
            dateSubText: "24.فرو.1402",
            progressWidth: "20%"
        },
        {
            title: "لورم ایپسوم",
            description: "لورم ایپسوم",
            statusImage: "../assets/image/error.svg",
            statusText: "خطا",
            statusSubText: "خطا",
            dateText: "24.فرو.1402",
            dateSubText: "24.فرو.1402",
            progressWidth: "50%"
        },
        {
            title: "لورم ایپسوم",
            description: "لورم ایپسوم",
            statusImage: "../assets/image/error.svg",
            statusText: "خطا",
            statusSubText: "خطا",
            dateText: "24.فرو.1402",
            dateSubText: "24.فرو.1402",
            progressWidth: "50%"
        },
        {
            title: "لورم ایپسوم",
            description: "لورم ایپسوم",
            statusImage: "../assets/image/error.svg",
            statusText: "خطا",
            statusSubText: "خطا",
            dateText: "24.فرو.1402",
            dateSubText: "24.فرو.1402",
            progressWidth: "50%"
        },
        {
            title: "لورم ایپسوم",
            description: "لورم ایپسوم",
            statusImage: "../assets/image/error.svg",
            statusText: "خطا",
            statusSubText: "خطا",
            dateText: "24.فرو.1402",
            dateSubText: "24.فرو.1402",
            progressWidth: "50%"
        },
    ];



    let tbodyComplex = document.querySelector('.tbody');

    dataTableComplex.forEach(item => {
        let tr = document.createElement('tr');
        tr.className = "rowTable";

        let tdTitle = document.createElement('td');
        tdTitle.className = "titleTable";
        let h6Title = document.createElement('h6');
        h6Title.textContent = item.title;
        let pTitle = document.createElement('p');
        pTitle.textContent = item.description;
        tdTitle.appendChild(h6Title);
        tdTitle.appendChild(pTitle);

        let tdStatus = document.createElement('td');
        tdStatus.className = "status";
        let imgStatus = document.createElement('img');
        imgStatus.src = item.statusImage;
        imgStatus.alt = "";
        let h6Status = document.createElement('h6');
        h6Status.className = "medium";
        h6Status.textContent = item.statusText;
        let pStatus = document.createElement('p');
        pStatus.className = "medium";
        pStatus.textContent = item.statusSubText;
        tdStatus.appendChild(imgStatus);
        tdStatus.appendChild(h6Status);
        tdStatus.appendChild(pStatus);

        let tdDate = document.createElement('td');
        tdDate.className = "DateTable";
        let h6Date = document.createElement('h6');
        h6Date.className = "medium";
        h6Date.textContent = item.dateText;
        let pDate = document.createElement('p');
        pDate.className = "medium";
        pDate.textContent = item.dateSubText;
        tdDate.appendChild(h6Date);
        tdDate.appendChild(pDate);

        let tdProgress = document.createElement('td');
        tdProgress.className = "ProgressTable";
        let divBackground = document.createElement('div');
        divBackground.className = "background";
        let divProgress = document.createElement('div');
        divProgress.className = "progress";
        divProgress.style.width = item.progressWidth;
        divBackground.appendChild(divProgress);
        tdProgress.appendChild(divBackground);

        tr.appendChild(tdTitle);
        tr.appendChild(tdStatus);
        tr.appendChild(tdDate);
        tr.appendChild(tdProgress);

        tbodyComplex.appendChild(tr);
    });



});
