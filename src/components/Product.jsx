import ProductActions from "./ProductActions";

const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="product__info">
        <div className="product__title">
          <h3>{product.name}</h3>
          <h5>${product.price}</h5>
        </div>
        <p>{product.description}</p>
      </div>
      <ProductActions product={product} />
    </div>
  );
};

export default Product;
