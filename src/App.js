/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Products from "./components/products/Products";
import Topbar from "./components/topbar/Topbar";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Error from "./components/error/Error";
import Product from "./components/product/Product";
import LineChart from "./components/chart/Chart";
import BasketList from "./components/basket/Basket";
import { ToastContainer } from "react-toastify";
import { ShopContext } from "./components/context";
import About from "./components/about/About";
import Settings from "./components/settings/Settings";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const { data, setData, setFilter } = useContext(ShopContext);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [type, setType] = useState("all");
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((e) => console.log("Error: ", e.message));
    setData(response.data);
    setFilter(response.data);
    loadingTimeout();
  };
  useEffect(() => {
    fetchProducts();
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 300,
    });
    AOS.refresh();
  }, []);
  function loadingTimeout() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }
  function toggleMenuHandler() {
    setToggleMenu(!toggleMenu);
  }
  function allProducts(e) {
    setType(e.target.dataset.type);
    setFilter(data);
    loadingTimeout();
  }
  const handleFilter = (e) => {
    loadingTimeout();
    setType(e.target.dataset.type);
    const updatedList = data.filter(
      (item) => item.category === e.target.dataset.type
    );
    setFilter(updatedList);
  };
  return (
    <div className="container">
      <ToastContainer autoClose={2000} />
      <Sidebar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <main className={`main ${!toggleMenu ? "active" : ""}`}>
        <Topbar toggleMenuHandler={toggleMenuHandler} toggleMenu={toggleMenu} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/products"
            element={
              <Products
                handleFilter={handleFilter}
                type={type}
                allProducts={allProducts}
                loading={loading}
              />
            }
          />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/statistic" element={<LineChart />} />
          <Route path="/basket" element={<BasketList />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
