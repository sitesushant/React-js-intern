import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "5px" }}>
      <h3>{product.name}</h3>
      <p>RS{product.price}</p>
      <button onClick={() => dispatch({ type: "ADD", item: product })}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
