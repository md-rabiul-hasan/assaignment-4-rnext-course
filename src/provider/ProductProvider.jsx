import { ProductContext } from "../context";
import { useProduct } from "../hooks";
const ProductProvider = ({children}) => {
    const {         baseProducts,
        products,
        setProducts,
        loading,
        error,
        productSortingHighToLow,
        productSortingLowToHigh,
        categories,
        fetchCategoryProduct } = useProduct();
    return  (
        <ProductContext.Provider value={{        baseProducts,
            products,
            setProducts,
            loading,
            error,
            productSortingHighToLow,
            productSortingLowToHigh,
            categories,
            fetchCategoryProduct}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;