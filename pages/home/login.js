function onChangeEmail() {
    toggleLoginButton();
    toggleEmailErrors();
}

function onChangePassword() {
    toggleLoginButton();
    togglePasswordErrors();
}

function toggleEmailErrors() {
    const email = document.getElementById('email').value;
    document.getElementById('email-required-error').style.display = email ? 'none' : 'block';
    document.getElementById('email-invalid-error').style.display = email && (!email.includes('@') || !email.includes('.')) ? 'block' : 'none';
}

function togglePasswordErrors() {
    const password = document.getElementById('password').value;
    document.getElementById('password-required-error').style.display = password ? 'none' : 'block';
}

function toggleLoginButton() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const isValid = email && email.includes('@') && email.includes('.') && password;
    document.getElementById('login-button').disabled = !isValid;
}


function login() {
    showLoading();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const displayName = user.displayName || "usuário";

            sessionStorage.setItem("displayName", displayName);
            window.location.href = "../home/showloading.html";

        })
        .catch(error => {
            alert(getErrorMessage(error));
        })
        .finally(() => {
            hideLoading();
        });
}
