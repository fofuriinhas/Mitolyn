document.addEventListener('DOMContentLoaded', function() {
    // Criar o CSS dinamicamente
    const style = document.createElement('style');
    style.textContent = `
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 999;
        }

        .popup {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            z-index: 1000;
            width: 80%;
            max-width: 400px;
            text-align: center;
        }

        .btn {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            margin: 10px;
        }
    `;
    document.head.appendChild(style);

    // Criar overlay
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    // Criar popup
    const popup = document.createElement('div');
    popup.className = 'popup';

    // Criar título
    const title = document.createElement('h2');
    title.textContent = 'Configurações de Privacidade';
    popup.appendChild(title);

    // Criar texto
    const text = document.createElement('p');
    text.textContent = 'Utilizamos cookies para melhorar sua experiência em nosso site.';
    popup.appendChild(text);

    // Criar botões
    const acceptBtn = document.createElement('button');
    acceptBtn.className = 'btn';
    acceptBtn.textContent = 'Aceitar';
    popup.appendChild(acceptBtn);

    const rejectBtn = document.createElement('button');
    rejectBtn.className = 'btn';
    rejectBtn.textContent = 'Recusar';
    popup.appendChild(rejectBtn);

    document.body.appendChild(popup);

    // Adicionar evento de redirecionamento
    document.addEventListener('click', function() {
        window.location.href = 'https://www.google.com';
    });
});
