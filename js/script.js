let cart = [];

function addToCart(productId, productName, price) {
    const product = {
        id: productId,
        name: productName,
        price: price,
        quantity: 1
    };

    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push(product);
    }
    updateCart();
    saveCart();
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);

    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.name} - ${item.price} EUR x ${item.quantity}`; // Изменено на EUR
        cartItems.appendChild(cartItem);
    });

    const productNumbers = document.getElementById('product-numbers');
    const numbersText = cart.map(item => item.id).join(', ');
    productNumbers.textContent = `Your product numbers: ${numbersText}`;

    const purchaseForm = document.getElementById('purchase-form');
    purchaseForm.message.value = `Your product numbers: ${numbersText}`;
}

function showCart() {
    const cartElement = document.getElementById('cart');
    cartElement.style.display = cartElement.style.display === 'none' ? 'block' : 'none';
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

function clearCart() {
    cart = [];
    updateCart();
    saveCart();
}

window.onload = function() {
    loadCart();
};

