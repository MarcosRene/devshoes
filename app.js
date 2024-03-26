// Elementos do DOM
const modalOverlay = document.querySelector('.modal-overlay')
const productCardBtn = document.querySelectorAll('.product-card')
const closeModalBtn = document.getElementById('close-modal-button')
const decrementBtn = document.getElementById('decrement-button')
const incrementBtn = document.getElementById('increment-button')
const quantityInput = document.getElementById('quantity-input')
const purchaseBtn = document.getElementById('purchase-button')
const shoppingCartBtn = document.getElementById('shopping-cart-button')

// Função para alternar a exibição do modal
function handleToggleModal() {
  modalOverlay.classList.toggle('show')
}

// Adicionando evento de clique aos botões do produto para abrir o modal
productCardBtn.forEach((cardBtn) =>
  cardBtn.addEventListener('click', handleToggleModal)
)

// Adicionando evento de clique ao botão de fechar o modal
closeModalBtn.addEventListener('click', () => {
  handleToggleModal()
  quantityInput.value = 0
})

// Adicionando evento de clique ao botão de fechar o modal e adicionar 1 no botão do carrinho
purchaseBtn.addEventListener('click', () => {
  shoppingCartBtn.setAttribute('class', 'shopping-bag-icon')
  shoppingCartBtn.setAttribute('data-items', 1)
  handleToggleModal()
})

// Função para decrementar a quantidade
function decrementQuantity() {
  let currentValue = parseInt(quantityInput.value)
  if (currentValue > 0) {
    quantityInput.value = currentValue - 1
  }
}

// Função para incrementar a quantidade
function incrementQuantity() {
  let currentValue = parseInt(quantityInput.value)
  quantityInput.value = currentValue + 1
}

// Adicionando eventos de clique aos botões de decremento e incremento
decrementBtn.addEventListener('click', decrementQuantity)
incrementBtn.addEventListener('click', incrementQuantity)
