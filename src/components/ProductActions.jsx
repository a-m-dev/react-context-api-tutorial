import { useContext } from "react";
import { ShoppingContext } from "../App";

const ProductActions = ({ product }) => {
  const { setSelectedProducts } = useContext(ShoppingContext);

  const handleAddToBasket = () =>
    setSelectedProducts((prevItems) => [...prevItems, product]);

  return (
    <div className="product__actions">
      <button>Like</button>
      <button>Comment</button>
      <button onClick={handleAddToBasket}>Add To Basket</button>
    </div>
  );
};

export default ProductActions;
