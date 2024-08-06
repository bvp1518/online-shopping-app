import Header from "./components/Header";
import Shop from "./components/Shop";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import Product from './components/Product.js';
import CartProvider from "./store/shopping-cart-context.js";

const App = () => {
  return (
    <CartProvider>
      <Header/>
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartProvider>
  );
}

export default App;
