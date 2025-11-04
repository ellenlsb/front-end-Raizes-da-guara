// Se existir botão para ir ao carrinho, evento para navegação
const btnCarrinho = document.getElementById('btn-ir-para-carrinho');
if (btnCarrinho) {
  btnCarrinho.addEventListener('click', () => {
    window.location.href = 'carrinho.html';
  });
}

// Função para adicionar item ao carrinho e salvar no localStorage
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let found = cart.find(item => item.id === product.id);
  if (found) {
    found.quantity += 1;
  } else {
    cart.push({...product, quantity: 1});
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

// Função para atualizar o contador no header
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let totalQtd = cart.reduce((sum, item) => sum + item.quantity, 0);
  let cartCountElement = document.getElementById('cart-count');
  if (cartCountElement) {
    cartCountElement.textContent = totalQtd;
  }
}

// Vincular evento de clique a todos os botões adicionar ao carrinho
document.querySelectorAll('.btn-add-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const product = {
      id: btn.getAttribute('data-id'),
      name: btn.getAttribute('data-name'),
      price: parseFloat(btn.getAttribute('data-price'))
    };
    addToCart(product);
  });
});

// Inicializa contador ao carregar a página
updateCartCount();
