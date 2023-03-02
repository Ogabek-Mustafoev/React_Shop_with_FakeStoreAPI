/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Routes } from "react-router-dom";
import {
  Home, Sidebar, Products, Topbar, Error, Product, LineChart, BasketList, About, Settings
} from "./components";
import { useEffect, useContext } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import { ShopContext } from './context/context';
import "./App.css";
import "aos/dist/aos.css";

function App() {
  const { setData, setFilter, toggleMenu, setLoading, getFilteredData } = useContext(ShopContext);

  const fetchProducts = () => {
    setLoading(true);
    axios.get("https://fakestoreapi.com/products")
      .then(({ data }) => {
        setData(data);
        setFilter(data);
        getFilteredData(data)
        setTimeout(() => setLoading(false), 1500);
      })
      .catch((e) => console.log("Error: ", e.message));
  };

  useEffect(() => {
    fetchProducts();
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 300,
    });
  }, []);


  return (
    <div className="container">
      <ToastContainer autoClose={2000} />
      <Sidebar />
      <main className={`main ${!toggleMenu ? "active" : ""}`}>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
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
