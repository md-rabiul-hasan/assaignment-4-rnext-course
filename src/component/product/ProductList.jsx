import React, { useContext } from 'react';
import { CartContext, ProductContext } from '../../context';

export default function ProductList() {
  const { products, loading } = useContext(ProductContext);
  const { cart, addToCart, removeFromCart, checkCartAlreadyAdd } = useContext(CartContext);
  

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {/* Skeleton Loader */}
      {loading.state ? (
        Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow animate-pulse">
            <div className="bg-gray-300 h-48 rounded-md mb-4" />
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
            <div className="h-3 bg-gray-300 rounded w-1/2 mb-2" />
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-4" />
            <div className="h-10 bg-gray-300 rounded" />
          </div>
        ))
      ) : (
        products.map((product) => (
          <div key={product.id} className="relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
              <img
                src={product.image}
                alt={product.title || 'Product Image'}
                className="h-full w-full object-cover object-top lg:h-full lg:w-full p-4 bg-gray-100"
              />
            </div>
            <div className="mt-4 px-3 pb-4">
              <h3 className="text-sm text-gray-700">{product.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{product.category}</p>
              <p className="text-sm font-medium text-gray-900">${product.price}</p>
            </div>
            <div className="cursor-pointer rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 ring-1 ring-slate-700/10 hover:bg-slate-50 hover:text-slate-900 items-center text-center mb-3 mx-3 flex-1">
              
              {
                 checkCartAlreadyAdd(product.id) ? (<div className="flex px-3 py-2 justify-center text-red-400 " onClick={()=> removeFromCart(product.id)}>
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                   strokeWidth="1.5"
                   stroke="currentColor"
                   className="mr-2.5 h-5 w-5 flex-none stroke-red-400 "                  
                 >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                   />
                 </svg>
                 Remove from cart
               </div>) : (<div className="flex px-3 py-2 justify-center" onClick={()=> addToCart(product)}>
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                   strokeWidth="1.5"
                   stroke="currentColor"
                   className="mr-2.5 h-5 w-5 flex-none stroke-slate-400"                  
                 >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                   />
                 </svg>
                 Add to cart
               </div>)
              }

              
            </div>
          </div>
        ))
      )}
    </div>
  );
}
