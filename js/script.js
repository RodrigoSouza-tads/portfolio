document.addEventListener('DOMContentLoaded', function() {

    // Lógica de Abertura da Lista de Habilidades
    const btnOpenHabilidades = document.getElementById('btnOpen-Habilidades');
    const btnCloseHabilidades = document.getElementById('btnClose-Habilidades');
    const habilidades = document.getElementById('habilidades-li');

    btnOpenHabilidades.addEventListener('click', () => {
        habilidades.style.display = 'block';

        btnCloseHabilidades.style.display = 'block';
        btnOpenHabilidades.style.display = 'none';

        btnCloseHabilidades.addEventListener('click', () => {
            habilidades.style.display = 'none';
            btnOpenHabilidades.style.display = 'block'
            btnCloseHabilidades.style.display = 'none';
        });
    });

    btnCloseHabilidades.addEventListener('click', () => {
        habilidades.style.display = 'none';
    });

    // Lógica de Abertura do Formulário de Contato
    //// Botão de Abertura do Formulário
    const btnOpenFormContato = document.getElementById('btnOpen-formContato');
    const conteinerFormContato = document.getElementById('Conteiner-formContato')

    btnOpenFormContato.addEventListener('click', () => {
        conteinerFormContato.style.display = 'block';
        btnOpenFormContato.style.display = 'none'
    });

    //// Botão de Fechamento do Formulário
    const btnCloseFormContato = document.getElementById('btnClose-formContato');
    btnCloseFormContato.addEventListener('click',()=>{
        conteinerFormContato.style.display = 'none';
        btnOpenFormContato.style.display = 'block'
    })

    // --- Lógica do Formulário ---
    const formContato =document.getElementById('formContato')
    if (formContato) {
        const mensagemFeedback = document.getElementById('mensagem-feedback');
        const nomeInput = document.getElementById('nome');
        const emailInput = document.getElementById('email');

        formContato.addEventListener('submit', function(event) {
            event.preventDefault();
            const nome = nomeInput.value.trim();
            const email = emailInput.value.trim();

            mensagemFeedback.className = 'mensagem';
            
            if (nome === '' || email === '') {
                mensagemFeedback.innerText = 'Por favor, preencha todos os campos obrigatórios.';
                
            } else if (!email.includes('@')) {
                mensagemFeedback.innerText = 'Formato de e-mail inválido. Verifique se contém "@".';
                
            } else { 
                mensagemFeedback.innerText = `Obrigado, ${nome}! Mensagem enviada.`;
                formContato.reset();
                conteinerFormContato.style.display = 'none';
                btnOpenFormContato.style.display = 'block';
            }
        });
    };

});