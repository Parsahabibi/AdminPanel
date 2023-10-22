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




