document.getElementById('smsForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const ipAddress = document.getElementById('ipAddress').value;
    const port = document.getElementById('port').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;
    const resultDiv = document.getElementById('result');

    const url = `http://${ipAddress}:${port}?number=${encodeURIComponent(phoneNumber)}&text=${encodeURIComponent(message)}`;

    try {
        const response = await fetch(url, { method: 'GET' });
        
        if (response.ok) {
            resultDiv.innerHTML = `<p style="color: green;">SMS enviado com sucesso!</p>`;
            resultDiv.style.color = 'green';
        } else {
            resultDiv.innerHTML = `<p style="color: red;">Erro ao enviar SMS. Verifique os dados.</p>`;
            resultDiv.style.color = 'red';
        }
    } catch (error) {
        resultDiv.innerHTML = `<p style="color: red;">Erro: ${error.message}</p>`;
        resultDiv.style.color = 'red';
    }
});