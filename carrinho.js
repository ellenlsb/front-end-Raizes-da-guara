// Seleção dos endereços
document.querySelectorAll('.location-card').forEach(card => {
  card.addEventListener('click', function() {
    document.querySelectorAll('.location-card').forEach(c => c.classList.remove('selecionado'));
    this.classList.add('selecionado');
  });
});

// Seleção das formas de pagamento
document.querySelectorAll('.payment-option').forEach(opt => {
  opt.addEventListener('click', function() {
    document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selecionado'));
    this.classList.add('selecionado');
  });
});
// 1. Encontra todos os controles de quantidade
const quantityControls = document.querySelectorAll('.quantity-control');

// 2. Passa por CADA um dos controles
quantityControls.forEach(control => {
    const minusButton = control.querySelector('.quantity-btn:first-child');
    const plusButton = control.querySelector('.quantity-btn:last-child');
    const quantitySpan = control.querySelector('.quantity');

    // --- LÓGICA DO BOTÃO DE AUMENTAR (+) (Continua a mesma) ---
    plusButton.addEventListener('click', () => {
        let currentQuantity = parseInt(quantitySpan.textContent);
        currentQuantity += 1;
        quantitySpan.textContent = currentQuantity;
        // FUTURO: Chamar função para recalcular o preço total aqui
    });

    // --- BOTÃO DE DIMINUIR (-) 
    minusButton.addEventListener('click', () => {
        let currentQuantity = parseInt(quantitySpan.textContent);
        
        const cartItem = control.closest('.cart-item'); 

        if (currentQuantity > 1) {
            //  CASO 1: Se for 2, 3, 4, etc., ele apenas diminui
            currentQuantity -= 1;
            quantitySpan.textContent = currentQuantity;
        } else if (currentQuantity === 1) {
            // CASO 2: Se for 1, ele remove o item inteiro!
            // .remove() é o comando mágico que tira o elemento do HTML.
            cartItem.remove(); 
        }

    });
});

function renderCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let cartContainer = document.getElementById('cart-items');
  let subtotal = 0;
  let qtdTotal = 0;
  cartContainer.innerHTML = '';
  cart.forEach(item => {
    qtdTotal += item.quantity;
    let itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    cartContainer.innerHTML += `
      <div class="cart-item">
        <span>${item.name}</span>
        <span>Preço: R$ ${item.price.toFixed(2)}</span>
        <span>Qtd: ${item.quantity}</span>
        <span>Subtotal: R$ ${itemTotal.toFixed(2)}</span>
      </div>
    `;
  });
  document.getElementById('cart-count').textContent = qtdTotal;
  document.getElementById('cart-subtotal').textContent = 'R$ ' + subtotal.toFixed(2);
  document.getElementById('cart-total').textContent = 'R$ ' + subtotal.toFixed(2);
}
window.onload = renderCart;











