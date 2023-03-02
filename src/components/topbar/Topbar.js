import user from "../../assets/user.jpg";
import { Link, useLocation } from "react-router-dom";
import "./topbar.css";
import { useContext } from "react";
import { ShopContext } from "../../context/context";

export default function Topbar() {
  const { pathname } = useLocation();
  const { toggleMenu, setToggleMenu, onSearch } = useContext(ShopContext);

  return (
    <div className="topbar">
      <div className="toggle" onClick={() => setToggleMenu(!toggleMenu)}>
        <ion-icon name={!toggleMenu ? "menu-outline" : "close"}></ion-icon>
      </div>
      <div className={`search ${pathname.includes('products') ? 'block' : 'hidden'}`}>
        <label>
          <input type="text" placeholder="Search here..." onChange={(e) => onSearch(e.target.value.toLowerCase())} />
          <ion-icon name="search-outline"></ion-icon>
        </label>
      </div>
      <div className="user">
        <Link to="/about">
          <img src={user} alt="user_photo" />
        </Link>
      </div>
    </div>
  );
}
