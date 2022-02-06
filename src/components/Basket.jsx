import BASKET_ICON from "../images/basket.svg";

const Basket = (props) => {
  return (
    <div className="basket">
      <img src={BASKET_ICON} alt="basket" />
      <span className="basket__items">{props.selectedProducts.length}</span>
    </div>
  );
};

export default Basket;
