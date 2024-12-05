import { useState } from "react"; // Importing React's useState hook for managing state
import { CartContext } from "../context"; // Importing CartContext to provide the cart state and functions

// CartProvider component to manage cart-related functionality
const CartProvider = ({children}) => {
    // State to manage the cart items, initialized as an empty array
    const [cart, setCart] = useState([]);

    // Function to add a product to the cart
    const addToCart = (product) => {
        setCart([...cart, product]);  // Adds the new product to the existing cart
    }

    // Function to remove a product from the cart by its ID
    const removeFromCart = (productId) => {
        setCart(cart.filter((product) => product.id !== productId));  // Filters out the product with the specified ID
    }

    // Function to check if a product is already in the cart by its ID
    const checkCartAlreadyAdd = (productId) => {
        // Finds the product with the specified ID in the cart. Returns the product if found, otherwise undefined.
        return cart.find((product) => product.id === productId);
    }

    // Returning the CartContext.Provider with the cart state and actions passed as the value
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, checkCartAlreadyAdd }}>
            {children}  {/* Rendering the child components */}
        </CartContext.Provider>
    )
}

export default CartProvider;  // Exporting CartProvider to be used in other parts of the application
