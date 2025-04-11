function enviarWhats(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !mensagem) {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
    }

    const telefone = '5511989389110';
    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
    const MsgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${MsgFormatada}`;
    window.open(url, 'blank');
    }