//Add Active Class to title ShoppingCard

let items = document.querySelectorAll('.ItemTrend');


items.forEach(item => {
    item.addEventListener('click', function() {

        items.forEach(innerItem => {
            innerItem.classList.remove('ActiveButton');
        });

        this.classList.add('ActiveButton');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    items[0].classList.add('ActiveButton');
});



//start shoppingCard js


const shoppingData = [
    {
        imageUrl: '../assets/image/ShoppingImage.png',
        favoriteUrl: '../assets/image/Favorite.svg',
        title: 'لورم ایپسوم',
        subtitle: 'لورم ایپسوم',
        users: [
            { img: '../assets/image/User.png', zIndex: 3 },
            { img: '../assets/image/UserThree.png', zIndex: 2 },
            { img: '../assets/image/UserTwo.png', zIndex: 1 }
        ],
        price: '123 تومان'
    },
    {
        imageUrl: '../assets/image/ShoppingImage.png',
        favoriteUrl: '../assets/image/Favorite.svg',
        title: 'لورم ایپسوم',
        subtitle: 'لورم ایپسوم',
        users: [
            { img: '../assets/image/User.png', zIndex: 3 },
            { img: '../assets/image/UserThree.png', zIndex: 2 },
            { img: '../assets/image/UserTwo.png', zIndex: 1 }
        ],
        price: '123 تومان'
    },
    {
        imageUrl: '../assets/image/ShoppingImage.png',
        favoriteUrl: '../assets/image/Favorite.svg',
        title: 'لورم ایپسوم',
        subtitle: 'لورم ایپسوم',
        users: [
            { img: '../assets/image/User.png', zIndex: 3 },
            { img: '../assets/image/UserThree.png', zIndex: 2 },
            { img: '../assets/image/UserTwo.png', zIndex: 1 }
        ],
        price: '123 تومان'
    },
];


function createShoppingCard(data) {
    const shoppingCard = document.createElement('div');
    shoppingCard.className = 'ShoppingCard';

    const shoppingImageDiv = document.createElement('div');
    shoppingImageDiv.className = 'ShoppingImage';
    const shoppingImage = document.createElement('img');
    shoppingImage.className = 'ShoppingImage';
    shoppingImage.src = data.imageUrl;
    const favoriteImage = document.createElement('img');
    favoriteImage.className = 'Favorite';
    favoriteImage.src = data.favoriteUrl;

    shoppingImageDiv.appendChild(shoppingImage);
    shoppingImageDiv.appendChild(favoriteImage);
    shoppingCard.appendChild(shoppingImageDiv);

    const shoppingTitleDiv = document.createElement('div');
    shoppingTitleDiv.className = 'ShoppingTitle';
    const titleDiv = document.createElement('div');
    titleDiv.className = 'title';
    const h4 = document.createElement('h4');
    h4.innerText = data.title;
    const h6 = document.createElement('h6');
    h6.innerText = data.subtitle;

    titleDiv.appendChild(h4);
    titleDiv.appendChild(h6);
    shoppingTitleDiv.appendChild(titleDiv);
    shoppingCard.appendChild(shoppingTitleDiv);

    const usersDiv = document.createElement('div');
    usersDiv.className = 'users';
    data.users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'user';
        userDiv.style.zIndex = user.zIndex;

        const userImg = document.createElement('img');
        userImg.src = user.img;

        userDiv.appendChild(userImg);
        usersDiv.appendChild(userDiv);
    });

    shoppingTitleDiv.appendChild(usersDiv);

    const shoppingButtonDiv = document.createElement('div');
    shoppingButtonDiv.className = 'ShoppingButton';
    const priceH6 = document.createElement('h6');
    priceH6.innerText = `قیمت: ${data.price}`;
    shoppingButtonDiv.appendChild(priceH6);

    const buttonShoppingCardDiv = document.createElement('div');
    buttonShoppingCardDiv.className = 'buttonShoppingCard';
    const button = document.createElement('button');
    button.innerText = 'خرید';
    buttonShoppingCardDiv.appendChild(button);
    shoppingButtonDiv.appendChild(buttonShoppingCardDiv);
    shoppingCard.appendChild(shoppingButtonDiv);

    return shoppingCard;
}

const shoppingCardContainers = document.querySelectorAll('.ShoppingCards');

shoppingData.forEach(data => {
    const shoppingCard = createShoppingCard(data);

    shoppingCardContainers.forEach(container => {
        container.appendChild(shoppingCard.cloneNode(true));
    });
});


//start Show RecentVisits with Click on More Button
document.querySelector('.More').addEventListener('click', function() {
    const recentVisitsDiv = document.querySelector('.RecentVisits');
    recentVisitsDiv.style.display = 'block';
    recentVisitsDiv.style.marginTop = '47px';
    this.style.display = 'none';
});



//start TopSellers Table



let TopSellersData = [
    {
        image: "../assets/image/TopSellers.png",
        name: "البرز سیستم",
        number: "9821"
    },
    {
        image: "../assets/image/TopSellers.png",
        name: "البرز سیستم",
        number: "9821"
    },
    {
        image: "../assets/image/TopSellers.png",
        name: "البرز سیستم",
        number: "9821"
    },
    {
        image: "../assets/image/TopSellers.png",
        name: "البرز سیستم",
        number: "9821"
    },
    {
        image: "../assets/image/TopSellers.png",
        name: "البرز سیستم",
        number: "9821"
    },
    {
        image: "../assets/image/TopSellers.png",
        name: "البرز سیستم",
        number: "9821"
    },
    {
        image: "../assets/image/TopSellers.png",
        name: "البرز سیستم",
        number: "9821"
    },
    {
        image: "../assets/image/TopSellers.png",
        name: "البرز سیستم",
        number: "9821"
    },
    {
        image: "../assets/image/TopSellers.png",
        name: "البرز سیستم",
        number: "9821"
    },
    {
        image: "../assets/image/TopSellers.png",
        name: "البرز سیستم",
        number: "9821"
    },
    {
        image: "../assets/image/TopSellers.png",
        name: "البرز سیستم",
        number: "9821"
    },

];



let tbody = document.querySelector(".tbody");

tbody.innerHTML = '';

TopSellersData.forEach(data => {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.className = "InformationTopSellers";
    let div1 = document.createElement("div");
    div1.className = "InformationTopSeller";
    let img = document.createElement("img");
    img.src = data.image;
    let h6 = document.createElement("h6");
    h6.className = "medium";
    h6.textContent = data.name;
    div1.appendChild(img);
    div1.appendChild(h6);
    td1.appendChild(div1);

    let td2 = document.createElement("td");
    td2.className = "NumberTopSellers";
    td2.textContent = data.number;

    let td3 = document.createElement("td");
    td3.className = "RankTopSellers";
    let div2 = document.createElement("div");
    div2.className = "rank";
    td3.appendChild(div2);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tbody.appendChild(tr);
});




//start fill HistoryCards with HistoryCard


const historyData = [
    {
        imageUrl: "../assets/image/HistoryImage.png",
        mobileTitle: "لورم ایپسوم",
        mobileSubtitle: "لورم ایپسوم متن",
        title: "لورم ایپسوم",
        description: "لورم ایپسوم متن",
        price: "120 تومان",
        time: "30ثانیه قبل"
    },
    {
        imageUrl: "../assets/image/HistoryImage.png",
        mobileTitle: "لورم ایپسوم",
        mobileSubtitle: "لورم ایپسوم متن",
        title: "لورم ایپسوم",
        description: "لورم ایپسوم متن",
        price: "120 تومان",
        time: "30ثانیه قبل"
    },
    {
        imageUrl: "../assets/image/HistoryImage.png",
        mobileTitle: "لورم ایپسوم",
        mobileSubtitle: "لورم ایپسوم متن",
        title: "لورم ایپسوم",
        description: "لورم ایپسوم متن",
        price: "120 تومان",
        time: "30ثانیه قبل"
    },
    {
        imageUrl: "../assets/image/HistoryImage.png",
        mobileTitle: "لورم ایپسوم",
        mobileSubtitle: "لورم ایپسوم متن",
        title: "لورم ایپسوم",
        description: "لورم ایپسوم متن",
        price: "120 تومان",
        time: "30ثانیه قبل"
    },
    {
        imageUrl: "../assets/image/HistoryImage.png",
        mobileTitle: "لورم ایپسوم",
        mobileSubtitle: "لورم ایپسوم متن",
        title: "لورم ایپسوم",
        description: "لورم ایپسوم متن",
        price: "120 تومان",
        time: "30ثانیه قبل"
    },
    {
        imageUrl: "../assets/image/HistoryImage.png",
        mobileTitle: "لورم ایپسوم",
        mobileSubtitle: "لورم ایپسوم متن",
        title: "لورم ایپسوم",
        description: "لورم ایپسوم متن",
        price: "120 تومان",
        time: "30ثانیه قبل"
    },
    {
        imageUrl: "../assets/image/HistoryImage.png",
        mobileTitle: "لورم ایپسوم",
        mobileSubtitle: "لورم ایپسوم متن",
        title: "لورم ایپسوم",
        description: "لورم ایپسوم متن",
        price: "120 تومان",
        time: "30ثانیه قبل"
    },
    {
        imageUrl: "../assets/image/HistoryImage.png",
        mobileTitle: "لورم ایپسوم",
        mobileSubtitle: "لورم ایپسوم متن",
        title: "لورم ایپسوم",
        description: "لورم ایپسوم متن",
        price: "120 تومان",
        time: "30ثانیه قبل"
    },
];


const historyCardsContainer = document.querySelector('.HistoryCards');

historyData.forEach(data => {
    const historyCard = document.createElement('div');
    historyCard.className = 'HistoryCard';

    const historyCardImageDiv = document.createElement('div');
    historyCardImageDiv.className = 'HistoryCardImage';

    const historyImage = document.createElement('img');
    historyImage.src = data.imageUrl;

    const mobileTitleDiv = document.createElement('div');
    mobileTitleDiv.className = 'MobileTitleHistoryCard';
    const mobileTitleP = document.createElement('p');
    mobileTitleP.className = 'medium';
    mobileTitleP.textContent = data.mobileTitle;
    const mobileSubtitleSpan = document.createElement('span');
    mobileSubtitleSpan.className = 'small';
    mobileSubtitleSpan.textContent = data.mobileSubtitle;
    mobileTitleDiv.appendChild(mobileTitleP);
    mobileTitleDiv.appendChild(mobileSubtitleSpan);

    const titleDiv = document.createElement('div');
    titleDiv.className = 'TitleHistoryCard';
    const titleH6 = document.createElement('h6');
    titleH6.className = 'medium Title';
    titleH6.textContent = data.title;
    const descriptionH6 = document.createElement('h6');
    descriptionH6.className = 'small des';
    descriptionH6.textContent = data.description;
    titleDiv.appendChild(titleH6);
    titleDiv.appendChild(descriptionH6);

    historyCardImageDiv.appendChild(historyImage);
    historyCardImageDiv.appendChild(mobileTitleDiv);
    historyCardImageDiv.appendChild(titleDiv);
    historyCard.appendChild(historyCardImageDiv);

    const priceDiv = document.createElement('div');
    priceDiv.className = 'PriceHistoryCard';
    const priceP = document.createElement('p');
    priceP.className = 'medium';
    priceP.textContent = data.price;
    const priceH5 = document.createElement('h5');
    priceH5.className = 'medium';
    priceH5.textContent = data.price;
    priceDiv.appendChild(priceP);
    priceDiv.appendChild(priceH5);
    historyCard.appendChild(priceDiv);

    const timeDiv = document.createElement('div');
    timeDiv.className = 'TimeHistoryCard';
    const timeP = document.createElement('p');
    timeP.textContent = data.time;
    const timeH5 = document.createElement('h5');
    timeH5.textContent = data.time;
    timeDiv.appendChild(timeP);
    timeDiv.appendChild(timeH5);
    historyCard.appendChild(timeDiv);

    historyCardsContainer.appendChild(historyCard);
});







