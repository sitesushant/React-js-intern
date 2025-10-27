import { CartProvider } from "../../context/CartContext";
import HomePage from "../../components/pages/HomePage";

function App() {
  return (
    <CartProvider>
      <HomePage />
    </CartProvider>
  );
}

export default App;
