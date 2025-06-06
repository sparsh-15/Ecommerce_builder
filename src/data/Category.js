import { Headphones, Watch, Home, Smartphone, Laptop, SmartphoneIcon } from 'lucide-react';

export const categories = [
  {
    id: 1,
    name: "Audio Devices",
    slug: "audio-devices",
    icon: Headphones,
    description: "Headphones, Speakers, Earbuds",
    color: "bg-purple-100 text-purple-600",
    hoverColor: "hover:bg-purple-200"
  },
  {
    id: 2,
    name: "Smart Wearables",
    slug: "smart-wearables",
    icon: Watch,
    description: "Smartwatches, Fitness Trackers",
    color: "bg-blue-100 text-blue-600",
    hoverColor: "hover:bg-blue-200"
  },
  {
    id: 3,
    name: "Home Gadgets",
    slug: "home-gadgets",
    icon: Home,
    description: "Smart Home, Appliances",
    color: "bg-green-100 text-green-600",
    hoverColor: "hover:bg-green-200"
  },
  {
    id: 4,
    name: "Accessories",
    slug: "accessories",
    icon: Smartphone,
    description: "Cases, Chargers, Cables",
    color: "bg-orange-100 text-orange-600",
    hoverColor: "hover:bg-orange-200"
  },
  {
    id: 5,
    name: "Laptops",
    slug: "laptops",
    icon: Laptop,
    description: "Notebooks, Gaming Laptops",
    color: "bg-indigo-100 text-indigo-600",
    hoverColor: "hover:bg-indigo-200"
  },
  {
  id: 6,
  name: "Smartphones",
  slug: "smartphones",
  icon: SmartphoneIcon,  // from lucide-react
  description: "Mobile phones, Smartphones",
  color: "bg-yellow-100 text-yellow-600",
  hoverColor: "hover:bg-yellow-200"
}
];

// Helper functions
export const getCategoryBySlug = (slug) => {
  return categories.find(cat => cat.slug === slug);
};

export const getCategoryById = (id) => {
  return categories.find(cat => cat.id === id);
};

export const getFeaturedCategories = (limit = 4) => {
  return categories.slice(0, limit);
};

export const getAllCategoryNames = () => {
  return categories.map(cat => cat.name);
};

export const getAllCategorySlugs = () => {
  return categories.map(cat => cat.slug);
};
