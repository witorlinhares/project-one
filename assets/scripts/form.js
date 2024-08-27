export function submitForm() {
    const formData = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        mensagem: document.getElementById('mensagem').value
        // ... outros campos
    };

    fetch('/salvar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok)   
     {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data  => {
        console.log('Success:', data); 

        // Exiba uma mensagem de sucesso para o usuário
        alert('Mensagem enviada com sucesso!');
    })
    .catch(error => {
        console.error('Erro ao enviar os dados:', error);
        // Exiba uma mensagem de erro para o usuário
        alert('Erro ao enviar os dados. Tente novamente.');
    });
}