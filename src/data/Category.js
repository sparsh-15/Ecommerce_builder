// categories.js - Common categories configuration
import { 
  Headphones, 
  Watch, 
  Home, 
  Smartphone,
  Laptop,
  Camera,
  Gamepad2,
  Car
} from 'lucide-react';

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
    name: "Cameras",
    slug: "cameras",
    icon: Camera,
    description: "DSLR, Mirrorless, Action Cams",
    color: "bg-pink-100 text-pink-600",
    hoverColor: "hover:bg-pink-200"
  },
  {
    id: 7,
    name: "Gaming",
    slug: "gaming",
    icon: Gamepad2,
    description: "Consoles, Controllers, Games",
    color: "bg-red-100 text-red-600",
    hoverColor: "hover:bg-red-200"
  },
  {
    id: 8,
    name: "Auto Tech",
    slug: "auto-tech",
    icon: Car,
    description: "Car Electronics, GPS",
    color: "bg-teal-100 text-teal-600",
    hoverColor: "hover:bg-teal-200"
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