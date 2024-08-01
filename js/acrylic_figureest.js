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
        cartItem.textContent = `${item.name} - ${item.price} € x ${item.quantity}`;
        cartItems.appendChild(cartItem);
    });

    const cartProductsTextarea = document.getElementById('cart-products');
    const numbersText = cart.map(item => item.id).join(', ');
    cartProductsTextarea.textContent = `Your product numbers: ${numbersText}`;
}

function toggleCart() {
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

document.getElementById('search-button').addEventListener('click', function() {
    var price = document.getElementById('price-range').value;
    var pageName = 'acrylicest' + price + '.html';
    window.location.href = pageName;
});

document.getElementById('price-range').addEventListener('input', function() {
    document.getElementById('price-value').textContent = this.value;
});

$(document).ready(function() {
    $('.category').click(function() {
        var imageSrc = 'новый-путь-к-изображению.jpg'; 
        $(this).css('background-image', 'url(' + imageSrc + ')');
    });
});