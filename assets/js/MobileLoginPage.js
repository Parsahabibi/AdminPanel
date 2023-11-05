document.addEventListener('DOMContentLoaded', function () {


    let emailInput = document.getElementById('EmailInput');
    let passwordInput = document.getElementById('PasswordInput');
    let DesktopEmailInput = document.getElementById('DesktopEmailInput');
    let DesktopPasswordInput = document.getElementById('DesktopPasswordInput');
    let DesktopButtonLink = document.getElementById('DesktopSubmitButton');
    let DesktopLinkButton = document.getElementById('DesktopEnterButton')

    let MobileLinkButton = document.getElementById('MobileEnterButton')



    document.getElementById('TogglePasswordVisibility').addEventListener('click', function () {
        let passwordInput = document.getElementById('PasswordInput');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });

    document.getElementById('DesktopTogglePasswordVisibility').addEventListener('click', function () {
        let passwordInput = document.getElementById('DesktopPasswordInput');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });

    let formArray = [];


    document.querySelector('.SubmitButton').addEventListener('click', function () {

        let EmailInput = document.getElementById('EmailInput').value;
        let PasswordInput = document.getElementById('PasswordInput').value;
        console.log(DesktopEmailInput , DesktopPasswordInput)


        if (EmailInput === "" || PasswordInput === "") {
            showCustomNotification( "لطقا فرم ها را کامل پر کنید");
        } else if (isValidEmail(EmailInput) === false) {
            showCustomNotification("ایمیل وارد شده نا معتبر است !")
        } else {
            checkData();
        }
    });



    document.querySelector('.DesktopSubmitButton').addEventListener('click', function () {

        let DesktopEmailInput = document.getElementById('DesktopEmailInput').value;
        let DesktopPasswordInput = document.getElementById('DesktopPasswordInput').value;
        console.log(DesktopEmailInput , DesktopPasswordInput)


        if (DesktopEmailInput === "" || DesktopPasswordInput === "") {
            DesktopShowCustomNotification( "لطقا فرم ها را کامل پر کنید");
        } else if (isValidEmail(DesktopEmailInput) === false) {
            DesktopShowCustomNotification("ایمیل وارد شده نا معتبر است !")
        } else {
            DesktopCheckData();
        }
    });


    function isValidEmail(email) {
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    function showCustomNotification(message) {
        let notification = document.getElementById('customNotification');
        let notificationMessage = document.getElementById('notificationMessage');

        notificationMessage.textContent = message;
        notification.classList.add('show-notification');

        setTimeout(function () {
            notification.classList.remove('show-notification');
        }, 3000);
    }


    function DesktopShowCustomNotification(message) {
        let notification = document.getElementById('DesktopCustomNotification');
        let notificationMessage = document.getElementById('DesktopNotificationMessage');

        notificationMessage.textContent = message;
        notification.classList.add('show-notification');

        setTimeout(function () {
            notification.classList.remove('show-notification');
        }, 3000);
    }

    let userData = [
        {email: 'parsa@gmail.com', password: '123'}
    ];

    function checkData() {
        let emailValue = emailInput.value;
        let passwordValue = passwordInput.value;
        let user = userData.find(user => user.email === emailValue && user.password === passwordValue);

        if (user) {
            MobileLinkButton.href = 'HomePage.html'
            document.getElementById('EmailInput').value = "";
            document.getElementById('PasswordInput').value = "";
        } else {
            showCustomNotification('اطلاعات وارد شده نامعتبر است');
        }
    }

    function DesktopCheckData() {

        let DesktopEmailValue = DesktopEmailInput.value;
        let DesktopPasswordValue = DesktopPasswordInput.value;
        let DesktopUser = userData.find(user => user.email === DesktopEmailValue && user.password === DesktopPasswordValue);

        if (DesktopUser) {
            DesktopLinkButton.href = 'HomePage.html'
            document.getElementById('DesktopEmailInput').value = "";
            document.getElementById('DesktopPasswordInput').value = "";
        } else {
            DesktopShowCustomNotification('اطلاعات وارد شده نامعتبر است');
        }
    }

});


