// Variáveis globais
let capturedPhoto = null;

// Função para capturar imagem (igual)
async function captureImage() {
    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });

    video.srcObject = stream;
    video.play();

    return new Promise((resolve) => {
        video.onloadedmetadata = () => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0);
            video.srcObject.getTracks().forEach(track => track.stop());
            const imgData = canvas.toDataURL('image/jpeg');
            resolve(imgData);
        };
    });
}

// Função para enviar ao Cloudinary (com metadados)
async function uploadToCloudinary(imageData, metadata) {
    const blob = await (await fetch(imageData)).blob();
    const formData = new FormData();
    formData.append('file', blob);
    formData.append('upload_preset', 'ml_default');
    formData.append('cloud_name', 'dcmlatspi');
    formData.append('context', `nome=${metadata.userName}|item=${metadata.itemName}|local=${metadata.itemLocation}`);

    const response = await fetch('https://api.cloudinary.com/v1_1/dcmlatspi/image/upload', {
        method: 'POST',
        body: formData
    });
    return await response.json();
}

// Evento do botão "Tirar Foto" (igual)
document.getElementById('capture-button').addEventListener('click', async () => {
    try {
        capturedPhoto = await captureImage();
        document.getElementById('preview-image').src = capturedPhoto;
        document.getElementById('photo-preview').style.display = 'block';
    } catch (error) {
        console.error('Erro ao capturar foto:', error);
        alert('Permissão negada ou erro na câmera. Tente novamente.');
    }
});

// Evento do botão "Enviar Foto" (atualizado)
document.getElementById('confirm-button').addEventListener('click', async () => {
    if (!capturedPhoto) return;

    // Pega os dados dos inputs
    const userName = document.getElementById('user-name').value;
    const itemName = document.getElementById('item-name').value;
    const itemLocation = document.getElementById('item-location').value;

    if (!userName || !itemName || !itemLocation) {
        alert('Preencha todos os campos!');
        return;
    }

    try {
        const result = await uploadToCloudinary(capturedPhoto, {
            userName: userName,
            itemName: itemName,
            itemLocation: itemLocation
        });

        if (result.secure_url) {
            document.getElementById('mensagemSucesso').style.display = 'block';
            document.getElementById('photo-preview').style.display = 'none';
            console.log('Dados enviados:', {
                foto: result.secure_url,
                usuario: userName,
                item: itemName,
                local: itemLocation
            });
            // Aqui você pode enviar tudo para seu backend (Firebase, etc.)
        }
    } catch (error) {
        console.error('Erro ao enviar:', error);
        alert('Erro no envio. Tente novamente.');
    }
});

// Evento do botão "Tirar Novamente" (igual)
document.getElementById('retry-button').addEventListener('click', () => {
    document.getElementById('photo-preview').style.display = 'none';
});



//LOGOUT
document.getElementById('logoutBtn')?.addEventListener('click', async () => {
  try {
      // 1. Limpeza de autenticação (se usar Firebase Auth)
      // import { getAuth, signOut } from "firebase/auth";
      // await signOut(getAuth());

      // 2. Limpeza de dados locais
      localStorage.clear();
      sessionStorage.clear();

      // 3. Redirecionamento FIXO para index.html (raiz do projeto)
      window.location.href = '/index.html'; // ✅ Caminho absoluto garantido

  } catch (error) {
      console.error("Erro no logout:", error);
      alert("Falha ao sair. Tente novamente.");
  }
});