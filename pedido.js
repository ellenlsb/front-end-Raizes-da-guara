// 1. Encontra o novo botão de voltar pelo ID
const btnVoltar = document.getElementById('btn-voltar-produtos');

// 2. Diz ao JavaScript para ouvir o clique
if (btnVoltar) {
    btnVoltar.addEventListener('click', () => {
        // 🚨 A nova rota!
        // Leva o usuário para a página de produtos (consumidor.html)
        window.location.href = '/consumidor.html';
    });
}