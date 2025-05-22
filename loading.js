function showLoading() {
    const loading = document.createElement('div');
    loading.classList.add('loading');
    loading.id = 'loading';
    loading.innerText = 'Carregando...';
    document.body.appendChild(loading);
}

function hideLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.remove();
    }
}
