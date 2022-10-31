import { Routes, Route } from "react-router-dom";
import { Product } from "./pages/Product";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
