import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";
import shop from "../../assets/shop-logo.png";
import { useContext } from "react";
import { ShopContext } from "../../context/context";

export default function Sidebar() {
  const { pathname } = useLocation();
  const { toggleMenu, setToggleMenu } = useContext(ShopContext);

  return (
    <div className={`navigation ${!toggleMenu ? "active" : ""} `}>
      <ul>
        <li>
          <Link to="/">
            <span className="icon">
              <img className="shop-logo" src={shop} alt="shop-logo" />
            </span>
            <span className="title">
              <b>Shop App</b>
            </span>
          </Link>
        </li>
        <li className={pathname === "/" ? "hovered" : ""}>
          <Link to="/" onClick={() => setToggleMenu(false)}>
            <span className="icon">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className="title">Home</span>
          </Link>
        </li>
        <li className={pathname.slice(0, 9) === "/products" ? "hovered" : ""}>
          <Link to="/products" onClick={() => setToggleMenu(false)}>
            <span className="icon">
              <ion-icon name="bag-handle-outline"></ion-icon>
            </span>
            <span className="title">Products</span>
          </Link>
        </li>
        <li className={pathname === "/basket" ? "hovered" : ""}>
          <Link to="/basket" onClick={() => setToggleMenu(false)}>
            <span className="icon">
              <ion-icon name="basket-outline"></ion-icon>
            </span>
            <span className="title">Basket</span>
          </Link>
        </li>
        <li className={pathname === "/statistic" ? "hovered" : ""}>
          <Link to="/statistic" onClick={() => setToggleMenu(false)}>
            <span className="icon">
              <ion-icon name="bar-chart-outline"></ion-icon>
            </span>
            <span className="title">Statistic</span>
          </Link>
        </li>
        <li className={pathname === "/about" ? "hovered" : ""}>
          <Link to="/about" onClick={() => setToggleMenu(false)}>
            <span className="icon">
              <ion-icon name="information-circle-outline"></ion-icon>
            </span>
            <span className="title">About app</span>
          </Link>
        </li>
        <li className={pathname === "/settings" ? "hovered" : ""}>
          <Link to="/settings" onClick={() => setToggleMenu(false)}>
            <span className="icon">
              <ion-icon name="settings-outline"></ion-icon>
            </span>
            <span className="title">Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
