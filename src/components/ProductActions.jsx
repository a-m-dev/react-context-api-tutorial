const ProductActions = ({ product, setSelectedProducts }) => {
  return (
    <div className="product__actions">
      <button>Like</button>
      <button>Comment</button>
      <button onClick={setSelectedProducts}>Add To Basket</button>
    </div>
  );
};

export default ProductActions;
