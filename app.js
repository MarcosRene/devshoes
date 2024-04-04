// Elementos do DOM
const modalOverlay = document.querySelector('.modal-overlay');
const productCardBtns = document.querySelectorAll('.product-card');
const sizeItems = document.querySelectorAll('.size-list li');
const closeModalBtn = document.getElementById('close-modal-button');
const cancelBtn = document.getElementById('cancel-button');
const decrementBtn = document.getElementById('decrement-button');
const incrementBtn = document.getElementById('increment-button');
const quantityInput = document.getElementById('quantity-input');
const purchaseBtn = document.getElementById('purchase-button');
const shoppingCartBtn = document.getElementById('shopping-cart-button');

// Variável para armazenar o número de itens no carrinho
let cartItems = 1;

// Função para alternar a exibição do modal
const handleToggleModal = () => modalOverlay.classList.toggle('show');

// Função para fechar o modal e atualizar o carrinho
function closeModalAndUpdateCart() {
  handleToggleModal();
  quantityInput.value = 0;
}

// Função para lidar com a seleção de item
function handleItemSelected() {
  // Removendo a classe 'active' de todos os itens
  sizeItems.forEach((item) => {
    item.classList.remove('active');
  });
  // Adicionando a classe 'active' apenas ao item clicado
  this.classList.add('active');
}

// Adicionando evento de clique a cada item da lista
sizeItems.forEach((item) => {
  item.addEventListener('click', handleItemSelected);
});

// Função para adicionar um item ao carrinho
function addToCart() {
  shoppingCartBtn.classList.add('shopping-bag-icon');
  shoppingCartBtn.dataset.items = cartItems++;
}

// Adicionando evento de clique aos botões do produto para abrir o modal
productCardBtns.forEach((cardBtn) =>
  cardBtn.addEventListener('click', handleToggleModal)
);

// Adicionando eventos de clique aos botões de fechar o modal
closeModalBtn.addEventListener('click', closeModalAndUpdateCart);
cancelBtn.addEventListener('click', handleToggleModal);

// Adicionando evento de clique ao botão de compra para adicionar item ao carrinho e fechar o modal
purchaseBtn.addEventListener('click', () => {
  addToCart();
  closeModalAndUpdateCart();
});

// Função para decrementar a quantidade
function decrementQuantity() {
  let currentValue = parseInt(quantityInput.value);
  if (currentValue > 0) {
    quantityInput.value = currentValue - 1;
  }
}

// Função para incrementar a quantidade
function incrementQuantity() {
  let currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
}

// Adicionando eventos de clique aos botões de decremento e incremento
decrementBtn.addEventListener('click', decrementQuantity);
incrementBtn.addEventListener('click', incrementQuantity);
