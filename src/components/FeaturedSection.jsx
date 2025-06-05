const features = [
  {
    title: "Fast Delivery",
    description: "Quick and secure delivery at your doorstep.",
  },
  {
    title: "24/7 Support",
    description: "Customer care that's always there for you.",
  },
  {
    title: "Genuine Products",
    description: "Only authentic and certified items.",
  },
];

const FeaturedSection = () => {
  return (
    <section className="bg-white py-12 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {features.map((feat, idx) => (
          <div key={idx} className="p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">{feat.title}</h4>
            <p className="text-gray-600">{feat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;     