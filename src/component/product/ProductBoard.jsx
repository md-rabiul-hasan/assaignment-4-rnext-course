import React from 'react';
import ProductCart from './ProductCart';
import ProductFilter from './ProductFilter';
import ProductList from './ProductList';
import ProductSearch from './ProductSearch';
import ProductSorting from './ProductSorting';

// Main Product Board component
export default function ProductBoard() {
  return (
    <div>
      {/* Section padding for different screen sizes */}
      <div className="pt-16 sm:pt-24 lg:pt-40">
        
        {/* Header Section */}
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
            New Arrivals
          </h1>
          <p className="mt-4 text-xl text-gray-500 text-center">
            Thoughtfully designed objects for the workspace, home, and travel.
          </p>
        </div>

        {/* Sort, Filter, Search, and Cart Section */}
        <div className="mt-10">
          <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            
            {/* Sorting and Filtering Area */}
            <div className="w-full">
              {/* Product Sorting Component */}
              <ProductSorting />
              
              {/* Product Filter Component */}
              <ProductFilter />
            </div>

            {/* Search and Cart Area */}
            <div className="flex gap-2 items-center">
              {/* Product Search Component */}
              <ProductSearch />
              
              {/* Product Cart Component */}
              <ProductCart />
            </div>
          </div>
        </div>

        {/* Product List Section */}
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {/* Product List Component */}
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
}
