/* ==========================================================================
   ShopSphere - Checkout & Order Processing Logic with SMS Alert (checkout.js)
   ========================================================================== */

function autoFillLoggedInUser() {
    const user = JSON.parse(localStorage.getItem('shopsphere_user'));
    if (!user) return;

    const nameInput = document.getElementById('address-name');
    const phoneInput = document.getElementById('address-phone');
    
    if (nameInput && user.name) nameInput.value = user.name;
    if (phoneInput && user.mobile) phoneInput.value = user.mobile;
}

function renderCheckoutSummary() {
    const summaryContainer = document.getElementById('checkout-order-summary');
    if (!summaryContainer) return;

    const cart = Storage.getCart();
    if (cart.length === 0) {
        window.location.href = 'products.html';
        return;
    }

    let subtotal = 0;
    let originalTotal = 0;
    let itemsHTML = '';

    cart.forEach(item => {
        const itemSubtotal = item.price * item.quantity;
        subtotal += itemSubtotal;
        originalTotal += (item.originalPrice || item.price) * item.quantity;

        itemsHTML += `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; font-size: 0.9rem;">
                <div>
                    <span style="font-weight: 600;">${item.name.substring(0, 28)}...</span>
                    <div style="color: var(--text-muted); font-size: 0.8rem;">Qty: ${item.quantity} ${item.color ? '| Color: ' + item.color : ''}</div>
                </div>
                <span style="font-weight: 700;">₹${itemSubtotal.toLocaleString('en-IN')}</span>
            </div>
        `;
    });

    const discount = originalTotal - subtotal;
    const deliveryFee = subtotal > 1000 ? 0 : 40;
    const tax = Math.round(subtotal * 0.18);
    const finalTotal = subtotal + deliveryFee + tax;

    summaryContainer.innerHTML = `
        <h3 class="summary-title">Order Items (${cart.reduce((a, b) => a + b.quantity, 0)})</h3>
        <div style="max-height: 240px; overflow-y: auto; margin-bottom: 1rem; padding-right: 0.5rem;">
            ${itemsHTML}
        </div>
        <div class="summary-row">
            <span>Subtotal</span>
            <span>₹${originalTotal.toLocaleString('en-IN')}</span>
        </div>
        <div class="summary-row">
            <span>Discount</span>
            <span style="color: var(--success-color); font-weight: 700;">-₹${discount.toLocaleString('en-IN')}</span>
        </div>
        <div class="summary-row">
            <span>Delivery</span>
            <span>${deliveryFee === 0 ? '<span style="color: var(--success-color); font-weight: 700;">FREE</span>' : '₹' + deliveryFee}</span>
        </div>
        <div class="summary-row">
            <span>GST (18%)</span>
            <span>₹${tax.toLocaleString('en-IN')}</span>
        </div>
        <div class="summary-row total">
            <span>Total Payable</span>
            <span>₹${finalTotal.toLocaleString('en-IN')}</span>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    autoFillLoggedInUser();
    renderCheckoutSummary();

    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const fullName = document.getElementById('address-name').value.trim();
            const phone = document.getElementById('address-phone').value.trim();
            const address = document.getElementById('address-line').value.trim();
            const city = document.getElementById('address-city').value.trim();
            const state = document.getElementById('address-state').value.trim();
            const pincode = document.getElementById('address-pincode').value.trim();
            const paymentMethod = document.querySelector('input[name="payment_method"]:checked')?.value || 'COD';

            if (!fullName || !phone || !address || !city || !state || !pincode) {
                showToast('Please complete all delivery address fields.', 'error');
                return;
            }

            const cart = Storage.getCart();
            const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
            const deliveryFee = subtotal > 1000 ? 0 : 40;
            const tax = Math.round(subtotal * 0.18);
            const finalTotal = subtotal + deliveryFee + tax;

            // Generate Order Receipt & SMS Notification Message
            const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
            const smsMessage = `📱 SMS Alert sent to ${phone}: "Your ShopSphere order #${orderId} for ₹${finalTotal.toLocaleString('en-IN')} has been placed successfully! Estimated delivery by Tomorrow, 5 PM."`;
            
            const orderDetails = {
                orderId: orderId,
                date: new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
                items: cart,
                totalAmount: finalTotal,
                paymentMethod: paymentMethod,
                smsMessage: smsMessage,
                shippingAddress: {
                    fullName, phone, address, city, state, pincode
                }
            };

            // Save in LocalStorage
            localStorage.setItem('shopsphere_last_order', JSON.stringify(orderDetails));
            
            // Clear Cart
            Storage.setCart([]);

            showToast('Sending order confirmation SMS...', 'info');

            setTimeout(() => {
                window.location.href = 'order-success.html';
            }, 1000);
        });
    }
});
