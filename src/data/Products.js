export const products = [
    {
        id: 1,
        name: "Sony WH-1000XM5 Wireless Headphones",
        price: 29999,
        originalPrice: 34999,
        images: [
            "https://m.media-amazon.com/images/I/61D4Z3yKPAL._AC_UF1000,1000_QL80_.jpg",
            "https://m.media-amazon.com/images/I/61aExnMAq4L.jpg",
            "https://m.media-amazon.com/images/I/61G5JoU0eSL.jpg"
        ],
        category: "audio-devices",
        rating: 4.8,
        reviews: 1247,
        inStock: true,
        isNew: true,
        isFeatured: true,
        discount: 14,
        description: "Industry-leading noise cancellation with premium sound quality",
        brand: "Sony",
        tags: ["wireless", "noise-cancelling", "premium"],
        features: ["Noise Cancelling", "Up to 30h battery", "Touch Controls"],
        inTheBox: ["Headphones", "Carrying Case", "USB-C Cable", "User Manual"],
        specifications: [
            { name: "Driver Unit", value: "30mm" },
            { name: "Battery Life", value: "30 Hours" },
            { name: "Bluetooth", value: "Yes, v5.2" }
        ],
        reviewsList: [
            {
                id: 1,
                user: "John D.",
                rating: 5,
                title: "Excellent product",
                content: "Amazing sound and build quality.",
                date: "2024-10-15",
                images: []
            }
        ],
        ratingDistribution: { 5: 0.8, 4: 0.15, 3: 0.03, 2: 0.01, 1: 0.01 },
        warranty: "1 year manufacturer warranty",
        sku: "SONYWH1000XM5"
    },
    {
        id: 2,
        name: "Apple Watch Series 9",
        price: 41900,
        originalPrice: 41900,
        images: [
            "https://images.unsplash.com/photo-1570791086173-1f3c8fec4a07?w=600",
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQKW3ref",
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKU63"
        ],
        category: "smart-wearables",
        rating: 4.6,
        reviews: 892,
        inStock: true,
        isNew: false,
        isFeatured: true,
        discount: 0,
        description: "Advanced health monitoring with seamless iOS integration",
        brand: "Apple",
        tags: ["smartwatch", "health", "fitness"],
        features: ["Heart Rate Monitoring", "Blood Oxygen", "Always-On Display"],
        inTheBox: ["Watch", "Magnetic Charger", "Strap", "User Guide"],
        specifications: [
            { name: "Display", value: "Always-On Retina" },
            { name: "Chip", value: "S9 SiP" },
            { name: "Compatibility", value: "iOS only" }
        ],
        reviewsList: [
            {
                id: 2,
                user: "Jane S.",
                rating: 4,
                title: "Very Useful",
                content: "Fitness tracking is spot on.",
                date: "2024-09-10",
                images: []
            }
        ],
        ratingDistribution: { 5: 0.6, 4: 0.25, 3: 0.1, 2: 0.03, 1: 0.02 },
        warranty: "1 year Apple warranty",
        sku: "APPLEWS9GPS"
    },
    {
        id: 3,
        name: "JBL Charge 5 Bluetooth Speaker",
        price: 12999,
        originalPrice: 15999,
        images: [
            "https://images.unsplash.com/photo-1687363251769-560d957b8847?w=600",
            "https://m.media-amazon.com/images/I/71p2GsvUr+L.jpg",
            "https://m.media-amazon.com/images/I/71v1LAc8O3L.jpg"
        ],
        category: "audio-devices",
        rating: 4.4,
        reviews: 654,
        inStock: true,
        isNew: false,
        isFeatured: false,
        discount: 19,
        description: "Powerful portable speaker with IP67 waterproof rating",
        brand: "JBL",
        tags: ["bluetooth", "portable", "waterproof"],
        features: ["20h Playtime", "Waterproof", "Powerbank Function"],
        inTheBox: ["Speaker", "USB-C Cable", "Manual"],
        specifications: [
            { name: "Battery", value: "7500mAh" },
            { name: "Output Power", value: "30W" }
        ],
        reviewsList: [
            {
                id: 3,
                user: "Ankit M.",
                rating: 5,
                title: "Bass is amazing!",
                content: "Perfect for travel and poolside.",
                date: "2025-01-12",
                images: []
            }
        ],
        ratingDistribution: { 5: 0.7, 4: 0.2, 3: 0.07, 2: 0.02, 1: 0.01 },
        warranty: "1 year JBL warranty",
        sku: "JBLCHARGE5"
    },
    {
        id: 4,
        name: "iPhone 15 Pro Max",
        price: 159900,
        originalPrice: 159900,
        images: [
            "https://images.unsplash.com/photo-1695822822491-d92cee704368?w=600",
            "https://m.media-amazon.com/images/I/81CgtwSII3L.jpg",
            "https://m.media-amazon.com/images/I/71dTzrVhNGL.jpg"
        ],
        category: "smartphones",
        rating: 4.9,
        reviews: 2341,
        inStock: false,
        isNew: true,
        isFeatured: true,
        discount: 0,
        description: "Latest iPhone with titanium design and A17 Pro chip",
        brand: "Apple",
        tags: ["smartphone", "premium", "latest"],
        features: ["Titanium Body", "A17 Chip", "ProMotion Display"],
        inTheBox: ["iPhone", "USB-C Cable", "Documentation"],
        specifications: [
            { name: "Processor", value: "A17 Pro" },
            { name: "Display", value: "6.7-inch ProMotion" }
        ],
        reviewsList: [
            {
                id: 4,
                user: "Ravi K.",
                rating: 5,
                title: "Beast phone",
                content: "Camera and battery are top-class.",
                date: "2025-03-02",
                images: []
            }
        ],
        ratingDistribution: { 5: 0.85, 4: 0.1, 3: 0.03, 2: 0.01, 1: 0.01 },
        warranty: "1 year Apple India warranty",
        sku: "IP15PM256GB"
    },
    {
        id: 5,
        name: "Samsung Galaxy Buds2 Pro",
        price: 17999,
        originalPrice: 19999,
        images: [
            "https://images.unsplash.com/photo-1691452194257-57e0f170c32e?w=600",
            "https://m.media-amazon.com/images/I/61NsmOcYz7L.jpg",
            "https://m.media-amazon.com/images/I/71p7PLsbK-L.jpg"
        ],
        category: "audio-devices",
        rating: 4.3,
        reviews: 445,
        inStock: true,
        isNew: false,
        isFeatured: false,
        discount: 10,
        description: "True wireless earbuds with intelligent ANC",
        brand: "Samsung",
        tags: ["wireless", "earbuds", "anc"],
        features: ["ANC", "360 Audio", "Comfort Fit"],
        inTheBox: ["Earbuds", "Charging Case", "Eartips", "Cable"],
        specifications: [
            { name: "Battery Life", value: "8 Hours (24 w/ case)" },
            { name: "Bluetooth", value: "5.3" }
        ],
        reviewsList: [
            {
                id: 5,
                user: "Sana T.",
                rating: 4,
                title: "Good ANC and quality",
                content: "Noise cancelling is effective even in trains.",
                date: "2025-04-20",
                images: []
            }
        ],
        ratingDistribution: { 5: 0.6, 4: 0.3, 3: 0.08, 2: 0.015, 1: 0.005 },
        warranty: "1 year Samsung India warranty",
        sku: "SGBUDS2PRO"
    },
    {
        id: 6,
        name: "Fitbit Charge 6",
        price: 19999,
        originalPrice: 22999,
        images: [
            "https://images.unsplash.com/photo-1585823339274-26b392cefe45?w=600",
            "https://m.media-amazon.com/images/I/61UwyDEJpxL.jpg",
            "https://m.media-amazon.com/images/I/71iRCbRjQ0L.jpg"
        ],
        category: "smart-wearables",
        rating: 4.2,
        reviews: 321,
        inStock: true,
        isNew: false,
        isFeatured: false,
        discount: 13,
        description: "Advanced fitness tracker with built-in GPS",
        brand: "Fitbit",
        tags: ["fitness", "gps", "health"],
        features: ["Heart Rate", "Built-in GPS", "SpO2 Monitoring"],
        inTheBox: ["Fitness Band", "USB Charger", "Strap", "Manual"],
        specifications: [
            { name: "Battery", value: "7 Days" },
            { name: "Water Resistant", value: "Yes, up to 50m" }
        ],
        reviewsList: [
            {
                id: 6,
                user: "Mohan J.",
                rating: 4,
                title: "Good for tracking",
                content: "Accurate step and heart tracking.",
                date: "2025-01-05",
                images: []
            }
        ],
        ratingDistribution: { 5: 0.5, 4: 0.35, 3: 0.1, 2: 0.03, 1: 0.02 },
        warranty: "1 year Fitbit warranty",
        sku: "FITCHG6"
    },
    {
        id: 7,
        name: "Echo Dot (5th Gen)",
        price: 4999,
        originalPrice: 5499,
        images: [
            "https://m.media-amazon.com/images/I/61MbLLagiVL._AC_UF1000,1000_QL80_.jpg",
            "https://m.media-amazon.com/images/I/61pYaZuqybL.jpg",
            "https://m.media-amazon.com/images/I/81I0bFhZ0yL.jpg"
        ],
        category: "home-gadgets",
        rating: 4.5,
        reviews: 1876,
        inStock: true,
        isNew: false,
        isFeatured: true,
        discount: 9,
        description: "Smart speaker with Alexa voice control",
        brand: "Amazon",
        tags: ["smart-home", "voice-control", "alexa"],
        features: ["Alexa", "Bluetooth", "Clock Display"],
        inTheBox: ["Echo Dot", "Power Adapter", "User Guide"],
        specifications: [
            { name: "Connectivity", value: "Wi-Fi + Bluetooth" },
            { name: "Power", value: "15W Adapter" }
        ],
        reviewsList: [
            {
                id: 7,
                user: "Neha V.",
                rating: 5,
                title: "Perfect smart assistant",
                content: "Great for daily reminders and songs.",
                date: "2025-05-12",
                images: []
            }
        ],
        ratingDistribution: { 5: 0.75, 4: 0.2, 3: 0.03, 2: 0.01, 1: 0.01 },
        warranty: "1 year Amazon warranty",
        sku: "ECHO5GEN"
    },
    {
        id: 8,
        name: "MacBook Air M2",
        price: 114900,
        originalPrice: 119900,
        images: [
            "https://images.unsplash.com/photo-1717865499857-ec35ce6e65fa?q=80",
            "https://m.media-amazon.com/images/I/71jG+e7roXL.jpg",
            "https://m.media-amazon.com/images/I/71gD8WdSlaL.jpg"
        ],
        category: "laptops",
        rating: 4.7,
        reviews: 567,
        inStock: true,
        isNew: false,
        isFeatured: true,
        discount: 4,
        description: "Lightweight laptop with M2 chip performance",
        brand: "Apple",
        tags: ["laptop", "m2", "ultrabook"],
        features: ["M2 Chip", "Liquid Retina", "Fanless Design"],
        inTheBox: ["MacBook", "USB-C Cable", "Adapter", "Manual"],
        specifications: [
            { name: "Processor", value: "Apple M2" },
            { name: "Storage", value: "512GB SSD" }
        ],
        reviewsList: [
            {
                id: 8,
                user: "Tushar D.",
                rating: 5,
                title: "Excellent Performance",
                content: "Handles heavy tasks smoothly.",
                date: "2025-05-01",
                images: []
            }
        ],
        ratingDistribution: { 5: 0.7, 4: 0.25, 3: 0.04, 2: 0.005, 1: 0.005 },
        warranty: "1 year Apple warranty",
        sku: "MBAIRM2"
    },
    {
        id: 9,
        name: "Anker 20W USB-C Charger",
        price: 1499,
        originalPrice: 1999,
        images: [
            "https://t4.ftcdn.net/jpg/12/85/39/19/240_F_1285391917_lIeEQSaXTnuLYfvj3EfeDosyr6UHWWOG.jpg",
            "https://example.com/anker-charger-side.jpg",
            "https://example.com/anker-charger-box.jpg"
        ],
        category: "accessories",
        rating: 4.4,
        reviews: 400,
        inStock: true,
        isNew: false,
        isFeatured: false,
        discount: 25,
        description: "Compact fast-charging adapter compatible with all smartphones.",
        brand: "Anker",
        tags: ["charger", "usb-c", "fast-charge"],
        features: ["20W Fast Charging", "Compact Size", "Universal Support"],
        inTheBox: ["Charger", "Manual"],
        specifications: [
            { name: "Output", value: "20W USB-C" },
            { name: "Compatibility", value: "iPhone, Android" }
        ],
        reviewsList: [
            {
                id: 9,
                user: "Aman G.",
                rating: 4,
                title: "Compact and handy",
                content: "Charges iPhone quickly without heating.",
                date: "2025-04-12",
                images: []
            }
        ],
        ratingDistribution: { 5: 0.6, 4: 0.3, 3: 0.08, 2: 0.01, 1: 0.01 },
        warranty: "18 months replacement warranty",
        sku: "ANKER20WC"
    }
];


// Helper functions
export const getProductsByCategory = (slug) => {
    return products.filter(p => p.category === slug);
};


//  standardize all categories:
products.forEach(product => {
    if (product.category === "audio-devices") {
        product.category = "audio-devices"; // fix typo
    }
});

export const getFeaturedProducts = () => {
    return products.filter(product => product.isFeatured);
};

export const getNewProducts = () => {
    return products.filter(product => product.isNew);
};

export const getProductsOnSale = () => {
    return products.filter(product => product.discount > 0);
};

export const getInStockProducts = () => {
    return products.filter(product => product.inStock);
};

export const getProductById = (id) => {
    return products.find((product) => product.id.toString() === id.toString());
};


export const searchProducts = (query) => {
    const lowercaseQuery = query.toLowerCase();
    return products.filter(product =>
        product.name.toLowerCase().includes(lowercaseQuery) ||
        product.brand.toLowerCase().includes(lowercaseQuery) ||
        product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
};

export const sortProducts = (products, sortBy) => {
    switch (sortBy) {
        case 'price-low':
            return [...products].sort((a, b) => a.price - b.price);
        case 'price-high':
            return [...products].sort((a, b) => b.price - a.price);
        case 'rating':
            return [...products].sort((a, b) => b.rating - a.rating);
        case 'newest':
            return [...products].sort((a, b) => b.isNew - a.isNew);
        case 'discount':
            return [...products].sort((a, b) => b.discount - a.discount);
        default:
            return products;
    }
};
