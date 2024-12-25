const cart = [];

function addToCart(product, price) {
    const existingProduct = cart.find(item => item.product === product);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ product, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    if (cart.length === 0) {
        cartItems.innerHTML = '<tr><td colspan="4">Keranjang kosong</td></tr>';
        return;
    }

    cart.forEach(item => {
        const total = item.price * item.quantity;
        const row = `<tr>
            <td>${item.product}</td>
            <td>Rp${item.price.toLocaleString()}</td>
            <td>${item.quantity}</td>
            <td>Rp${total.toLocaleString()}</td>
        </tr>`;
        cartItems.innerHTML += row;
    });
}

function openPaymentModal() {
    document.getElementById('paymentModal').style.display = 'flex';
}

function closePaymentModal() {
    document.getElementById('paymentModal').style.display = 'none';
}

