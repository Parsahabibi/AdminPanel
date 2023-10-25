document.addEventListener("DOMContentLoaded", function () {


    function convertToPersianNumber(input) {
        const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
        return input.replace(/\d/g, d => persianDigits[d]);
    }

    const textElements = document.querySelectorAll('h1, h4, h5, h6 , p , span');
    textElements.forEach(element => {
        element.textContent = convertToPersianNumber(element.textContent);
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
                dropdownChart.style.visibility = 'visible'; // اضافه کردن خط جدید
            } else {
                dropdownChart.style.opacity = '0';
                dropdownChart.style.maxHeight = '0';
                setTimeout(() => { // افزودن setTimeout
                    dropdownChart.style.visibility = 'hidden';
                }, 200); // مقدار زمان انتقال
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

});



//start ReviewTable table js


let rowData = [
    {
        isChecked: false,
        label: "لورم ایپسوم",
        progress: "17.5%",
        count: "2.458",
        date: "24.فرو.1402"
    },

    {
        isChecked: false,
        label: "لورم ایپسوم",
        progress: "17.5%",
        count: "2.458",
        date: "24.فرو.1402"
    },


    {
        isChecked: true,
        label: "لورم ایپسوم",
        progress: "17.5%",
        count: "2.458",
        date: "24.فرو.1402"
    },
];


function generateTableRows(data, targetTableBody) {
    data.forEach(item => {
        let tr = document.createElement("tr");

        let tdInput = document.createElement("td");
        tdInput.className = "Input";
        let div = document.createElement("div");
        div.className = "InputReviewTable";
        let input = document.createElement("input");
        input.id = "InputReviewTable";
        input.type = "checkbox";
        input.checked = item.isChecked;
        let label = document.createElement("label");
        label.htmlFor = "InputReviewTable";
        label.textContent = item.label;
        div.appendChild(input);
        div.appendChild(label);
        tdInput.appendChild(div);
        tr.appendChild(tdInput);

        let tdProgress = document.createElement("td");
        tdProgress.className = "Progress";
        tdProgress.textContent = item.progress;
        tr.appendChild(tdProgress);

        let tdCount = document.createElement("td");
        tdCount.className = "Count";
        tdCount.textContent = item.count;
        tr.appendChild(tdCount);

        let tdDate = document.createElement("td");
        tdDate.className = "DateReviewTable";
        tdDate.textContent = item.date;
        tr.appendChild(tdDate);

        targetTableBody.appendChild(tr);
    });
}


let targetTableBody = document.querySelector("tbody");
generateTableRows(rowData, targetTableBody);






