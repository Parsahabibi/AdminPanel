let progressData = {
    usedSpace: 26.5,
    totalSpace: 50
};

function generateProgressElement(data, targetElement) {
    let percentageUsed = (data.usedSpace / data.totalSpace) * 100;

    let numberOfProgress = document.createElement('div');
    numberOfProgress.className = "NumberOfProgress";

    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let h6_1 = document.createElement('h6');
    let h6_2 = document.createElement('h6');

    p1.className = "medium secondary";
    p2.className = "medium secondary";
    h6_1.className = "medium secondary";
    h6_2.className = "medium secondary";

    p1.textContent = data.usedSpace + " گیگابایت";
    p2.textContent = data.totalSpace + " گیگابایت";
    h6_1.textContent = data.usedSpace + " گیگابایت";
    h6_2.textContent = data.totalSpace + " گیگابایت";

    numberOfProgress.appendChild(p1);
    numberOfProgress.appendChild(p2);
    numberOfProgress.appendChild(h6_1);
    numberOfProgress.appendChild(h6_2);
    targetElement.appendChild(numberOfProgress);

    let allProgressSpace = document.createElement('div');
    allProgressSpace.className = "AllProgressSpace";

    let completeProgressSpace = document.createElement('div');
    completeProgressSpace.className = "CompleteProgressSpace";
    completeProgressSpace.style.width = percentageUsed + "%";

    allProgressSpace.appendChild(completeProgressSpace);
    targetElement.appendChild(allProgressSpace);
}

let targetElement = document.querySelector(".ProgressSpace");
if (targetElement) {
    generateProgressElement(progressData, targetElement);
} else {
    console.error("Element '.ProgressSpace' not found.");
}


//Upload File


document.getElementById("customFileInputButton").addEventListener("click", function() {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.style.display = "none";
    fileInput.accept = ".pdf";
    fileInput.addEventListener("change", function() {
        const selectedFile = fileInput.files[0];
        if (selectedFile) {
            if (selectedFile.type === "application/pdf") {
                const fileNameDisplay = document.querySelector('.fileNameDisplay');
                fileNameDisplay.textContent = selectedFile.name;

                fileInput.value = "";

            } else {
                alert("فایل انتخابی باید با پسوند PDF باشد.");
                fileInput.value = "";
            }
        } else {
            alert("فایلی انتخاب نشده است.");
        }
    });
    document.body.appendChild(fileInput);
    fileInput.click();
});


//desktop Upload


document.getElementById("customFileInputButtonDesktop").addEventListener("click", function () {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.style.display = "none";
    fileInput.accept = ".pdf";
    fileInput.addEventListener("change", function () {
        const selectedFile = fileInput.files[0];
        if (selectedFile) {
            if (selectedFile.type === "application/pdf") {
                const fileNameDisplay = document.querySelector('.fileNameDisplayDesktop');
                fileNameDisplay.textContent = selectedFile.name;

                fileInput.value = "";

            } else {
                alert("فایل انتخابی باید با پسوند PDF باشد.");
                fileInput.value = "";
            }
        } else {
            alert("فایلی انتخاب نشده است.");
        }
    });
    document.body.appendChild(fileInput);
    fileInput.click();
});


