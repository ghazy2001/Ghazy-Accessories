import "./App.css";
import AboutS from "./components/AboutS";
import BestSellers from "./components/BestSellers";
import GiftCard from "./components/GiftCard";
import Home from "./components/Home";

import AllProducts from "./components/allProducts";
import Footter from "./components/Footter";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          {" "}
          <Header />
        </div>

        <div style={{ marginTop: "18vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutS />} />
            <Route path="/best-sellers" element={<BestSellers />} />
            <Route path="/gift-card" element={<GiftCard />} />
            <Route path="/allProducts" element={<AllProducts />} />
            <Route path="cart" />
          </Routes>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Footter />
        </div>
      </div>
    </>
  );
}

export default App;
