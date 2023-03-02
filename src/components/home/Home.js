import Slider from "../slider/Slider";
import bg from "../../assets/bg.jpg";
import { useContext } from "react";
import { ShopContext } from './../../context/context';
import "./home.css";

export default function Home() {
  const { data } = useContext(ShopContext);

  return (
    <>
      <div className="img-wrapper" data-aos-delay="1000" data-aos="fade-up">
        <img src={bg} alt="" />
        <div className="img-content">
          <h2 className="img-title">NEW SEASON PRODUCTS</h2>
          <p className="img-text">CHECK OUT ALL THE TRENDS</p>
        </div>
      </div>
      <Slider data={data} />
    </>
  );
}
