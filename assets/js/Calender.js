


document.addEventListener("DOMContentLoaded", function() {

    console.log(window.innerWidth);
    const yearSelector = document.getElementById('yearSelector');
    const monthSelector = document.getElementById('monthSelector');
    const monthsContainer = document.getElementById('monthsContainer');

    const monthNames = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
    const monthDays = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
    const weekDays = ['شنبه', 'یک‌شنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه'];

    function getFirstDayOfMonth(year, monthIndex) {
        let totalDays = 0;

        for (let y = 1402; y < year; y++) {
            totalDays += isLeapYear(y) ? 366 : 365;
        }

        for (let m = 0; m < monthIndex; m++) {
            totalDays += monthDays[m];
        }

        return (3 + totalDays) % 7;
    }

    function isLeapYear(year) {
        return year === 1403 || year === 1407 || year === 1411;
    }


    function renderMonthDays(year, monthIndex) {
        monthsContainer.innerHTML = '';

        if (isLeapYear(year) && monthIndex === 11) {
            monthDays[11] = 30;
        } else {
            monthDays[11] = 29;
        }

        for (let w = 0; w < 7; w++) {
            const weekDayDiv = document.createElement('div');
            weekDayDiv.className = 'weekday-container';

            const weekDayName = document.createElement('p');
            weekDayName.innerText = weekDays[w];
            weekDayDiv.appendChild(weekDayName);

            const daysDiv = document.createElement('div');
            daysDiv.className = 'month-days';

            let currentDayOfWeek = getFirstDayOfMonth(year, monthIndex);

            if (w < currentDayOfWeek) {
                daysDiv.classList.add('first-day-offset');
            }

            for (let d = 1; d <= monthDays[monthIndex]; d++) {
                if (currentDayOfWeek === w) {
                    const dayDiv = document.createElement('div');
                    dayDiv.className = 'day';
                    if (currentDayOfWeek === 6 || (monthIndex === 0 && (d === 1 || d === 2 || d === 3 || d === 4 || d === 12 || d === 13))) {
                        dayDiv.classList.add('day-special');
                    }

                    if((monthIndex === 0 && (d === 22 || d === 24 ))){
                        dayDiv.classList.add('daySelected');
                    }

                    dayDiv.innerText = d.toString();
                    daysDiv.appendChild(dayDiv);
                }
                currentDayOfWeek = (currentDayOfWeek + 1) % 7;
            }

            weekDayDiv.appendChild(daysDiv);
            monthsContainer.appendChild(weekDayDiv);
        }
    }


    function updateCalendar() {
        const selectedYear = parseInt(yearSelector.value, 10);
        const selectedMonth = parseInt(monthSelector.value, 10);

        if (isNaN(selectedYear) || isNaN(selectedMonth)) {
            return;  // If the selected values are invalid, we exit the function.
        }

        renderMonthDays(selectedYear, selectedMonth);
    }

    yearSelector.addEventListener('change', updateCalendar);
    monthSelector.addEventListener('change', updateCalendar);

// Add year options to the year selection menu
    for (let i = 1402; i <= 1411; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.innerText = i;
        yearSelector.appendChild(option);
    }

// Display the days of the first month by default when loading the page
    updateCalendar();
});

