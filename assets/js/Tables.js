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



//start ReviewTable js


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
    {
        isChecked: true,
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
    {
        isChecked: true,
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
    {
        isChecked: true,
        label: "لورم ایپسوم",
        progress: "17.5%",
        count: "2.458",
        date: "24.فرو.1402"
    },
];


function generateTableRows(data, targetTableBody) {
    let counter = 1;
    data.forEach(item => {
        let tr = document.createElement("tr");

        let tdInput = document.createElement("td");
        tdInput.className = "Input";
        let div = document.createElement("div");
        div.className = "InputReviewTable";

        let uniqueID = "InputReviewTable" + counter;



        let input = document.createElement("input");
        input.id = uniqueID;
        input.type = "checkbox";
        input.checked = item.isChecked;
        let label = document.createElement("label");
        label.htmlFor = uniqueID;
        label.appendChild(document.createTextNode(item.label));
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
        counter++;
    });
}


let targetTableBody = document.querySelector("tbody");
generateTableRows(rowData, targetTableBody);



//start DevelopTable


let DevelopTable = [
    {
        title: "لورم ایپسوم",
        systems: ["../assets/image/Windows.svg", "../assets/image/android.svg", "../assets/image/Apple.svg"],
        date: "24.فرور.1402",
        progressValue: "75.5%",
        progressPercentage: "75.5%"
    },
    {
        title: "لورم ایپسوم",
        systems: ["../assets/image/Windows.svg", "../assets/image/android.svg", "../assets/image/Apple.svg"],
        date: "24.فرور.1402",
        progressValue: "75.5%",
        progressPercentage: "75.5%"
    },
    {
        title: "لورم ایپسوم",
        systems: ["../assets/image/Windows.svg", "../assets/image/android.svg", "../assets/image/Apple.svg"],
        date: "24.فرور.1402",
        progressValue: "75.5%",
        progressPercentage: "75.5%"
    },
    {
        title: "لورم ایپسوم",
        systems: ["../assets/image/Windows.svg", "../assets/image/android.svg", "../assets/image/Apple.svg"],
        date: "24.فرور.1402",
        progressValue: "75.5%",
        progressPercentage: "75.5%"
    },
    {
        title: "لورم ایپسوم",
        systems: ["../assets/image/Windows.svg", "../assets/image/android.svg", "../assets/image/Apple.svg"],
        date: "24.فرور.1402",
        progressValue: "75.5%",
        progressPercentage: "75.5%"
    },
    {
        title: "لورم ایپسوم",
        systems: ["../assets/image/Windows.svg", "../assets/image/android.svg", "../assets/image/Apple.svg"],
        date: "24.فرور.1402",
        progressValue: "75.5%",
        progressPercentage: "75.5%"
    },
    {
        title: "لورم ایپسوم",
        systems: ["../assets/image/Windows.svg", "../assets/image/android.svg", "../assets/image/Apple.svg"],
        date: "24.فرور.1402",
        progressValue: "75.5%",
        progressPercentage: "75.5%"
    },
    {
        title: "لورم ایپسوم",
        systems: ["../assets/image/Windows.svg", "../assets/image/android.svg", "../assets/image/Apple.svg"],
        date: "24.فرور.1402",
        progressValue: "75.5%",
        progressPercentage: "75.5%"
    },
    {
        title: "لورم ایپسوم",
        systems: ["../assets/image/Windows.svg", "../assets/image/android.svg", "../assets/image/Apple.svg"],
        date: "24.فرور.1402",
        progressValue: "75.5%",
        progressPercentage: "75.5%"
    },
    {
        title: "لورم ایپسوم",
        systems: ["../assets/image/Windows.svg", "../assets/image/android.svg", "../assets/image/Apple.svg"],
        date: "24.فرور.1402",
        progressValue: "75.5%",
        progressPercentage: "75.5%"
    },
    {
        title: "لورم ایپسوم",
        systems: ["../assets/image/Windows.svg", "../assets/image/android.svg", "../assets/image/Apple.svg"],
        date: "24.فرور.1402",
        progressValue: "75.5%",
        progressPercentage: "75.5%"
    },

];

function generateDevelopTableRows(data, targetTableBody) {
    data.forEach(item => {
        let tr = document.createElement("tr");

        // Title Column
        let tdTitle = document.createElement("td");
        tdTitle.className = "TitleDevelopTable";
        tdTitle.textContent = item.title;
        tr.appendChild(tdTitle);

        // System Icons Column
        let tdSystem = document.createElement("td");
        tdSystem.className = "SystemDevelopTable";
        let divSystem = document.createElement("div");
        divSystem.className = "RowSystem";
        item.systems.forEach(src => {
            let img = document.createElement("img");
            img.src = src;
            img.alt = "";
            divSystem.appendChild(img);
        });
        tdSystem.appendChild(divSystem);
        tr.appendChild(tdSystem);

        // Date Column
        let tdDate = document.createElement("td");
        tdDate.className = "DateDevelopTable";
        tdDate.textContent = item.date;
        tr.appendChild(tdDate);

        // Progress Column
        let tdProgress = document.createElement("td");
        tdProgress.className = "ProgressDevelopTable";

        let h6 = document.createElement("h6");
        h6.textContent = item.progressValue;

        let p = document.createElement("p");
        p.textContent = item.progressPercentage;

        let divProgress = document.createElement("div");
        divProgress.className = "Progress";

        let divComplete = document.createElement("div");
        divComplete.className = "Complete";

        let percentageValue = parseFloat(item.progressValue.replace('%', ''));
        divComplete.style.width = `${percentageValue}%`;

        divProgress.appendChild(divComplete);
        tdProgress.appendChild(h6);
        tdProgress.appendChild(p);
        tdProgress.appendChild(divProgress);

        tr.appendChild(tdProgress);
        targetTableBody.appendChild(tr);
    });
}

let targetDevelopTableBody = document.querySelector(".Develop");
if (targetDevelopTableBody) {
    generateDevelopTableRows(DevelopTable, targetDevelopTableBody);
} else {
    console.error("Element '.Develop tbody' not found.");
}


//start Data ComplexTable



const ComplexTableData = [
    {
        title: "لورم ایپسوم",
        statusImg: "../assets/image/check_circle.svg",
        statusText: "تایید شده",
        date: "24.فرو.1402",
        progressPercentage: 50
    },
    {
        title: "لورم ایپسوم",
        statusImg: "../assets/image/cancel.svg",
        statusText: "تایید شده",
        date: "24.فرو.1402",
        progressPercentage: 30
    },
    {
        title: "لورم ایپسوم",
        statusImg: "../assets/image/error.svg",
        statusText: "تایید شده",
        date: "24.فرو.1402",
        progressPercentage: 60
    },
    {
        title: "لورم ایپسوم",
        statusImg: "../assets/image/check_circle.svg",
        statusText: "تایید شده",
        date: "24.فرو.1402",
        progressPercentage: 20
    },
    {
        title: "لورم ایپسوم",
        statusImg: "../assets/image/check_circle.svg",
        statusText: "تایید شده",
        date: "24.فرو.1402",
        progressPercentage: 80
    },
];

function generateComplexTableRows(data, targetTableBody) {
    data.forEach(item => {
        let tr = document.createElement("tr");

        let tdTitle = document.createElement("td");
        tdTitle.className = "TitleComplexTableTbody";
        tdTitle.textContent = item.title;
        tr.appendChild(tdTitle);

        let tdStatus = document.createElement("td");
        tdStatus.className = "StatusComplexTableTbody";
        let divStatus = document.createElement("div");
        divStatus.className = "StatusComplexTableDescription";
        let imgStatus = document.createElement("img");
        imgStatus.src = item.statusImg;
        imgStatus.alt = "";
        let pStatus = document.createElement("p");
        pStatus.className = "medium";
        pStatus.textContent = item.statusText;
        let h6Status = document.createElement("h6");
        h6Status.className = "medium";
        h6Status.textContent = item.statusText;
        divStatus.appendChild(imgStatus);
        divStatus.appendChild(pStatus);
        divStatus.appendChild(h6Status);
        tdStatus.appendChild(divStatus);
        tr.appendChild(tdStatus);

        let tdDate = document.createElement("td");
        tdDate.className = "DateComplexTableTbody";
        tdDate.textContent = item.date;
        tr.appendChild(tdDate);

        let tdProgress = document.createElement("td");
        tdProgress.className = "ProgressComplexTableTbody";
        let divProgress = document.createElement("div");
        divProgress.className = "ProgressComplexTable";
        let divComplete = document.createElement("div");
        divComplete.className = "CompleteProgressComplexTable";
        divComplete.style.width = item.progressPercentage + '%';
        divProgress.appendChild(divComplete);
        tdProgress.appendChild(divProgress);
        tr.appendChild(tdProgress);

        targetTableBody.appendChild(tr);
    });
}

const targetComplexTableBody = document.querySelector(".TbodyComplexTable");
if (targetComplexTableBody) {
    generateComplexTableRows(ComplexTableData, targetComplexTableBody);
} else {
    console.error("Could not find the target table body.");
}









