// O nome das páginas de destino (mude se os arquivos tiverem nomes diferentes)
const PAGINA_CONSUMIDOR = 'consumidor.html';
const PAGINA_PRODUTOR = 'fornecedor.html'; // Usei 'produtor' pois é o valor que está no seu HTML (producer)

// 1. Encontra os dois elementos importantes no formulário
const selectTipoUsuario = document.getElementById('user-type');
const formCadastro = document.querySelector('.form'); // Encontramos o formulário inteiro

// 2. Diz ao formulário para "ouvir" quando ele for enviado (submit)
if (formCadastro && selectTipoUsuario) {
    formCadastro.addEventListener('submit', (event) => {
        // A. Impedimos que o formulário tente enviar a página para algum lugar
        // que ele não sabe, para que o JS possa decidir.
        event.preventDefault(); 
        
        // B. Pega o valor que foi escolhido no campo "Tipo de Usuário"
        // Será 'consumer' ou 'producer' (pelos valores que você definiu no HTML)
        const tipoEscolhido = selectTipoUsuario.value;

        let destino = '';

        // C. O JavaScript decide o caminho baseado na escolha:
        if (tipoEscolhido === 'consumer') {
            destino = PAGINA_CONSUMIDOR;
        } else if (tipoEscolhido === 'producer') {
            destino = PAGINA_PRODUTOR;
        } else {
            // Caso de segurança: Se nada foi escolhido (não deve acontecer com <select>)
            console.error('Tipo de usuário inválido selecionado.');
            alert('Por favor, selecione um tipo de usuário antes de cadastrar.');
            return; // Para o código aqui
        }

        // D. 🚀 Leva a pessoa para a página correta!
        window.location.href = destino;
    });
}