const ProductActions = ({ product, setSelectedProducts }) => {
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
