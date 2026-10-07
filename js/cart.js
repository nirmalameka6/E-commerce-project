/* ==========================================================================
   ShopSphere - Cart Logic (cart.js)
   ========================================================================== */

function renderCart() {
    const cartContainer = document.getElementById('cart-items-wrapper');
    const summaryContainer = document.getElementById('cart-summary-wrapper');
    const emptyState = document.getElementById('cart-empty-state');

    if (!cartContainer) return;

    const cart = Storage.getCart();

    if (cart.length === 0) {
        cartContainer.style.display = 'none';
        if (summaryContainer) summaryContainer.style.display = 'none';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }

    if (emptyState) emptyState.style.display = 'none';
    cartContainer.style.display = 'block';
    if (summaryContainer) summaryContainer.style.display = 'block';

    // Render items list
    let html = '';
    let subtotal = 0;
    let originalTotal = 0;

    cart.forEach((item, index) => {
        const itemSubtotal = item.price * item.quantity;
        const itemOriginalSubtotal = (item.originalPrice || item.price) * item.quantity;
        subtotal += itemSubtotal;
        originalTotal += itemOriginalSubtotal;

        html += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div>
                    <h4 class="cart-item-title">${item.name}</h4>
                    <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.25rem;">
                        Category: ${item.category} ${item.color ? `| Color: ${item.color}` : ''} ${item.size ? `| Size: ${item.size}` : ''}
                    </div>
                    <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')} <span style="font-size:0.8rem; text-decoration:line-through; color:var(--text-light)">₹${item.originalPrice.toLocaleString('en-IN')}</span></div>
                </div>
                <div class="quantity-picker">
                    <button class="qty-btn" onclick="updateItemQuantity(${index}, ${item.quantity - 1})">-</button>
                    <input type="text" class="qty-input" value="${item.quantity}" readonly>
                    <button class="qty-btn" onclick="updateItemQuantity(${index}, ${item.quantity + 1})">+</button>
                </div>
                <button class="cart-item-remove" title="Remove Item" onclick="removeItem(${index})">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;
    });

    cartContainer.innerHTML = html;

    // Calculate Summary Costs
    const discount = originalTotal - subtotal;
    const deliveryFee = subtotal > 1000 || subtotal === 0 ? 0 : 40;
    const tax = Math.round(subtotal * 0.18);
    const finalTotal = subtotal + deliveryFee + tax;

    if (summaryContainer) {
        summaryContainer.innerHTML = `
            <div class="order-summary-box">
                <h3 class="summary-title">Order Summary</h3>
                <div class="summary-row">
                    <span>Subtotal (${cart.reduce((a, b) => a + b.quantity, 0)} items)</span>
                    <span>₹${originalTotal.toLocaleString('en-IN')}</span>
                </div>
                <div class="summary-row">
                    <span>Product Discount</span>
                    <span class="discount-text">-₹${discount.toLocaleString('en-IN')}</span>
                </div>
                <div class="summary-row">
                    <span>Delivery Charges</span>
                    <span>${deliveryFee === 0 ? '<span class="discount-text">FREE</span>' : '₹' + deliveryFee}</span>
                </div>
                <div class="summary-row">
                    <span>Estimated GST (18%)</span>
                    <span>₹${tax.toLocaleString('en-IN')}</span>
                </div>
                <div class="summary-row total">
                    <span>Total Payable</span>
                    <span>₹${finalTotal.toLocaleString('en-IN')}</span>
                </div>
                <button class="btn btn-primary" style="width: 100%; margin-top: 1.5rem;" onclick="window.location.href='checkout.html'">
                    Proceed to Checkout <i class="fas fa-arrow-right"></i>
                </button>
                <div style="text-align: center; margin-top: 1rem;">
                    <a href="products.html" style="font-size: 0.88rem; color: var(--primary-color); font-weight: 600;">
                        <i class="fas fa-arrow-left"></i> Continue Shopping
                    </a>
                </div>
            </div>
        `;
    }
}

function updateItemQuantity(index, newQty) {
    Storage.updateCartQuantity(index, newQty);
    renderCart();
}

function removeItem(index) {
    Storage.removeFromCart(index);
    renderCart();
}

document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});
