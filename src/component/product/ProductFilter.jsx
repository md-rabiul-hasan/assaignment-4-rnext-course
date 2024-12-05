import React, { useContext, useState } from 'react';
import { ProductContext } from '../../context';

export default function ProductFilter() {
  const { categories, fetchCategoryProduct } = useContext(ProductContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null); // Keep track of the single selected category

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category); // Update the selected category
    fetchCategoryProduct(category); // Fetch products for the selected category
  };

  return (
    <div className="relative inline-block text-left">
      {/* Filter Button */}
      <button
        type="button"
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
        id="filter-button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={toggleDropdown}
      >
        Filter
        <svg
          className={`-mr-1 h-5 w-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Filter Options Dropdown */}
      {isOpen && (
        <div
          className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="filter-button"
        >
          <div className="py-1" role="none">
            {categories.map((cat, index) => (
              <label
                key={index}
                className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700"
              >
                <input
                  type="radio" // Changed to radio for single selection
                  className="form-radio h-4 w-4"
                  onChange={() => handleCategoryChange(cat)}
                  checked={selectedCategory === cat}
                />
                <span className="ml-2">{cat}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
