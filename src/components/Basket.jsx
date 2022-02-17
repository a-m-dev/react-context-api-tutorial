import { useContext } from "react";
import { ShoppingContext } from "../App";
import BASKET_ICON from "../images/basket.svg";

const Basket = () => {
  const { selectedProducts } = useContext(ShoppingContext);

  return (
    <div className="basket">
      <img src={BASKET_ICON} alt="basket" />
      <span className="basket__items">{selectedProducts.length}</span>
    </div>
  );
};

export default Basket;
