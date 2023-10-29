const kanbanCardsData = [
    {
        title: "لورم ایپسوم متن ساختگی با تولید سادگی",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر",
        users: [
            "../assets/image/User.png",
            "../assets/image/UserThree.png",
            "../assets/image/UserTwo.png"
        ]
    },
    {
        title: "لورم ایپسوم متن ساختگی با تولید سادگی",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر",
        users: [
            "../assets/image/User.png",
            "../assets/image/UserThree.png",
            "../assets/image/UserTwo.png"
        ]
    },
    {
        title: "لورم ایپسوم متن ساختگی با تولید سادگی",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر",
        users: [
            "../assets/image/User.png",
            "../assets/image/UserThree.png",
            "../assets/image/UserTwo.png"
        ]
    },
];

function generateKanbanCards(data, targetDiv) {
    data.forEach(item => {
        let card = document.createElement("div");
        card.className = "CardDoneKanban";

        //Title Card
        let titleDiv = document.createElement("div");
        titleDiv.className = "TitleCardDoneKanban";
        let pTitle = document.createElement("p");
        pTitle.className = "medium primary";
        pTitle.textContent = item.title;
        let h6Title = document.createElement("h6");
        h6Title.className = "medium primary";
        h6Title.textContent = item.title;
        let editImg = document.createElement("img");
        editImg.src = "../assets/image/edit.svg";
        editImg.alt = "";
        titleDiv.appendChild(pTitle);
        titleDiv.appendChild(h6Title);
        titleDiv.appendChild(editImg);
        card.appendChild(titleDiv);

        //Description Card
        let descDiv = document.createElement("div");
        descDiv.className = "DesCardDoneKanban";
        let pDesc = document.createElement("p");
        pDesc.className = "medium secondary";
        pDesc.textContent = item.description;
        let h6Desc = document.createElement("h6");
        h6Desc.className = "medium secondary";
        h6Desc.textContent = item.description;
        descDiv.appendChild(pDesc);
        descDiv.appendChild(h6Desc);
        card.appendChild(descDiv);

        //Users and Button Card
        let btnDiv = document.createElement("div");
        btnDiv.className = "ButtonCardDoneKanban";
        let btn = document.createElement("button");
        btn.className = "ButtonDone";
        btn.textContent = "انجام شده";
        let usersDiv = document.createElement("div");
        usersDiv.className = "users";
        let zIndex = 3;
        item.users.forEach(userImgSrc => {
            let userDiv = document.createElement("div");
            userDiv.style.zIndex = zIndex.toString();
            zIndex--;
            userDiv.className = "user";
            let userImg = document.createElement("img");
            userImg.src = userImgSrc;
            userImg.alt = "";
            userDiv.appendChild(userImg);
            usersDiv.appendChild(userDiv);
        });
        btnDiv.appendChild(btn);
        btnDiv.appendChild(usersDiv);
        card.appendChild(btnDiv);

        targetDiv.appendChild(card);
    });
}

const targetKanbanDiv = document.querySelector(".CardsDoneKanban");
if (targetKanbanDiv) {
    generateKanbanCards(kanbanCardsData, targetKanbanDiv);
} else {
    console.error("Could not find the target div '.CardsDoneKanban'.");
}

