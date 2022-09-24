import "./topbar.css";
import user from "../../assets/user.jpg";
import { Link } from "react-router-dom";

export default function Topbar({ toggleMenuHandler, toggleMenu }) {
  return (
    <div className="topbar">
      <div className="toggle" onClick={toggleMenuHandler}>
        <ion-icon name={!toggleMenu ? "menu-outline" : "close"}></ion-icon>
      </div>
      <div className="search">
        <label>
          <input type="text" placeholder="Search here..." />
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
