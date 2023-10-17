
    const yearSelector = document.getElementById('yearSelector');
    const monthsContainer = document.getElementById('monthsContainer');

    const monthNames = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
    const monthDays = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
    const weekDays = ['شنبه', 'یک‌شنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه'];

    // ایجاد انتخابگر سال
    for (let i = 1402; i <= 1411; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    yearSelector.appendChild(option);
}

    yearSelector.addEventListener('change', function() {
    renderMonths(this.value);
});

    function getFirstDayOfYear(year) {
    let totalDays = 0;

    // محاسبه کل روزها از ابتدای سال 1402 تا ابتدای سال مورد نظر
    for (let y = 1402; y < year; y++) {
    totalDays += isLeapYear(y) ? 366 : 365;
}

    // اول فروردین 1402 برابر با سه‌شنبه است که با 3 نمایش داده می‌شود
    return (3 + totalDays) % 7;
}

    // این تابع چک می‌کند که آیا یک سال خورشیدی کبیسه است یا خیر
    function isLeapYear(year) {
    return (year % 33 === 1 || year % 33 === 5 || year % 33 === 9 || year % 33 === 13 || year % 33 === 17 || year % 33 === 22 || year % 33 === 26 || year % 33 === 30);
}

    function renderMonths(year) {
    monthsContainer.innerHTML = ''; // پاک کردن ماه‌های قبلی

    let currentDayOfWeek = getFirstDayOfYear(year);

    for (let i = 0; i < 12; i++) {
    const monthDiv = document.createElement('div');
    monthDiv.className = 'month';

    const monthName = document.createElement('div');
    monthName.className = 'month-name';
    monthName.innerText = monthNames[i];
    monthDiv.appendChild(monthName);

    const daysDiv = document.createElement('div');
    daysDiv.className = 'month-days';

    for (let j = 1; j <= monthDays[i]; j++) {
    const dayDiv = document.createElement('div');
    dayDiv.className = 'day';
    if (currentDayOfWeek === 6) { // اگر روز جمعه است
    dayDiv.classList.remove('day')
    dayDiv.classList.add('day-weekend');
    console.log('object');
}
    dayDiv.innerText = `${j}\n(${weekDays[currentDayOfWeek]})`;
    daysDiv.appendChild(dayDiv);

    currentDayOfWeek = (currentDayOfWeek + 1) % 7; // به روز بعدی هفته می‌رویم
}

    monthDiv.appendChild(daysDiv);
    monthsContainer.appendChild(monthDiv);
}
}

    // نمایش ماه‌ها برای سال اول به صورت پیش‌فرض
    renderMonths(1402);
