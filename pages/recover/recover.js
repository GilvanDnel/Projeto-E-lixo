function onChangeEmail() {
    toggleEmailError();
}

function toggleEmailError() {
    const email = document.getElementById('recoverEmail').value;
    const error = document.getElementById('recover-email-error');

    if (!email) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
}

function recoverPassword() {
    showLoading();

    const email = document.getElementById('recoverEmail').value;

    if (!email) {
        toggleEmailError();
        hideLoading();
        return;
    }

    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            alert('Email de recuperação enviado com sucesso!');
            window.location.href = '/index.html';
        })
        .catch(error => {
            alert(getErrorMessage(error));
        })
        .finally(() => {
            hideLoading(); // sempre esconde, com ou sem erro
        });
}


function getErrorMessage(error) {
    if (error.code == 'auth/user-not-found') {
        return 'Usuário não encontrado.';
    }
    return error.message;
}
