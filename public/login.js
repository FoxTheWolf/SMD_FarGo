document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const nome = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value.trim();

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, senha })
        });

        const data = await response.json();
        if (response.ok) {
            window.location.href = data.redirectUrl;
        } else {
            document.getElementById('mensagem').innerHTML = data.error;
            document.getElementById('mensagem').style.color = 'red';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('mensagem').innerHTML = 'An error occurred. Please try again.';
        document.getElementById('mensagem').style.color = 'red';
    }
});

