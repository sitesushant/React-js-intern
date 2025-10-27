import { useCart } from "../../context/CartContext";

const ClearCartButton = () => {
  const { dispatch } = useCart();

  return (
    <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
      🗑️ Remove <br />from cart.
    </button>
  );
};

export default ClearCartButton;
