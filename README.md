# 🛒 ShopSphere - Modern E-Commerce Product Listing Website

ShopSphere is a **modern, responsive, and fully functional E-Commerce Product Listing Application** built with vanilla HTML5, CSS3, and JavaScript (ES6+). Inspired by modern e-commerce user experiences such as Flipkart and Amazon, ShopSphere maintains an original brand identity, modern glassmorphism aesthetics, dynamic filtering, interactive cart management, simulated checkout, theme persistence, and smooth responsive design.

Designed specifically as a **Full Stack Development (FSD) Mini Project** and portfolio application.

---

## 🌟 Key Features

### 1. 🏠 Homepage
- **Hero Promo Banner**: Promotional headline, call-to-action buttons ("Shop Now", "View Deals"), floating product showcase image, and festive discount badge.
- **Interactive Category Badges**: Grid of 8 main categories with icons and hover micro-interactions.
- **Featured Products & Deals Grid**: Dynamic rendering of trending products and discounted daily offers.

### 2. 🛍️ Product Catalog & Search
- **Live Search**: Instant keyword search matching product title, category, brand, and description with real-time URL sync.
- **Multi-Faceted Sidebar Filter**:
  - **Price Range**: Under ₹500, ₹500–₹1,000, ₹1,000–₹5,000, ₹5,000–₹10,000, Above ₹10,000.
  - **Categories**: Electronics, Fashion, Footwear, Accessories, Home & Kitchen, Computers, Watches, Bags.
  - **Ratings**: ⭐ 4.0 & above, ⭐ 3.0 & above.
  - **Stock Status**: Filter for In-Stock items only.
  - **Reset Button**: Single-click filter reset.
- **Dynamic Sorting**: Relevance, Price (Low to High), Price (High to Low), Highest Rating, Biggest Discount, and Newest Arrivals.
- **Mobile Filter Drawer**: Slide-over filter panel for smaller screens with backdrop overlay.

### 3. 📦 Product Details Page
- High-resolution main image with smooth hover zoom effect.
- Brand name badge, price calculation, discount tag, and stock status pill.
- Interactive color and size variant selectors.
- Quantity picker (`+` / `-`).
- Detailed technical specifications table.
- Related Products grid showcasing items in the same category.

### 4. 🛒 Shopping Cart & Order Summary
- Itemized cart table displaying thumbnail, title, category, selected variants, and price.
- Dynamic quantity adjustment and single-click item removal.
- Calculated Order Summary:
  - Subtotal
  - Discount
  - Free Delivery Threshold calculation (Free above ₹1,000)
  - Estimated 18% GST
  - Final Payable Amount
- Full state persistence using `localStorage`.

### 5. ❤️ Wishlist Manager
- Save favorite items with heart toggle button from product cards or detail view.
- One-click "Move to Cart" action.
- Header counter badges updated instantly across all pages.

### 6. 👤 Simulated Authentication
- **Login**: Email/Mobile and password validation with simulated JWT session storage.
- **Register**: Full Name, Email, Mobile, Password verification, and Terms checkbox.
- Header user greetings ("Hi, User") with logout capability.

### 7. 💳 Checkout & Receipt Confirmation
- Delivery Address input form (Full Name, Phone, Street, City, State, PIN code).
- Payment options: Cash on Delivery (COD), UPI (GPay/PhonePe), Credit/Debit Card.
- Instant order generation creating receipt with unique ID (e.g. `#ORD-948210`).
- Order Success page with itemized summary and shipping overview.

### 8. 🌙 Dark Mode & Responsive Design
- Dark mode theme switcher with `localStorage` preference persistence.
- Fluid CSS Grid and Flexbox layouts.
- Zero horizontal scrolling on mobile, tablet, or desktop devices.
- Non-intrusive Toast notification system.

---

## 📊 Dataset Overview

The project features **48 realistic products** across 8 diverse categories stored in `js/products.js`:

| Category | Products | Key Brands |
| :--- | :--- | :--- |
| **Electronics** | 6 | SoundMax, AuraSound, CineMax, VlogPro, PixelTech |
| **Fashion** | 6 | UrbanWear, StyleHub, StreetStyle, FlexFit |
| **Footwear** | 6 | StrideFit, Monarch, UrbanWear, StyleHub |
| **Accessories** | 6 | SunCraft, LeatherCraft, GearVault |
| **Home & Kitchen** | 6 | ChefChef, HomeGlow |
| **Computers** | 6 | TechZone, HyperGramer, DataVault |
| **Watches** | 6 | ChronoMax, FitTech |
| **Bags** | 6 | NomadGear, StyleHub, FlexFit, TravelMax |

---

## 📁 Project Structure

```text
shopsphere-ecommerce/
│
├── index.html              # Homepage with hero banner, categories, featured items & deals
├── products.html           # Catalog with search, filter sidebar, drawer, and sorting
├── product-details.html    # Product view with image zoom, variants, specs, and related items
├── cart.html               # Shopping cart manager & order summary breakdown
├── wishlist.html           # Wishlist page with item management & move-to-cart
├── login.html              # User login interface (simulated auth)
├── register.html           # User registration form
├── checkout.html           # Shipping address & payment options form
├── order-success.html      # Order receipt confirmation screen
│
├── css/
│   ├── style.css           # Core styling, variables, layout, components, cards, buttons, toasts
│   ├── responsive.css      # Media queries, tablet & mobile layout adjustments, drawer styling
│   └── dark-mode.css       # Dark mode theme overrides
│
├── js/
│   ├── products.js         # 48 product objects array and Repository search/filter/sort algorithms
│   ├── app.js              # Global utilities, theme switcher, toast alerts, badge counters
│   ├── cart.js              # Cart rendering, quantity adjustment, cost calculation
│   ├── wishlist.js          # Wishlist rendering and move to cart actions
│   ├── auth.js              # Simulated authentication handlers
│   └── checkout.js          # Order address validation and receipt generator
│
└── README.md               # Complete project documentation
```

---

## 🚀 How to Run the Project

1. **Clone or Download** the project repository.
2. Open the project folder.
3. Open `index.html` directly in any web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).
4. *Optional*: Use Live Server extension in VS Code for optimal hot-reloading experience.

### Deploying to Hosting Platforms
- **GitHub Pages**: Upload the repository to GitHub, enable GitHub Pages under repository settings pointing to the root directory.
- **Netlify**: Drag and drop the `shopsphere-ecommerce` folder into Netlify Drop.
- **Vercel**: Import repository into Vercel dashboard and deploy with static site defaults.

---

## 🔮 Future Enhancements

- **Backend API Integration**: Connect to Node.js / Express REST API.
- **Database Storage**: Replace `localStorage` with MongoDB or PostgreSQL database.
- **Real Payment Gateway**: Integrate Razorpay, Stripe, or PayPal SDK.
- **Admin Dashboard**: Analytics chart, product inventory manager, order status tracking (Pending, Shipped, Delivered).
- **Product Reviews & Ratings**: User submission form for star ratings and photo reviews.
- **AI Recommendation Engine**: "You might also like" based on user browsing history.
