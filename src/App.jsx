import { useState } from "react";
import Header from "./components/Header";
import HomeContent from "./components/HomeContent";
import productsData from "./data/Products.json";

function App() {
  const [products, setProducts] = useState(productsData);
  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <div className="App">
      <Header selectedProducts={selectedProducts} />
      <HomeContent
        products={products}
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
    </div>
  );
}

export default App;
