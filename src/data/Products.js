// products.js - Products data configuration
export const products = [
  {
    id: 1,
    name: "Sony WH-1000XM5 Wireless Headphones",
    price: 29999,
    originalPrice: 34999,
    image: "https://m.media-amazon.com/images/I/61D4Z3yKPAL._AC_UF1000,1000_QL80_.jpg",
    category: "audio-devices",
    rating: 4.8,
    reviews: 1247,
    inStock: true,
    isNew: true,
    isFeatured: true,
    discount: 14,
    description: "Industry-leading noise cancellation with premium sound quality",
    brand: "Sony",
    tags: ["wireless", "noise-cancelling", "premium"]
  },
  {
    id: 2,
    name: "Apple Watch Series 9",
    price: 41900,
    originalPrice: 41900,
    image: "https://images.unsplash.com/photo-1570791086173-1f3c8fec4a07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwcGxlJTIwd2F0Y2hzZXJpZXMlMjA5fGVufDB8fDB8fHww",
    category: "smart-wearables",
    rating: 4.6,
    reviews: 892,
    inStock: true,
    isNew: false,
    isFeatured: true,
    discount: 0,
    description: "Advanced health monitoring with seamless iOS integration",
    brand: "Apple",
    tags: ["smartwatch", "health", "fitness"]
  },
  {
    id: 3,
    name: "JBL Charge 5 Bluetooth Speaker",
    price: 12999,
    originalPrice: 15999,
    image: "https://images.unsplash.com/photo-1687363251769-560d957b8847?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amJsJTIwYmx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
    category: "audio-devices",
    rating: 4.4,
    reviews: 654,
    inStock: true,
    isNew: false,
    isFeatured: false,
    discount: 19,
    description: "Powerful portable speaker with IP67 waterproof rating",
    brand: "JBL",
    tags: ["bluetooth", "portable", "waterproof"]
  },
  {
    id: 4,
    name: "iPhone 15 Pro Max",
    price: 159900,
    originalPrice: 159900,
    image: "https://images.unsplash.com/photo-1695822822491-d92cee704368?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTUlMjBwcm8lMjBtYXh8ZW58MHx8MHx8fDA%3D",
    category: "smartphones",
    rating: 4.9,
    reviews: 2341,
    inStock: false,
    isNew: true,
    isFeatured: true,
    discount: 0,
    description: "Latest iPhone with titanium design and A17 Pro chip",
    brand: "Apple",
    tags: ["smartphone", "premium", "latest"]
  },
  {
    id: 5,
    name: "Samsung Galaxy Buds2 Pro",
    price: 17999,
    originalPrice: 19999,
    image: "https://images.unsplash.com/photo-1691452194257-57e0f170c32e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Ftc3VuZyUyMGJ1ZHN8ZW58MHx8MHx8fDA%3D",
    category: "audio-devices",
    rating: 4.3,
    reviews: 445,
    inStock: true,
    isNew: false,
    isFeatured: false,
    discount: 10,
    description: "True wireless earbuds with intelligent ANC",
    brand: "Samsung",
    tags: ["wireless", "earbuds", "anc"]
  },
  {
    id: 6,
    name: "Fitbit Charge 6",
    price: 19999,
    originalPrice: 22999,
    image: "https://images.unsplash.com/photo-1585823339274-26b392cefe45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpdGJpdCUyMGNoYXJnZSUyMDZ8ZW58MHx8MHx8fDA%3D",
    category: "smart-wearables",
    rating: 4.2,
    reviews: 321,
    inStock: true,
    isNew: false,
    isFeatured: false,
    discount: 13,
    description: "Advanced fitness tracker with built-in GPS",
    brand: "Fitbit",
    tags: ["fitness", "gps", "health"]
  },
  {
    id: 7,
    name: "Echo Dot (5th Gen)",
    price: 4999,
    originalPrice: 5499,
    image: "https://m.media-amazon.com/images/I/61MbLLagiVL._AC_UF1000,1000_QL80_.jpg",
    category: "home-gadgets",
    rating: 4.5,
    reviews: 1876,
    inStock: true,
    isNew: false,
    isFeatured: true,
    discount: 9,
    description: "Smart speaker with Alexa voice control",
    brand: "Amazon",
    tags: ["smart-home", "voice-control", "alexa"]
  },
  {
    id: 8,
    name: "MacBook Air M2",
    price: 114900,
    originalPrice: 119900,
    image: "https://images.unsplash.com/photo-1585823339274-26b392cefe45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpdGJpdCUyMGNoYXJnZSUyMDZ8ZW58MHx8MHx8fDA%3D",
    category: "laptops",
    rating: 4.7,
    reviews: 567,
    inStock: true,
    isNew: false,
    isFeatured: true,
    discount: 4,
    description: "Lightweight laptop with M2 chip performance",
    brand: "Apple",
    tags: ["laptop", "m2", "ultrabook"]
  }
];

// Helper functions
export const getProductsByCategory = (categorySlug) => {
  return products.filter(product => product.category === categorySlug);
};

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
  return products.find(product => product.id === id);
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