/* ==========================================================================
   ShopSphere - Wishlist Logic (wishlist.js)
   ========================================================================== */

function renderWishlist() {
    const grid = document.getElementById('wishlist-grid');
    const emptyState = document.getElementById('wishlist-empty-state');
    if (!grid) return;

    const wishlistIds = Storage.getWishlist();

    if (wishlistIds.length === 0) {
        grid.style.display = 'none';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }

    if (emptyState) emptyState.style.display = 'none';
    grid.style.display = 'grid';

    let html = '';
    wishlistIds.forEach(id => {
        const product = ProductRepository.getById(id);
        if (product) {
            html += `
                <div class="product-card" data-id="${product.id}">
                    <button class="product-wishlist-btn active" onclick="removeFromWishlist(${product.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                    <div class="product-img-wrapper" onclick="window.location.href='product-details.html?id=${product.id}'" style="cursor:pointer">
                        <img src="${product.image}" alt="${product.name}" class="product-img">
                    </div>
                    <div class="product-details">
                        <span class="product-category">${product.category}</span>
                        <h3 class="product-title" onclick="window.location.href='product-details.html?id=${product.id}'" style="cursor:pointer">${product.name}</h3>
                        <div class="product-price-row">
                            <span class="price-current">₹${product.price.toLocaleString('en-IN')}</span>
                            ${product.originalPrice > product.price ? `<span class="price-original">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
                        </div>
                        <button class="btn btn-primary" style="width: 100%; padding: 0.5rem; font-size: 0.88rem;" onclick="moveToCart(${product.id})">
                            <i class="fas fa-shopping-cart"></i> Move to Cart
                        </button>
                    </div>
                </div>
            `;
        }
    });

    grid.innerHTML = html;
}

function removeFromWishlist(id) {
    Storage.toggleWishlist(id);
    renderWishlist();
}

function moveToCart(id) {
    Storage.addToCart(id);
    Storage.toggleWishlist(id);
    renderWishlist();
}

document.addEventListener('DOMContentLoaded', () => {
    renderWishlist();
});
