document.getElementById('ToggleNewPasswordVisibility').addEventListener('click', function () {
    let passwordInput = document.getElementById('NewPassword');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }

});

document.getElementById('ToggleRepeatPasswordVisibility').addEventListener('click', function () {
    let passwordInput = document.getElementById('RepeatPassword');


    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }

});


document.getElementById('ToggleDesktopNewPasswordVisibility').addEventListener('click', function () {
    let passwordInput = document.getElementById('DesktopNewPassword');


    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }

});

document.getElementById('ToggleDesktopRepeatPasswordVisibility').addEventListener('click', function () {
    let passwordInput = document.getElementById('RepeatDesktopPassword');


    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }

});


document.querySelector('.MobileConfirm').addEventListener('click', function () {
    const currentPasswordInput = document.getElementById('current').value;
    const newPasswordInput = document.getElementById('NewPassword').value;
    const repeatPasswordInput = document.getElementById('RepeatPassword').value;

    if (currentPasswordInput === "") {
        showCustomNotification( "رمز عبور فعلی را وارد کنید");
    } else if (newPasswordInput !== repeatPasswordInput) {
        showCustomNotification("رمز عبور و تکرار رمز عبور باید یکسان باشند")
    } else {
        window.location.href = 'صفحه-دیگر.html';
        document.getElementById('current').value = "";
        document.getElementById('NewPassword').value = "";
        document.getElementById('RepeatPassword').value = "";
    }
});



document.querySelector('.Confirm').addEventListener('click', function () {
    let currentDesktopPasswordInput = document.getElementById('DesktopCurrent').value;
    let newDesktopPasswordInput = document.getElementById('DesktopNewPassword').value;
    let repeatDesktopPasswordInput = document.getElementById('RepeatDesktopPassword').value;

    if (currentDesktopPasswordInput === "") {
        showCustomNotification( "رمز عبور فعلی را وارد کنید");
    } else if (newDesktopPasswordInput !== repeatDesktopPasswordInput) {
        showCustomNotification("رمز عبور و تکرار رمز عبور باید یکسان باشند")
    } else {
        window.location.href = '../../../AltynAdmin/pages/HomePage.html';
        document.getElementById('DesktopCurrent').value = "";
        document.getElementById('DesktopNewPassword').value = "";
        document.getElementById('RepeatDesktopPassword').value = "";
    }
});


function showCustomNotification(message) {

    let notification = document.getElementById('DesktopCustomNotification');
    let notificationMessage = document.getElementById('DesktopNotificationMessage');

    notificationMessage.textContent = message;
    notification.classList.add('show-notification');

    setTimeout(function () {
        notification.classList.remove('show-notification');
    }, 3000);
}
