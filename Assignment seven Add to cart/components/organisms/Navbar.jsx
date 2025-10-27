import CartIcon from "../atoms/CartIcon";
import ClearCartButton from "../atoms/ClearCartButton";

const Navbar = () => (
  <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#eee" }}>
    <h2>MarketPlace</h2>
    <div style={{ display: "flex", gap: "10px" }}>
      <ClearCartButton />
      <CartIcon />
    </div>
  </div>
);

export default Navbar;
