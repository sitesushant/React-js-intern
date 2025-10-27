import { useCart } from "../../context/CartContext";

const CartIcon = () => {
  const { state } = useCart();
  return (
    <button>
      🛒 {state.cart.length}
    </button>
  );
};

export default CartIcon;
