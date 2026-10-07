/* ==========================================================================
   ShopSphere - Global Application Logic (app.js with Flipkart-Style Extras)
   ========================================================================== */

// Fallback Placeholder Image URL
const FALLBACK_IMAGE_URL = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80';

// --------------------------------------------------------------------------
// 1. Toast Notification System
// --------------------------------------------------------------------------
function showToast(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let icon = 'fa-info-circle';
    if (type === 'success') icon = 'fa-check-circle';
    if (type === 'error') icon = 'fa-exclamation-circle';
    
    toast.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'toastIn 0.3s ease reverse forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// --------------------------------------------------------------------------
// 2. Storage Helpers (Cart, Wishlist, Theme, Recently Viewed)
// --------------------------------------------------------------------------
const Storage = {
    getCart: () => JSON.parse(localStorage.getItem('shopsphere_cart')) || [],
    
    setCart: (cart) => {
        localStorage.setItem('shopsphere_cart', JSON.stringify(cart));
        updateHeaderBadges();
    },

    addToCart: (productId, quantity = 1, selectedColor = null, selectedSize = null) => {
        const cart = Storage.getCart();
        const product = ProductRepository.getById(productId);
        if (!product) return;

        const existingIndex = cart.findIndex(item => 
            item.id === Number(productId) && 
            item.color === selectedColor && 
            item.size === selectedSize
        );

        if (existingIndex > -1) {
            cart[existingIndex].quantity += quantity;
        } else {
            cart.push({
                id: Number(productId),
                name: product.name,
                price: product.price,
                originalPrice: product.originalPrice,
                image: product.image,
                category: product.category,
                quantity: quantity,
                color: selectedColor || (product.colors && product.colors[0]) || null,
                size: selectedSize || (product.sizes && product.sizes[0]) || null
            });
        }

        Storage.setCart(cart);
        showToast(`"${product.name.substring(0, 22)}..." added to cart! 🛒`, 'success');
    },

    removeFromCart: (index) => {
        const cart = Storage.getCart();
        cart.splice(index, 1);
        Storage.setCart(cart);
        showToast('Item removed from cart', 'info');
    },

    updateCartQuantity: (index, newQty) => {
        const cart = Storage.getCart();
        if (newQty <= 0) {
            Storage.removeFromCart(index);
            return;
        }
        cart[index].quantity = newQty;
        Storage.setCart(cart);
    },

    getWishlist: () => JSON.parse(localStorage.getItem('shopsphere_wishlist')) || [],

    setWishlist: (wishlist) => {
        localStorage.setItem('shopsphere_wishlist', JSON.stringify(wishlist));
        updateHeaderBadges();
    },

    toggleWishlist: (productId) => {
        let wishlist = Storage.getWishlist();
        const id = Number(productId);
        const index = wishlist.indexOf(id);

        if (index > -1) {
            wishlist.splice(index, 1);
            showToast(`Removed from wishlist ❤️`, 'info');
        } else {
            wishlist.push(id);
            showToast(`Added to wishlist ❤️`, 'success');
        }

        Storage.setWishlist(wishlist);
        return wishlist.includes(id);
    },

    isInWishlist: (productId) => {
        const wishlist = Storage.getWishlist();
        return wishlist.includes(Number(productId));
    },

    getRecentlyViewed: () => JSON.parse(localStorage.getItem('shopsphere_recent')) || [],

    addRecentlyViewed: (productId) => {
        let recent = Storage.getRecentlyViewed();
        const id = Number(productId);
        recent = recent.filter(rId => rId !== id);
        recent.unshift(id);
        if (recent.length > 8) recent.pop();
        localStorage.setItem('shopsphere_recent', JSON.stringify(recent));
    },

    getTheme: () => localStorage.getItem('shopsphere_theme') || 'light',
    
    setTheme: (theme) => {
        localStorage.setItem('shopsphere_theme', theme);
        applyTheme(theme);
    }
};

// --------------------------------------------------------------------------
// 3. UI Initialization & Flipkart Autocomplete Search
// --------------------------------------------------------------------------
function updateHeaderBadges() {
    const cart = Storage.getCart();
    const wishlist = Storage.getWishlist();

    const cartCountEl = document.getElementById('cart-count');
    const wishlistCountEl = document.getElementById('wishlist-count');

    const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (cartCountEl) cartCountEl.textContent = totalCartItems;
    if (wishlistCountEl) wishlistCountEl.textContent = wishlist.length;
}

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        const toggleIcon = document.querySelector('#theme-toggle-btn i');
        if (toggleIcon) toggleIcon.className = 'fas fa-sun';
    } else {
        document.body.classList.remove('dark-mode');
        const toggleIcon = document.querySelector('#theme-toggle-btn i');
        if (toggleIcon) toggleIcon.className = 'fas fa-moon';
    }
}

function initHeaderAndFooter() {
    // Theme Switcher
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const currentTheme = Storage.getTheme();
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            Storage.setTheme(newTheme);
        });
    }
    applyTheme(Storage.getTheme());

    // Flipkart-Style Search Input & Autocomplete Suggestions Box
    const searchForm = document.getElementById('header-search-form');
    const searchInput = document.getElementById('header-search-input');

    if (searchForm && searchInput) {
        let autoBox = document.createElement('div');
        autoBox.className = 'search-autocomplete-box';
        autoBox.id = 'search-autocomplete-box';
        searchInput.parentElement.appendChild(autoBox);

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();
            if (query.length < 2) {
                autoBox.style.display = 'none';
                return;
            }

            const matches = ProductRepository.search(query).slice(0, 5);
            if (matches.length > 0) {
                autoBox.innerHTML = matches.map(m => `
                    <div class="autocomplete-item" onclick="window.location.href='product-details.html?id=${m.id}'">
                        <img src="${m.image}" onerror="this.onerror=null; this.src='${FALLBACK_IMAGE_URL}'" style="width: 32px; height: 32px; object-fit: contain;">
                        <div>
                            <div style="font-weight: 600;">${m.name}</div>
                            <div style="font-size: 0.75rem; color: var(--text-muted);">${m.category} | ₹${m.price.toLocaleString('en-IN')}</div>
                        </div>
                    </div>
                `).join('');
                autoBox.style.display = 'block';
            } else {
                autoBox.style.display = 'none';
            }
        });

        document.addEventListener('click', (e) => {
            if (!searchForm.contains(e.target)) {
                autoBox.style.display = 'none';
            }
        });

        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (searchInput.value.trim()) {
                window.location.href = `products.html?search=${encodeURIComponent(searchInput.value.trim())}`;
            }
        });
    }

    // Auth status in header
    const authBtnContainer = document.getElementById('auth-status-container');
    if (authBtnContainer) {
        const currentUser = JSON.parse(localStorage.getItem('shopsphere_user'));
        if (currentUser) {
            authBtnContainer.innerHTML = `
                <div style="display: flex; align-items: center; gap: 0.5rem; color: white;">
                    <span style="font-size: 0.88rem; font-weight: 600;"><i class="fas fa-user-circle"></i> Hi, ${currentUser.name.split(' ')[0]}</span>
                    <button id="logout-btn" title="Logout" style="color: #ff6161; font-size: 0.9rem; padding: 0.2rem 0.5rem;"><i class="fas fa-sign-out-alt"></i></button>
                </div>
            `;
            document.getElementById('logout-btn').addEventListener('click', () => {
                localStorage.removeItem('shopsphere_user');
                showToast('Logged out successfully', 'info');
                setTimeout(() => window.location.reload(), 800);
            });
        }
    }

    updateHeaderBadges();
}

// Flipkart Product Card HTML Renderer
function createProductCardHTML(product) {
    const isSaved = Storage.isInWishlist(product.id);
    const offerSnippet = product.offers && product.offers[0] ? product.offers[0] : 'Bank Offer 10% Off';

    return `
        <div class="product-card" data-id="${product.id}">
            ${product.discount > 0 ? `<span class="product-badge-discount">${product.discount}% OFF</span>` : ''}
            <button class="product-wishlist-btn ${isSaved ? 'active' : ''}" onclick="event.stopPropagation(); handleWishlistToggle(${product.id}, this)" title="Add to Wishlist">
                <i class="${isSaved ? 'fas' : 'far'} fa-heart"></i>
            </button>
            <div class="product-img-wrapper" onclick="window.location.href='product-details.html?id=${product.id}'" style="cursor:pointer">
                <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy" onerror="this.onerror=null; this.src='${FALLBACK_IMAGE_URL}'">
            </div>
            <div class="product-details">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.25rem;">
                    <span class="product-category">${product.category}</span>
                    ${product.isAssured ? `<span class="assured-tag"><i class="fas fa-check-circle"></i> Assured</span>` : ''}
                </div>
                <h3 class="product-title" onclick="window.location.href='product-details.html?id=${product.id}'" style="cursor:pointer">${product.name}</h3>
                
                <div class="product-rating-row">
                    <span class="rating-pill">${product.rating} <i class="fas fa-star" style="font-size:0.65rem;"></i></span>
                    <span class="rating-count">(${product.reviews.toLocaleString('en-IN')})</span>
                </div>

                <div class="product-price-row">
                    <span class="price-current">₹${product.price.toLocaleString('en-IN')}</span>
                    ${product.originalPrice > product.price ? `<span class="price-original">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
                </div>

                <div class="offer-tag-snippet"><i class="fas fa-tag"></i> ${offerSnippet}</div>

                <div class="product-card-actions">
                    <button class="btn-add-cart" onclick="Storage.addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <button class="btn-view-details" onclick="window.location.href='product-details.html?id=${product.id}'">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function handleWishlistToggle(productId, btnElement) {
    const isNowInWishlist = Storage.toggleWishlist(productId);
    const icon = btnElement.querySelector('i');
    if (isNowInWishlist) {
        btnElement.classList.add('active');
        icon.className = 'fas fa-heart';
    } else {
        btnElement.classList.remove('active');
        icon.className = 'far fa-heart';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initHeaderAndFooter();
});
