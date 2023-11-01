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



//start Date Card Profile Project


let projectsData = [
    {
        imageSrc: "../assets/image/shubham.png",
        title: "مورد نیاز، و کاربردهای متنوع با هدف",
        projectDetails: "پروژه #1 - دیدن جزییات پروژه"
    },
    {
        imageSrc: "../assets/image/shubham.png",
        title: "مورد نیاز، و کاربردهای متنوع با هدف",
        projectDetails: "پروژه #1 - دیدن جزییات پروژه"
    },
    {
        imageSrc: "../assets/image/shubham.png",
        title: "مورد نیاز، و کاربردهای متنوع با هدف",
        projectDetails: "پروژه #1 - دیدن جزییات پروژه"
    },
];

function createProjectElement(project, targetElement) {
    let projectCard = document.createElement('div');
    projectCard.className = "AllProfileProjectsCard";

    let imageAndTitleContainer = document.createElement('div');
    imageAndTitleContainer.className = "TitleAndImageAllProfileProjectsCard";

    let imageContainer = document.createElement('div');
    imageContainer.className = "ImageAllProfileProjectsCard";
    let image = document.createElement('img');
    image.src = project.imageSrc;
    image.alt = "";
    imageContainer.appendChild(image);

    let titleContainer = document.createElement('div');
    titleContainer.className = "TitleAllProfileProjectsCard";
    let title = document.createElement('p');
    title.className = "small primary";
    title.textContent = project.title;

    let descriptionContainer = document.createElement('div');
    descriptionContainer.className = "desAllProfileProjectsCard";
    let projectNumber = document.createElement('p');
    projectNumber.className = "small secondary";
    projectNumber.textContent = "پروژه #1";

    let separator = document.createElement('h6');
    separator.className = "secondary small";
    separator.textContent = "•";

    let projectDetails = document.createElement('p');
    projectDetails.className = "main small";
    projectDetails.textContent = "دیدن جزییات پروژه";

    descriptionContainer.appendChild(projectNumber);
    descriptionContainer.appendChild(separator);
    descriptionContainer.appendChild(projectDetails);

    titleContainer.appendChild(title);
    titleContainer.appendChild(descriptionContainer);

    imageAndTitleContainer.appendChild(imageContainer);
    imageAndTitleContainer.appendChild(titleContainer);


    let noteContainer = document.createElement('div');
    noteContainer.className = "NoteAllProfileProjectsCard";
    let noteImage = document.createElement('img');
    noteImage.src = "../assets/image/edit.svg";
    noteImage.alt = "";
    noteContainer.appendChild(noteImage);

    projectCard.appendChild(imageAndTitleContainer);
    projectCard.appendChild(noteContainer);

    targetElement.appendChild(projectCard);
}

let projectsContainer = document.querySelector(".AllProfileProjectsCards");
if (projectsContainer) {

    projectsData.forEach(project => {
        createProjectElement(project, projectsContainer);
    });
} else {
    console.error("Element '.AllProfileProjectsCards' not found.");
}


//start data lorem Card


let loremProjectsData = [
    {
        title: "لورم ایپسوم",
        description: "لورم ایپسوم متن ساختگی",
        titleDesktop: "لورم ایپسوم",
        descriptionDesktop: "لورم ایپسوم متن ساختگی"
    },
    {
        title: "لورم ایپسوم",
        description: "لورم ایپسوم متن ساختگی",
        titleDesktop: "لورم ایپسوم",
        descriptionDesktop: "لورم ایپسوم متن ساختگی"
    },
    {
        title: "لورم ایپسوم",
        description: "لورم ایپسوم متن ساختگی",
        titleDesktop: "لورم ایپسوم",
        descriptionDesktop: "لورم ایپسوم متن ساختگی"
    },
    {
        title: "لورم ایپسوم",
        description: "لورم ایپسوم متن ساختگی",
        titleDesktop: "لورم ایپسوم",
        descriptionDesktop: "لورم ایپسوم متن ساختگی"
    },
    {
        title: "لورم ایپسوم",
        description: "لورم ایپسوم متن ساختگی",
        titleDesktop: "لورم ایپسوم",
        descriptionDesktop: "لورم ایپسوم متن ساختگی"
    },
];


function createLoremProjectElement(project, targetElement) {
    let projectCard = document.createElement('div');
    projectCard.className = "LoremProfileProjectsCard";

    let title = document.createElement('p');
    title.className = "TitleCard small secondary";
    title.textContent = project.title;

    let description = document.createElement('h6');
    description.className = "descriptionCard small primary";
    description.textContent = project.description;

    let titleDesktop = document.createElement('h6');
    titleDesktop.className = "TitleCardDesktop small secondary";
    titleDesktop.textContent = project.titleDesktop;

    let descriptionDesktop = document.createElement('h5');
    descriptionDesktop.className = "descriptionCardDesktop small primary";
    descriptionDesktop.textContent = project.descriptionDesktop;

    projectCard.appendChild(title);
    projectCard.appendChild(description);
    projectCard.appendChild(titleDesktop);
    projectCard.appendChild(descriptionDesktop);

    targetElement.appendChild(projectCard);
}

let loremProjectsContainer = document.querySelector(".LoremProfileProjectsCards");
if (loremProjectsContainer) {
    loremProjectsData.forEach(project => {
        createLoremProjectElement(project, loremProjectsContainer);
    });
} else {
    console.error("Element '.LoremProfileProjectsCards' not found.");
}





