function getErrorMessage(error) {
    if (error.code === 'auth/email-already-in-use') {
        return 'Este email já está em uso.';
    }
    if (error.code === 'auth/invalid-email') {
        return 'Email inválido.';
    }
    if (error.code === 'auth/weak-password') {
        return 'Senha fraca. Use no mínimo 8 caracteres.';
    }
    return error.message;
}
