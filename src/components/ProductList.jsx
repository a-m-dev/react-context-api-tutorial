import Product from "./Product";

const ProductList = ({ products, setSelectedProducts }) => {
  return (
    <section>
      <h3>Here is a list of our Products:</h3>
      {products.map((prd) => (
        <Product
          key={prd.id}
          product={prd}
          setSelectedProducts={setSelectedProducts}
        />
      ))}
    </section>
  );
};

export default ProductList;
