document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const clearCartBtn = document.getElementById('clear-cart');
    const payCartBtn = document.getElementById('pay-cart');

// Cargar carrito desde localStorage al cargar la página
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Renderizar el carrito
    function renderCart() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - Cantidad: ${item.quantity} - Subtotal: $${item.quantity * item.price}`;
            cartItems.appendChild(li);
            total += item.quantity * item.price;
        });
        cartTotal.textContent = total;

// Mostrar y ocultar el botón de pagar
        payCartBtn.style.display = cart.length > 0 ? 'inline-block' : 'none';
    }

// Renderizar carrito inicialmente
    renderCart();

// Agregar un producto al carrito
    function addToCart(name, price) {
        const existingItem = cart.find(item => item.name === name && item.price === price);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

// Vaciar el carrito
    clearCartBtn.addEventListener('click', function() {
        cart = [];
        localStorage.removeItem('cart');
        renderCart();
    });

// Evento para pagar
    payCartBtn.addEventListener('click', function() {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const message = `¡Felicitaciones por su compra! Pronto nos pondremos en contacto para realizar la entrega.\nTotal: $${total}`;
        alert(message);
        cart = [];
        localStorage.removeItem('cart');
        renderCart();
    });

// Eventos en cuando añadis al carrito
    productList.addEventListener('click', function(event) {
        if (event.target.classList.contains('btn-add-to-cart')) {
            const productCard = event.target.closest('.card-body');
            const productName = productCard.querySelector('img.card-title-img').alt;
            const productPrice = parseInt(productCard.querySelector('.price-list li').dataset.price);
            addToCart(productName, productPrice);
        }
    });
});