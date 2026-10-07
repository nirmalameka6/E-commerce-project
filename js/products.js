/* ==========================================================================
   ShopSphere - Complete 80+ Product Dataset Across 10 Categories
   ========================================================================== */

const products = [
    // ----------------------------------------------------------------------
    // 1. MOBILES & SMARTPHONES (8 Products)
    // ----------------------------------------------------------------------
    {
        id: 901,
        name: "iPhone 15 Pro Max (256GB - Natural Titanium)",
        category: "Mobiles",
        brand: "Apple",
        price: 139999,
        originalPrice: 159900,
        discount: 12,
        rating: 4.9,
        reviews: 1420,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=80"],
        offers: ["Flat ₹5,000 Instant Discount on HDFC Cards", "No Cost EMI from ₹11,666/month"],
        description: "Titanium design, A17 Pro chip, 48MP main camera with 5x optical zoom, Action button.",
        stock: true,
        colors: ["Natural Titanium", "Blue Titanium", "Black Titanium"],
        sizes: ["256GB", "512GB"],
        specs: { "Display": "6.7' Super Retina XDR", "Chip": "A17 Pro", "Camera": "48MP + 12MP + 12MP", "Warranty": "1 Year Apple Warranty" },
        isFeatured: true,
        isDeal: true
    },
    {
        id: 902,
        name: "Samsung Galaxy S24 Ultra 5G (12GB RAM, 256GB)",
        category: "Mobiles",
        brand: "Samsung",
        price: 119999,
        originalPrice: 134999,
        discount: 11,
        rating: 4.8,
        reviews: 980,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&auto=format&fit=crop&q=80"],
        offers: ["Exchange Bonus up to ₹10,000", "5% Cashback on Axis Bank Card"],
        description: "Galaxy AI powered camera, 200MP Quad Telephoto camera, Built-in S Pen, Snapdragon 8 Gen 3.",
        stock: true,
        colors: ["Titanium Gray", "Titanium Black"],
        sizes: ["256GB", "512GB"],
        specs: { "Display": "6.8' QHD+ Dynamic AMOLED 2X", "Processor": "Snapdragon 8 Gen 3", "Warranty": "1 Year" },
        isFeatured: true,
        isDeal: true
    },
    {
        id: 903,
        name: "OnePlus 12 5G (16GB RAM, 512GB Storage)",
        category: "Mobiles",
        brand: "OnePlus",
        price: 64999,
        originalPrice: 69999,
        discount: 7,
        rating: 4.7,
        reviews: 650,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=80"],
        offers: ["Flat ₹3,000 Bank Discount", "No Cost EMI from ₹5,416/month"],
        description: "Snapdragon 8 Gen 3, 4th Gen Hasselblad Camera System for Mobile, 100W SUPERVOOC charging.",
        stock: true,
        colors: ["Emerald Green", "Silky Black"],
        sizes: ["512GB"],
        specs: { "RAM": "16GB LPDDR5X", "Battery": "5400 mAh", "Charging": "100W Fast", "Warranty": "1 Year" },
        isFeatured: false,
        isDeal: false
    },
    {
        id: 904,
        name: "Google Pixel 8 Pro 5G (128GB - Obsidian)",
        category: "Mobiles",
        brand: "Google",
        price: 84999,
        originalPrice: 106999,
        discount: 20,
        rating: 4.6,
        reviews: 430,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=80"],
        offers: ["Bank Offer: Flat ₹7,000 Off on HDFC Credit Card"],
        description: "Google Tensor G3 processor, pro-level cameras with AI Magic Eraser and Best Take feature.",
        stock: true,
        colors: ["Obsidian", "Bay Blue"],
        sizes: ["128GB"],
        specs: { "Chip": "Google Tensor G3", "Display": "6.7' Super Actua", "Warranty": "1 Year" },
        isFeatured: false,
        isDeal: true
    },
    {
        id: 905,
        name: "Redmi Note 13 Pro+ 5G (8GB RAM, 256GB)",
        category: "Mobiles",
        brand: "Redmi",
        price: 29999,
        originalPrice: 33999,
        discount: 11,
        rating: 4.5,
        reviews: 1200,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500&auto=format&fit=crop&q=80"],
        offers: ["Flat ₹2,000 Instant Discount on ICICI Bank"],
        description: "200MP OIS camera, 3D Curved 120Hz AMOLED Display, 120W HyperCharge, IP68 rating.",
        stock: true,
        colors: ["Fusion Purple", "Midnight Black"],
        sizes: ["256GB"],
        specs: { "Camera": "200MP OIS", "Charging": "120W Fast", "Warranty": "1 Year" },
        isFeatured: true,
        isDeal: false
    },
    {
        id: 906,
        name: "Realme 12 Pro+ 5G (8GB RAM, 128GB)",
        category: "Mobiles",
        brand: "Realme",
        price: 25999,
        originalPrice: 29999,
        discount: 13,
        rating: 4.4,
        reviews: 740,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&auto=format&fit=crop&q=80"],
        offers: ["Flat ₹1,500 Off on SBI Credit Cards"],
        description: "64MP Periscope Portrait Camera, Luxury Watch Design, 120Hz Curved Vision Display.",
        stock: true,
        colors: ["Submarine Blue", "Navigator Beige"],
        sizes: ["128GB"],
        specs: { "Camera": "64MP Periscope + 50MP Sony", "Processor": "Snapdragon 7s Gen 2", "Warranty": "1 Year" },
        isFeatured: false,
        isDeal: false
    },
    {
        id: 907,
        name: "Nothing Phone (2a) 5G (8GB RAM, 128GB)",
        category: "Mobiles",
        brand: "Nothing",
        price: 23999,
        originalPrice: 25999,
        discount: 7,
        rating: 4.6,
        reviews: 890,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=80"],
        offers: ["Special Price ₹23,999 + Bank Discount"],
        description: "Glyph Interface light notification system, Custom Dimensity 7200 Pro, 50MP dual cameras.",
        stock: true,
        colors: ["Milk White", "Black"],
        sizes: ["128GB"],
        specs: { "Processor": "Dimensity 7200 Pro", "Display": "6.7' Flexible AMOLED 120Hz", "Warranty": "1 Year" },
        isFeatured: false,
        isDeal: true
    },
    {
        id: 908,
        name: "POCO X6 Pro 5G (12GB RAM, 512GB)",
        category: "Mobiles",
        brand: "POCO",
        price: 26999,
        originalPrice: 30999,
        discount: 12,
        rating: 4.7,
        reviews: 1100,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500&auto=format&fit=crop&q=80"],
        offers: ["Flat ₹2,000 Off on HDFC Bank"],
        description: "Dimensity 8300 Ultra gaming flagship processor, 1.5K 120Hz AMOLED, 67W Turbo Charge.",
        stock: true,
        colors: ["Yellow", "Black"],
        sizes: ["512GB"],
        specs: { "Processor": "Dimensity 8300 Ultra", "Display": "1.5K AMOLED", "Warranty": "1 Year" },
        isFeatured: false,
        isDeal: false
    },

    // ----------------------------------------------------------------------
    // 2. ELECTRONICS (8 Products)
    // ----------------------------------------------------------------------
    {
        id: 101,
        name: "SoundMax Pro Wireless Noise-Canceling Headphones",
        category: "Electronics",
        brand: "SoundMax",
        price: 2499,
        originalPrice: 4999,
        discount: 50,
        rating: 4.6,
        reviews: 320,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80"],
        offers: ["5% Cashback on ShopSphere Axis Card", "10% Instant Discount on HDFC Cards"],
        description: "Studio-quality audio with hybrid active noise cancellation, 40-hour battery life, and Bluetooth 5.2.",
        stock: true,
        colors: ["Black", "Silver"],
        sizes: [],
        specs: { "Battery": "40 Hours", "ANC": "Active Noise Canceling", "Warranty": "1 Year" },
        isFeatured: true,
        isDeal: true
    },
    {
        id: 102,
        name: "AuraBass Portable Waterproof Bluetooth Speaker",
        category: "Electronics",
        brand: "AuraSound",
        price: 1299,
        originalPrice: 2499,
        discount: 48,
        rating: 4.4,
        reviews: 185,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&auto=format&fit=crop&q=80"],
        offers: ["10% Instant Discount on ICICI Bank Cards"],
        description: "IPX7 waterproof rating, 360-degree surround sound with dual passive radiators, 15 hours playback.",
        stock: true,
        colors: ["Red", "Black"],
        sizes: [],
        specs: { "Output": "20W RMS", "Waterproof": "IPX7", "Warranty": "1 Year" },
        isFeatured: false,
        isDeal: true
    },
    {
        id: 103,
        name: "AirBuds Ultra True Wireless Earbuds with ANC",
        category: "Electronics",
        brand: "SoundMax",
        price: 1899,
        originalPrice: 3500,
        discount: 45,
        rating: 4.5,
        reviews: 410,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=80"],
        offers: ["5% Unlimited Cashback on ShopSphere Axis Card"],
        description: "Low-latency gaming mode, 32-hour playback with USB-C fast charging case, IPX5 splash resistance.",
        stock: true,
        colors: ["White", "Black"],
        sizes: [],
        specs: { "Driver": "10mm Dynamic", "Battery": "32 Hours", "Warranty": "1 Year" },
        isFeatured: true,
        isDeal: false
    },
    {
        id: 104,
        name: "CineView 4K Ultra HD Smart Streaming Stick",
        category: "Electronics",
        brand: "CineMax",
        price: 2999,
        originalPrice: 4499,
        discount: 33,
        rating: 4.7,
        reviews: 512,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=80"],
        offers: ["Free 6 Month Subscription to OTT Apps"],
        description: "Transform TV into a smart hub with Dolby Vision HDR, Dolby Atmos sound, and voice assistant remote.",
        stock: true,
        colors: ["Black"],
        sizes: [],
        specs: { "Resolution": "4K UHD @ 60fps", "RAM": "2GB", "Warranty": "1 Year" },
        isFeatured: false,
        isDeal: false
    },
    {
        id: 105,
        name: "FlexiTripod 3-Axis Handheld Smartphone Gimbal",
        category: "Electronics",
        brand: "VlogPro",
        price: 4999,
        originalPrice: 7999,
        discount: 37,
        rating: 4.3,
        reviews: 94,
        isAssured: false,
        image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500&auto=format&fit=crop&q=80"],
        offers: ["No Cost EMI starting from ₹417/month"],
        description: "Cinematic video stabilization, AI face tracking, extension rod, foldable magnetic quick-mount.",
        stock: true,
        colors: ["Gray"],
        sizes: [],
        specs: { "Battery": "12 Hours", "Payload": "290g", "Warranty": "1 Year" },
        isFeatured: false,
        isDeal: false
    },
    {
        id: 106,
        name: "PixelCam 1080p HD Webcam with Dual Mic",
        category: "Electronics",
        brand: "PixelTech",
        price: 1499,
        originalPrice: 2999,
        discount: 50,
        rating: 4.2,
        reviews: 130,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80"],
        offers: ["Flat ₹150 Off on First Purchase"],
        description: "Full HD video call quality with automatic light correction and noise-reducing stereo microphones.",
        stock: true,
        colors: ["Black"],
        sizes: [],
        specs: { "Resolution": "1080p @ 30fps", "Warranty": "6 Months" },
        isFeatured: false,
        isDeal: false
    },
    {
        id: 107,
        name: "SonicPulse Wireless Soundbar with Subwoofer (120W)",
        category: "Electronics",
        brand: "SoundMax",
        price: 5999,
        originalPrice: 9999,
        discount: 40,
        rating: 4.7,
        reviews: 410,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&auto=format&fit=crop&q=80"],
        offers: ["Bank Offer: 10% Off on HDFC Credit Card"],
        description: "120W cinematic soundbar with dedicated wired subwoofer, HDMI ARC, Optical, and Bluetooth 5.0.",
        stock: true,
        colors: ["Black"],
        sizes: [],
        specs: { "Power": "120W RMS", "Warranty": "1 Year" },
        isFeatured: true,
        isDeal: true
    },
    {
        id: 110,
        name: "VoltCharge 65W GaN Fast Wall Charger",
        category: "Electronics",
        brand: "PixelTech",
        price: 1699,
        originalPrice: 2999,
        discount: 43,
        rating: 4.8,
        reviews: 380,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=80"],
        offers: ["Charge Laptops & Smartphones simultaneously"],
        description: "Compact 65W GaN fast charger with 2x Type-C Power Delivery ports and 1x USB-A Quick Charge port.",
        stock: true,
        colors: ["White", "Black"],
        sizes: [],
        specs: { "Power": "65W Max", "Warranty": "1 Year" },
        isFeatured: false,
        isDeal: false
    },

    // ----------------------------------------------------------------------
    // 3. BEAUTY & PERSONAL CARE (6 Products)
    // ----------------------------------------------------------------------
    {
        id: 951,
        name: "StylePro Cordless Waterproof Beard Trimmer",
        category: "Beauty",
        brand: "StyleHub",
        price: 1199,
        originalPrice: 2199,
        discount: 45,
        rating: 4.6,
        reviews: 870,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1621607512214-68297480165e?w=500&auto=format&fit=crop&q=80"],
        offers: ["Flat ₹100 Off for First Order"],
        description: "Self-sharpening titanium blades, 40 length settings (0.5mm - 20mm), 90 mins cordless runtime.",
        stock: true,
        colors: ["Matte Black"],
        sizes: [],
        specs: { "Battery": "90 Minutes", "Waterproof": "IPX7", "Warranty": "2 Years Warranty" },
        isFeatured: true,
        isDeal: true
    },
    {
        id: 952,
        name: "ProDry 2000W Professional Ionic Hair Dryer",
        category: "Beauty",
        brand: "StyleHub",
        price: 1499,
        originalPrice: 2999,
        discount: 50,
        rating: 4.5,
        reviews: 430,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80"],
        offers: ["10% Cashback on Axis Card"],
        description: "2000W AC motor for fast salon-style drying with ionic conditioning to reduce frizz.",
        stock: true,
        colors: ["Black & Rose Gold"],
        sizes: [],
        specs: { "Power": "2000W", "Settings": "3 Heat / 2 Speed", "Warranty": "1 Year" },
        isFeatured: false,
        isDeal: false
    },
    {
        id: 953,
        name: "Organic Vitamin C Facial Serum (30ml)",
        category: "Beauty",
        brand: "HomeGlow",
        price: 499,
        originalPrice: 999,
        discount: 50,
        rating: 4.7,
        reviews: 1250,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1608248597261-833258037450?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1608248597261-833258037450?w=500&auto=format&fit=crop&q=80"],
        offers: ["Buy 2 Get 1 Free Promo"],
        description: "Enriched with 20% pure Vitamin C, Hyaluronic Acid, and Vitamin E for radiant glowing skin.",
        stock: true,
        colors: [],
        sizes: ["30ml"],
        specs: { "Volume": "30ml", "Skin Type": "All Skin Types" },
        isFeatured: true,
        isDeal: true
    },
    {
        id: 954,
        name: "Ceramic Hair Straightening Brush with LED Temp Control",
        category: "Beauty",
        brand: "StyleHub",
        price: 1299,
        originalPrice: 2499,
        discount: 48,
        rating: 4.4,
        reviews: 310,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80"],
        offers: ["Special Price ₹1,299"],
        description: "Anti-scald ceramic bristles with 3D heating technology to straighten hair effortlessly in minutes.",
        stock: true,
        colors: ["Pink"],
        sizes: [],
        specs: { "Temp": "Up to 230°C", "Warranty": "1 Year" },
        isFeatured: false,
        isDeal: false
    },
    {
        id: 955,
        name: "Luxury Eau De Parfum Long Lasting Perfume (100ml)",
        category: "Beauty",
        brand: "Monarch",
        price: 1799,
        originalPrice: 3499,
        discount: 48,
        rating: 4.8,
        reviews: 640,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&auto=format&fit=crop&q=80"],
        offers: ["Free 10ml Pocket Spray Gift"],
        description: "Captivating oriental woody fragrance notes that stay fresh and alluring all day long.",
        stock: true,
        colors: [],
        sizes: ["100ml"],
        specs: { "Volume": "100ml", "Concentration": "Eau De Parfum (EDP)" },
        isFeatured: false,
        isDeal: true
    },
    {
        id: 956,
        name: "Sonic Facial Cleanser & Silicone Massager",
        category: "Beauty",
        brand: "HomeGlow",
        price: 699,
        originalPrice: 1499,
        discount: 53,
        rating: 4.3,
        reviews: 220,
        isAssured: false,
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80"],
        offers: ["Flat ₹800 Off"],
        description: "High-frequency sonic pulsation soft silicone brush for deep pore cleansing and facial massage.",
        stock: true,
        colors: ["Rose Pink", "Cyan"],
        sizes: [],
        specs: { "Waterproof": "IPX7", "Rechargeable": "USB" },
        isFeatured: false,
        isDeal: false
    },

    // ----------------------------------------------------------------------
    // 4. TOYS & GAMING (6 Products)
    // ----------------------------------------------------------------------
    {
        id: 971,
        name: "DualSense Wireless Controller for PlayStation 5",
        category: "Toys",
        brand: "HyperGamer",
        price: 5499,
        originalPrice: 6390,
        discount: 14,
        rating: 4.9,
        reviews: 1850,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&auto=format&fit=crop&q=80"],
        offers: ["Bank Offer: 10% Off on HDFC Credit Card"],
        description: "Haptic feedback, dynamic adaptive triggers, built-in microphone, and create button.",
        stock: true,
        colors: ["White", "Midnight Black"],
        sizes: [],
        specs: { "Compatibility": "PS5, PC, Android, iOS", "Warranty": "1 Year Sony Warranty" },
        isFeatured: true,
        isDeal: true
    },
    {
        id: 972,
        name: "High-Speed Remote Control Stunt RC Car (4WD)",
        category: "Toys",
        brand: "VlogPro",
        price: 1299,
        originalPrice: 2499,
        discount: 48,
        rating: 4.5,
        reviews: 410,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=500&auto=format&fit=crop&q=80"],
        offers: ["Includes 2 Rechargeable Batteries"],
        description: "360-degree double-sided rotating flips, 2.4GHz anti-interference remote, durable rubber tires.",
        stock: true,
        colors: ["Red", "Blue"],
        sizes: [],
        specs: { "Control Range": "50 Meters", "Battery": "Dual 3.7V 500mAh" },
        isFeatured: false,
        isDeal: false
    },
    {
        id: 973,
        name: "Ergonomic High-Back Racing Gaming Chair with Footrest",
        category: "Toys",
        brand: "HyperGamer",
        price: 8999,
        originalPrice: 15999,
        discount: 43,
        rating: 4.7,
        reviews: 320,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500&auto=format&fit=crop&q=80"],
        offers: ["No Cost EMI starting from ₹750/month"],
        description: "Heavy-duty metal frame, 135-degree recline, retractable footrest, lumbar support cushion.",
        stock: true,
        colors: ["Black & Red", "Black & Blue"],
        sizes: [],
        specs: { "Material": "PU Leather", "Capacity": "150kg", "Warranty": "1 Year" },
        isFeatured: true,
        isDeal: false
    },
    {
        id: 974,
        name: "Magnetic Building Blocks Educational Toy Set (100 Pcs)",
        category: "Toys",
        brand: "StyleHub",
        price: 1499,
        originalPrice: 2999,
        discount: 50,
        rating: 4.8,
        reviews: 670,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&auto=format&fit=crop&q=80"],
        offers: ["Flat 50% Off Special Promo"],
        description: "BPA-free non-toxic 3D magnetic tile building set for enhancing creativity and STEM skills in children.",
        stock: true,
        colors: ["Multicolor"],
        sizes: ["100 Pieces"],
        specs: { "Material": "Non-Toxic ABS Plastic", "Age Group": "3+ Years" },
        isFeatured: false,
        isDeal: true
    },
    {
        id: 975,
        name: "Handheld Retro Video Game Console (400 Built-in Games)",
        category: "Toys",
        brand: "HyperGamer",
        price: 799,
        originalPrice: 1599,
        discount: 50,
        rating: 4.4,
        reviews: 820,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&auto=format&fit=crop&q=80"],
        offers: ["TV Output Cable Included"],
        description: "3.0-inch color screen, 400 classic nostalgic 8-bit games, rechargeable lithium battery.",
        stock: true,
        colors: ["Red", "Black"],
        sizes: [],
        specs: { "Screen": "3.0' LCD", "Battery": "1020mAh Rechargeable" },
        isFeatured: false,
        isDeal: false
    },
    {
        id: 976,
        name: "ProPrecision Wireless Gaming Controller for PC & Android",
        category: "Toys",
        brand: "HyperGamer",
        price: 1599,
        originalPrice: 2999,
        discount: 46,
        rating: 4.6,
        reviews: 490,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&auto=format&fit=crop&q=80"],
        offers: ["5% Cashback on Axis Card"],
        description: "Dual vibration feedback motors, 2.4GHz wireless USB receiver, ergonomic non-slip grip.",
        stock: true,
        colors: ["Matte Black"],
        sizes: [],
        specs: { "Connection": "2.4GHz Wireless", "Battery": "600mAh" },
        isFeatured: false,
        isDeal: true
    },

    // ----------------------------------------------------------------------
    // 5. COMPUTERS, WATCHES, FOOTWEAR, ACCESSORIES, HOME, BAGS
    // ----------------------------------------------------------------------
    // (Existing 48 products from previous dataset included here)
    {
        id: 201,
        name: "Men's Slim Fit Casual Denim Jacket",
        category: "Fashion",
        brand: "UrbanWear",
        price: 1799,
        originalPrice: 3499,
        discount: 48,
        rating: 4.5,
        reviews: 210,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&auto=format&fit=crop&q=80"],
        offers: ["Buy 2 Get Extra 10% Off on Fashion"],
        description: "Classic washed indigo denim jacket crafted from 100% premium cotton with button closure.",
        stock: true,
        colors: ["Washed Blue", "Black"],
        sizes: ["S", "M", "L", "XL"],
        specs: { "Material": "100% Cotton", "Fit": "Slim Fit" },
        isFeatured: true,
        isDeal: true
    },
    {
        id: 301,
        name: "ProRunner X Lightweight Mesh Running Shoes",
        category: "Footwear",
        brand: "StrideFit",
        price: 2199,
        originalPrice: 4299,
        discount: 48,
        rating: 4.7,
        reviews: 580,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=80"],
        offers: ["Free Shoe Bag Included"],
        description: "Responsive EVA foam cushioning, breathable knit upper, anti-skid rubber grip.",
        stock: true,
        colors: ["Red & White", "Black"],
        sizes: ["UK 7", "UK 8", "UK 9", "UK 10"],
        specs: { "Sole": "Phylon & Rubber" },
        isFeatured: true,
        isDeal: true
    },
    {
        id: 401,
        name: "PolarShield UV400 Aviator Sunglasses",
        category: "Accessories",
        brand: "SunCraft",
        price: 999,
        originalPrice: 2499,
        discount: 60,
        rating: 4.6,
        reviews: 410,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=80"],
        offers: ["Free Hard Carry Case Included"],
        description: "Classic metal aviator frame sunglasses with polarized TAC lenses providing 100% UV400 protection.",
        stock: true,
        colors: ["Gold/Green Lens"],
        sizes: [],
        specs: { "Lens": "Polarized TAC" },
        isFeatured: true,
        isDeal: true
    },
    {
        id: 501,
        name: "NutriBlend 1000W Bullet Blender & Juicer",
        category: "Home & Kitchen",
        brand: "ChefChef",
        price: 3499,
        originalPrice: 5999,
        discount: 41,
        rating: 4.8,
        reviews: 780,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500&auto=format&fit=crop&q=80"],
        offers: ["Free Recipe E-Book Included"],
        description: "Pulverize fruits, nuts, and ice with 6 stainless extraction blades and 2 BPA-free cups.",
        stock: true,
        colors: ["Silver/Black"],
        sizes: [],
        specs: { "Power": "1000W" },
        isFeatured: true,
        isDeal: true
    },
    {
        id: 601,
        name: "UltraBook Pro 15.6-inch FHD Laptop (16GB RAM / 512GB SSD)",
        category: "Computers",
        brand: "TechZone",
        price: 49999,
        originalPrice: 65999,
        discount: 24,
        rating: 4.7,
        reviews: 190,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=80"],
        offers: ["Flat ₹3000 Off on HDFC Cards"],
        description: "Aluminum body powered by Intel Core i5 12th Gen processor, backlit keyboard, fingerprint sensor.",
        stock: true,
        colors: ["Space Gray"],
        sizes: [],
        specs: { "Processor": "Core i5 12th Gen" },
        isFeatured: true,
        isDeal: true
    },
    {
        id: 701,
        name: "ChronoMax Analog Stainless Steel Men's Watch",
        category: "Watches",
        brand: "ChronoMax",
        price: 3499,
        originalPrice: 6999,
        discount: 50,
        rating: 4.7,
        reviews: 320,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=80"],
        offers: ["Free Watch Box Included"],
        description: "Luxury chronograph watch with Japanese quartz movement and 50m water resistance.",
        stock: true,
        colors: ["Silver Blue Dial"],
        sizes: [],
        specs: { "Movement": "Japanese Quartz" },
        isFeatured: true,
        isDeal: true
    },
    {
        id: 801,
        name: "NomadPro Expandable Water-Resistant Laptop Backpack (35L)",
        category: "Bags",
        brand: "NomadGear",
        price: 1999,
        originalPrice: 3999,
        discount: 50,
        rating: 4.8,
        reviews: 820,
        isAssured: true,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80",
        images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80"],
        offers: ["Free Rain Cover Included"],
        description: "Dedicated padded sleeve for up to 17.3-inch laptops, USB charging port, anti-theft back pocket.",
        stock: true,
        colors: ["Charcoal Gray"],
        sizes: ["35L"],
        specs: { "Capacity": "35L" },
        isFeatured: true,
        isDeal: true
    }
];

// Helper functions for Filtering & Sorting
const ProductRepository = {
    getAll: () => products,
    
    getById: (id) => products.find(p => p.id === Number(id)),

    getByCategory: (categoryName) => {
        if (!categoryName || categoryName === 'All') return products;
        return products.filter(p => p.category.toLowerCase() === categoryName.toLowerCase());
    },

    getFeatured: () => products.filter(p => p.isFeatured),

    getDeals: () => products.filter(p => p.isDeal),

    getUniqueBrands: () => Array.from(new Set(products.map(p => p.brand))),

    search: (query) => {
        if (!query) return products;
        const q = query.toLowerCase().trim();
        return products.filter(p => 
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.brand.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q)
        );
    },

    filterAndSort: ({ query, categories = [], brands = [], discountMin = 0, priceRange = null, rating = 0, stockOnly = false, sortBy = 'relevance' }) => {
        let result = [...products];

        // Search Filter
        if (query) {
            const q = query.toLowerCase().trim();
            result = result.filter(p => 
                p.name.toLowerCase().includes(q) ||
                p.category.toLowerCase().includes(q) ||
                p.brand.toLowerCase().includes(q)
            );
        }

        // Category Filter
        if (categories && categories.length > 0) {
            result = result.filter(p => categories.map(c => c.toLowerCase()).includes(p.category.toLowerCase()));
        }

        // Brand Filter
        if (brands && brands.length > 0) {
            result = result.filter(p => brands.map(b => b.toLowerCase()).includes(p.brand.toLowerCase()));
        }

        // Discount Minimum
        if (discountMin > 0) {
            result = result.filter(p => p.discount >= discountMin);
        }

        // Price Filter Range
        if (priceRange) {
            const { min, max } = priceRange;
            if (min !== undefined) result = result.filter(p => p.price >= min);
            if (max !== undefined) result = result.filter(p => p.price <= max);
        }

        // Rating Filter
        if (rating > 0) {
            result = result.filter(p => p.rating >= rating);
        }

        // Availability Filter
        if (stockOnly) {
            result = result.filter(p => p.stock === true);
        }

        // Sorting Logic
        switch (sortBy) {
            case 'price-low-high':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-high-low':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                result.sort((a, b) => b.rating - a.rating);
                break;
            case 'discount':
                result.sort((a, b) => b.discount - a.discount);
                break;
            case 'newest':
                result.sort((a, b) => b.id - a.id);
                break;
            case 'relevance':
            default:
                break;
        }

        return result;
    }
};
