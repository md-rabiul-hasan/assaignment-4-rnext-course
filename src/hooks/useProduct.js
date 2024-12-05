import { useEffect, useState } from "react";
const useProduct = () => {
    const [baseProducts, setBaseProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const [loading, setLoading] = useState({
        state: false,
        message: ""
    });

    const [error, setError] = useState(null);

    const productSortingLowToHigh = (products) => {
        const sortedProducts = [...products].sort((a, b) => a.price - b.price);
        setProducts(sortedProducts);        
    }

    const productSortingHighToLow = (products) => {
        const sortedProducts = [...products].sort((a, b) => b.price - a.price);
        setProducts(sortedProducts);
    }

    const fetchProducts = async () => {
        try{
            setLoading({
                ...loading,
                state: true,
                message: "Fetching product data..."
            });

            const response = await fetch(`https://fakestoreapi.com/products`);

            if(!response.ok){
                const errorMessage = `Fetching producs data failed: ${response.status}`;
                throw new Error(errorMessage);
            }

            const data = await response.json();
            productSortingLowToHigh(data);
            setBaseProducts(data);
        }catch(err){
            setError(err);
        }finally{
            setLoading({
                ...loading,
                state: false,
                message: ""
            });
        }
    }

    const fetchCategories = async () => {
        try{
            setLoading({
                ...loading,
                state: true,
                message: "Fetching product data..."
            });

            const response = await fetch(`https://fakestoreapi.com/products/categories`);

            if(!response.ok){
                const errorMessage = `Fetching product category data failed: ${response.status}`;
                throw new Error(errorMessage);
            }

            const data = await response.json();
            setCategories(data);
        }catch(err){
            setError(err);
        }finally{
            setLoading({
                ...loading,
                state: false,
                message: ""
            });
        }
    }
    const fetchCategoryProduct = async (categoryName) => {
        try{
            setLoading({
                ...loading,
                state: true,
                message: "Fetching category product data..."
            });

            const response = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`);

            if(!response.ok){
                const errorMessage = `Fetching product category data failed: ${response.status}`;
                throw new Error(errorMessage);
            }

            const data = await response.json();
            setProducts(data);
        }catch(err){
            setError(err);
        }finally{
            setLoading({
                ...loading,
                state: false,
                message: ""
            });
        }
    }

    useEffect(()=>{
        fetchProducts();
        fetchCategories();
    }, []);

    return {
        baseProducts,
        products,
        setProducts,
        loading,
        error,
        productSortingHighToLow,
        productSortingLowToHigh,
        categories,
        fetchCategoryProduct
    }
}

export default useProduct;