import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Hero from './component/Hero';
import ProductBoard from './component/product/ProductBoard';
import CartProvider from './provider/CartProvider';
import ProductProvider from './provider/ProductProvider';

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <Header />
        <Hero />
        <ProductBoard />
        <Footer />
      </ProductProvider> 
    </CartProvider>
  );
}

export default App;
