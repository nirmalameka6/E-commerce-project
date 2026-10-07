# 🛒 ShopSphere E-Commerce Website — Full Stack Development Project Report

---

## 1. Cover Page

* **Project Title**: ShopSphere — Modern E-Commerce Web Application
* **Student Name**: Nirmala Meka
* **Course Name**: Full Stack Web Development (FSD) Mini-Project
* **Instructor Name**: Course Instructor / Evaluation Panel
* **Submission Date**: October 7, 2026
* **GitHub Repository**: [https://github.com/nirmalameka6/E-commerce-project.git](https://github.com/nirmalameka6/E-commerce-project.git)

---

## 2. Introduction

**ShopSphere** is a modern, responsive, feature-rich E-Commerce Product Listing and Shopping Platform inspired by Indian e-commerce leaders like Flipkart and Amazon. 

### Project Goals & Objectives
- **Goal**: To design and develop a seamless, client-side e-commerce platform that allows users to discover products, filter by multiple criteria, manage shopping carts and wishlists, and complete checkout with automated order notifications.
- **Objectives**:
  1. Build a robust catalog with **80+ realistic products** spanning **10 categories**.
  2. Implement an intuitive Flipkart-inspired UI featuring rating pills (`4.5 ★`), Flipkart Assured seals, bank offer badges, category strip ribbons, and multi-thumbnail gallery switchers.
  3. Ensure persistent client-side data management using JavaScript ES6+ modules and `localStorage`.
  4. Design a fully responsive layout with dark mode support.
  5. Provide simulated authentication, address management, and SMS order alerts upon order confirmation.

---

## 3. Project Structure

The project follows a clean, modular file structure separating HTML markups, CSS styles, JavaScript logic, and assets.

```
shopsphere-ecommerce/
│
├── index.html              # Homepage with hero banner, category strip, featured & deals
├── products.html           # Full product catalog with filters & sorting
├── product-details.html    # Detailed product view with gallery & pincode checker
├── cart.html               # Shopping cart with quantity & price summary
├── wishlist.html           # Saved items page with move-to-cart functionality
├── login.html              # Centered user authentication login form
├── register.html           # User account registration form
├── checkout.html           # Delivery address & payment method selection
├── order-success.html      # Order placement confirmation & customer SMS notification
│
├── css/
│   ├── style.css           # Core stylesheet (custom variables, UI cards, grid layouts)
│   ├── responsive.css      # Tablet & mobile media queries, off-canvas drawers
│   └── dark-mode.css       # Dark theme CSS variable overrides
│
├── js/
│   ├── products.js         # 80+ Product dataset & ProductRepository search/filter API
│   ├── app.js              # Global app controller, header search, dark mode, toast UI
│   ├── cart.js             # Cart state management, line items rendering & totals
│   ├── wishlist.js         # Wishlist management & item transfers
│   ├── auth.js             # User login/registration state & session handling
│   └── checkout.js         # Address auto-fill, order validation & SMS generator
│
├── README.md               # Project overview and setup instructions
└── PROJECT_DOCUMENTATION.md # Comprehensive submission documentation report
```

---

## 4. Technical Stack

| Category | Technology / Tools |
|---|---|
| **Frontend Framework** | HTML5, CSS3 (Flexbox & CSS Grid), JavaScript (ES6+ Vanilla) |
| **Icons & Fonts** | FontAwesome 6.4.0 (CDN), Google Fonts (Inter / Roboto) |
| **Data Persistence** | HTML5 Web Storage API (`localStorage` & `sessionStorage`) |
| **Development Environment** | Visual Studio Code, Node.js (v24.21.0), `http-server` |
| **Version Control & Hosting** | Git, GitHub (`nirmalameka6/E-commerce-project`) |

---

## 5. Features and Functionalities

1. **Category Strip Ribbon & Hero Banners**: Top category strip displaying 10 main categories (Mobiles, Electronics, Fashion, Footwear, Beauty, Toys, Accessories, Home & Kitchen, Computers, Watches, Bags) for quick navigation.
2. **Interactive Search Autocomplete**: Header search bar with live auto-suggestions dropdown showing matching product titles, thumbnails, and prices.
3. **Multi-Filter & Sorting Engine**:
   - Filter by Category (Multi-checkbox)
   - Filter by Price Range slider (₹0 – ₹150,000+)
   - Filter by Minimum Customer Rating (1★ to 4★+)
   - Filter by Brand & Availability
   - Sort by: Price (Low to High), Price (High to Low), Rating, Latest Arrivals.
4. **Rich Product Cards**: Display green rating badges (`4.5 ★`), Assured verification seals, bank discount tags, strikethrough original prices, percentage discounts, and instant Wishlist ❤️ / Cart 🛒 action buttons.
5. **Interactive Product Details Page**:
   - Multi-image gallery with thumbnail switcher.
   - Pincode delivery estimator (e.g., enter `560001` to check delivery speed).
   - Bank promotional offer box & trust guarantee badges.
   - Dynamic related products carousel.
6. **Cart & Cost Breakdown**:
   - Item quantity adjustments (`+` / `-`) with real-time recalculation.
   - Price calculation breakdown: Items Subtotal, Instant Discounts, 18% GST calculation, and Free Delivery threshold.
7. **Wishlist Management**: One-click move items from Wishlist directly into Cart.
8. **Simulated Auth & Checkout**:
   - User Registration & Login with session state.
   - Checkout auto-fills stored user address.
   - Payment choices: Credit/Debit Card, UPI / NetBanking, Cash on Delivery (COD).
9. **Order Success & Customer SMS Alert**: Displays order summary and generates a simulated SMS notification message formatted for the customer's phone number.
10. **Dark Mode Toggle**: Persistent theme state across all 9 pages using `localStorage`.

---

## 6. Screenshots and Visuals

### 1. Homepage (`index.html`)
> **Description**: Displays the top category ribbon, promotional slider banner, deals of the day grid, and recently viewed products.
```
+-------------------------------------------------------------------------+
| [Logo: ShopSphere]   [ Search products... ]   [Dark Mode] [Cart(3)]    |
+-------------------------------------------------------------------------+
| [Mobiles] [Electronics] [Fashion] [Footwear] [Beauty] [Toys] [Watches]  |
+-------------------------------------------------------------------------+
|                    HERO BANNER: FESTIVE SALE - UP TO 70% OFF            |
+-------------------------------------------------------------------------+
| DEALS OF THE DAY                                                        |
| [Card 1: Smartphone 4.5★]  [Card 2: Laptop 4.8★]  [Card 3: Watch 4.3★] |
+-------------------------------------------------------------------------+
```

### 2. Products Catalog (`products.html`)
> **Description**: Displays fixed 240px vertical sidebar filter panel on the left and 80+ products responsive grid on the right with top sorting bar.
```
+-------------------------------------------------------------------------+
| FILTERS (Clear All)      | Showing 86 Products      Sort: [ Price: Low ]|
| - Category: [x] Mobiles  | +------------------+ +------------------+    |
| - Price: ₹500 - ₹50,000  | | [Img] iPhone 15  | | [Img] Sony TV    |    |
| - Rating: [x] 4★ & above | | 4.8 ★ | Assured  | | 4.6 ★ | Assured  |    |
| - Brand: Apple, Samsung  | | ₹79,900 (10% off)| | ₹54,990 (15% off)|    |
+--------------------------+ +------------------+ +------------------+    |
```

### 3. Login Page (`login.html`)
> **Description**: Aesthetic centered login card with shadow elevation, email/password inputs, and quick social login buttons.

### 4. Order Confirmation & SMS (`order-success.html`)
> **Description**: Displays checkmark animation, order details, and an SMS alert box containing order verification details.

---

## 7. Database & Client Data Architecture

Since ShopSphere runs as a client-side Web Application, data is managed via structured JavaScript modules (`js/products.js`) and persistent `localStorage` key-value collections.

### 1. Product Data Schema (`js/products.js`)
```json
{
  "id": "mob-01",
  "name": "Apple iPhone 15 (128GB) - Black",
  "category": "Mobiles",
  "brand": "Apple",
  "price": 79900,
  "originalPrice": 89900,
  "discount": 11,
  "rating": 4.8,
  "reviewsCount": 12450,
  "inStock": true,
  "isAssured": true,
  "images": [
    "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600"
  ],
  "description": "Dynamic Island, 48MP Main Camera with 2x Telephoto, All-day battery life.",
  "specs": {
    "Display": "6.1-inch Super Retina XDR",
    "Processor": "A16 Bionic Chip",
    "Camera": "48MP Main + 12MP Ultra Wide"
  }
}
```

### 2. LocalStorage Schemas
- **`shopsphere_cart`**: Array of `{ productId, quantity, addedAt }`
- **`shopsphere_wishlist`**: Array of `productId` strings
- **`shopsphere_user`**: Object `{ name, email, phone, address, pincode }`
- **`shopsphere_orders`**: Array of `{ orderId, date, items, totalAmount, shippingAddress, paymentMethod }`

---

## 8. Challenges Faced & Solutions

1. **CSS Grid Sidebar Layout Shift**:
   - *Challenge*: The `<div id="filter-backdrop">` element inside the catalog layout caused CSS Grid to treat it as a grid column, pushing the products grid off-screen.
   - *Solution*: Relocated `filter-backdrop` outside `.catalog-layout` and explicitly styled `.filter-sidebar { grid-column: 1; width: 240px; }` and `.products-section { grid-column: 2; width: 100%; }`.

2. **Full-Width Form Stretching on Login/Register Pages**:
   - *Challenge*: Global container styles caused `.auth-card` inputs to stretch full-width across large viewports.
   - *Solution*: Enforced `.auth-card` constraints with `max-width: 450px !important; margin: 3rem auto !important;` and set `.form-control { width: 100% !important; }`.

3. **External Unsplash Image Loading Failures**:
   - *Challenge*: Network glitches or ad-blockers occasionally broke remote product image URLs.
   - *Solution*: Implemented global `onerror` fallback handlers in `js/app.js` (`onerror="this.onerror=null; this.src='...'"`), pointing to clean SVG placeholders.

---

## 9. Conclusion

The **ShopSphere E-Commerce Project** successfully demonstrates a practical, end-to-end frontend e-commerce solution. 

### Key Achievements:
- Built a realistic marketplace UI supporting **80+ items across 10 categories**.
- Implemented robust multi-faceted searching, sorting, and filtering without external backend dependencies.
- Created persistent cart, wishlist, and authentication workflows using client-side web storage APIs.
- Delivered a fully responsive, dark-mode-ready design with customer order notifications.

### Learning Outcomes:
- Gained deep practical experience in modular DOM manipulation and state management with ES6+ JavaScript.
- Mastered CSS Grid & Flexbox layout techniques for complex catalog structures.
- Improved skills in Version Control workflows using Git and GitHub.

---

## 10. GitHub Repository & Code Files

* **GitHub Repository Link**: [https://github.com/nirmalameka6/E-commerce-project.git](https://github.com/nirmalameka6/E-commerce-project.git)
* **Local Project Directory**: `C:\Users\Admin\.gemini\antigravity\scratch\shopsphere-ecommerce\`
* **Compressed ZIP Submission File**: `C:\Users\Admin\.gemini\antigravity\scratch\shopsphere-ecommerce.zip`
* **Live Local Server Link**: `http://localhost:5000/index.html`
