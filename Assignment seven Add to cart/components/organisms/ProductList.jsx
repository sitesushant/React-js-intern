import ProductCard from "../molecules/ProductCard";

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 600 },
  { id: 3, name: "Headphones", price: 150 },
];

const ProductList = () => (
  <div>
    {products.map(p => <ProductCard key={p.id} product={p} />)}
  </div>
);

export default ProductList;
