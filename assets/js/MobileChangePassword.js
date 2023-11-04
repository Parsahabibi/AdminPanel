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


document.querySelector('button').addEventListener('click', function () {
    const currentPasswordInput = document.getElementById('current').value;
    const newPasswordInput = document.getElementById('NewPassword').value;
    const repeatPasswordInput = document.getElementById('RepeatPassword').value;

    if (currentPasswordInput === "") {
        showCustomNotification( "رمز عبور فعلی را وارد کنید");
    } else if (newPasswordInput !== repeatPasswordInput) {
        showCustomNotification("رمز عبور و تکرار رمز عبور باید یکسان باشند")
    } else {
        window.location.href = 'صفحه-دیگر.html';
    }
});


function showCustomNotification(message) {

    let notification = document.getElementById('customNotification');
    let notificationMessage = document.getElementById('notificationMessage');

    notificationMessage.textContent = message;
    notification.classList.add('show-notification');

    setTimeout(function () {
        notification.classList.remove('show-notification');
    }, 3000);
}
