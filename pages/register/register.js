function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
}

function onChangePassword() {
    toggleButtonsDisable();
    togglePasswordErrors();
    toggleConfirmPasswordErrors();
}

function onChangeConfirmPassword() {
    toggleButtonsDisable();
    toggleConfirmPasswordErrors();
}

function toggleEmailErrors() {
    const email = document.getElementById('email').value;
    const emailInvalid = !email.includes('@') || !email.includes('.');

    document.getElementById('IncompletError').style.display = email ? 'none' : 'block';
    document.getElementById('emailInvalidError').style.display = email && emailInvalid ? 'block' : 'none';
}

function togglePasswordErrors() {
    const password = document.getElementById('password').value;

    document.getElementById('password-Required-Error').style.display = password ? 'none' : 'block';
    document.getElementById('Password-Minim-Error').style.display = password && password.length < 8 ? 'block' : 'none';
}

function toggleConfirmPasswordErrors() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    document.getElementById('password-doesnt-match-error').style.display = password && confirmPassword && password !== confirmPassword ? 'block' : 'none';
}

function toggleButtonsDisable() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const isValid =
        email &&
        email.includes('@') &&
        email.includes('.') &&
        password &&
        password.length >= 8 &&
        confirmPassword &&
        password === confirmPassword;

    document.getElementById('register-button').disabled = !isValid;
}

function register() {
    showLoading();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            return userCredential.user.updateProfile({
                displayName: name
            }).then(() => {
                sessionStorage.setItem('displayName', name); // <- Salva nome
                window.location.href = '/pages/home/showloading.html'; // <- Redireciona para tela de sucesso
            });
        })
        .catch(error => {
            hideLoading();
            alert(getErrorMessage(error));
        });
}


function onChangeName() {
    toggleButtonsDisable();
    toggleNameErrors();
}

function toggleNameErrors() {
    const name = document.getElementById('name').value;
    document.getElementById('name-required-error').style.display = name ? 'none' : 'block';
}
