import React from 'react';

const ProductGrid = () => {
  const sampleProducts = [
    { id: 1, name: 'Trekking Bag', price: '₹200/day' },
    { id: 2, name: 'Tent', price: '₹350/day' },
    { id: 3, name: 'Sleeping Bag', price: '₹150/day' },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Popular Gear</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sampleProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
              Rent Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
