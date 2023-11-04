


document.addEventListener('DOMContentLoaded', function () {


    let emailInput = document.getElementById('EmailInput');
    let passwordInput = document.getElementById('PasswordInput');


    document.getElementById('TogglePasswordVisibility').addEventListener('click', function () {
        let passwordInput = document.getElementById('PasswordInput');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });

    let formArray = [];

    document.getElementById('SubmitButton').addEventListener('click', function () {
        saveFormData();
        checkData();
    });

    function saveFormData() {


        let emailValue = emailInput.value;

        if (!isValidEmail(emailValue)) {
            showCustomNotification('ایمیل وارد شده نامعتبر است');
            return;
        }

        let formData = {
            email: emailInput.value,
            password: passwordInput.value
        };

        formArray.push(formData);

        console.log(formArray);

        // emailInput.value = '';
        // passwordInput.value = '';
    }

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

    let userData = [
        {email: 'parsa@gmail.com', password: '123'}
    ];

    function checkData() {


        let emailValue = emailInput.value;
        let passwordValue = passwordInput.value;

        console.log(emailInput, passwordInput)


        let user = userData.find(user => user.email === emailValue && user.password === passwordValue);

        if (user) {
            window.location.href = '../../pages/Tables.html';
        } else {
            showCustomNotification('اطلاعات وارد شده نامعتبر است');
        }
    }
});


