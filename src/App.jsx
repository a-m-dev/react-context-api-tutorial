import { useState, createContext } from "react";
import Header from "./components/Header";
import HomeContent from "./components/HomeContent";
import productsData from "./data/Products.json";

export const ShoppingContext = createContext(null);

function App() {
  const [products, setProducts] = useState(productsData);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const ShoppingContextValue = {
    products,
    selectedProducts,
    setSelectedProducts,
  };

  return (
    <ShoppingContext.Provider value={ShoppingContextValue}>
      <div className="App">
        <Header />
        <HomeContent />
      </div>
    </ShoppingContext.Provider>
  );
}

export default App;
