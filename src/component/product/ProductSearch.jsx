import React, { useContext } from 'react';
import { ProductContext } from '../../context';

export default function ProductSearch() {
  const { products, setProducts, baseProducts } = useContext(ProductContext);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();    

    if (value) {
      // Filter products based on search input
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(value)
      );
      setProducts(filteredProducts);
    } else {
      // Reset to original products if input is empty
      setProducts(baseProducts);
    }
  };

  return (
    <div className="flex flex-1 items-center px-3.5 py-2 text-gray-400 group hover:ring-1 hover:ring-gray-300 focus-within:ring-2 ring-inset focus-within:ring-teal-500 rounded-md">
      <svg
        className="mr-2 h-5 w-5 stroke-slate-400"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        className="block w-full appearance-none bg-transparent text-base text-gray-700 placeholder:text-gray-400 focus:outline-none placeholder:text-sm sm:text-sm sm:leading-6"
        placeholder="Find anything..."
        aria-label="Search components"
        type="text"
        onChange={handleChange}
        style={{ caretColor: 'rgb(107, 114, 128)' }}
      />
    </div>
  );
}
