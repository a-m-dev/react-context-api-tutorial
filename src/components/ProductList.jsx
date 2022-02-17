import { useContext } from "react";
import { ShoppingContext } from "../App";
import Product from "./Product";

const ProductList = () => {
  const { products } = useContext(ShoppingContext);
  return (
    <section>
      <h3>Here is a list of our Products:</h3>
      {products.map((prd) => (
        <Product key={prd.id} product={prd} />
      ))}
    </section>
  );
};

export default ProductList;
