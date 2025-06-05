
import { getFeaturedCategories } from '../data/Category';

const CategorySection = ({ showAll = false, limit = 4 }) => {
  const categoriesToShow = showAll ? getFeaturedCategories(8) : getFeaturedCategories(limit);

  const handleCategoryClick = (category) => {
    // Handle category navigation here
    console.log(`Navigate to category: ${category.slug}`);
  };

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-semibold text-gray-800">Shop by Category</h3>
        {!showAll && (
          <button className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
            View All →
          </button>
        )}
      </div>
      
      <div className={`grid grid-cols-2 ${showAll ? 'sm:grid-cols-4 lg:grid-cols-4' : 'sm:grid-cols-4'} gap-4 sm:gap-6`}>
        {categoriesToShow.map((category) => {
          const IconComponent = category.icon;
          return (
            <div 
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className={`${category.color} ${category.hoverColor} p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105`}
            >
              <div className="flex justify-center mb-3">
                <IconComponent className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h4 className="font-semibold text-sm sm:text-base mb-1">
                {category.name}
              </h4>
              <p className="text-xs sm:text-sm opacity-75">
                {category.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategorySection;