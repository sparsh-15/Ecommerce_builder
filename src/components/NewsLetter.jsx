const Newsletter = () => {
  return (
    <section className="bg-emerald-100 py-12 px-4 text-center">
      <h3 className="text-2xl font-semibold mb-2">Subscribe to Our Newsletter</h3>
      <p className="text-gray-700 mb-4">Get the latest deals and updates straight to your inbox.</p>
      <div className="flex justify-center gap-2 flex-wrap">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none"
        />
        <button className="bg-emerald-600 text-white px-6 py-2 rounded-r-md hover:bg-emerald-700 transition">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
