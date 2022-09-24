import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context";
import Error from "../error/Error";
import Loading from "../loading/Loading";
import Cards from "./Cards";
import "./products.css";

export default function Products({ handleFilter, type, allProducts, loading }) {
  const { filter } = useContext(ShopContext);

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowSize(window.innerWidth));
  }, [windowSize]);

  if (!filter.length) {
    setTimeout(() => {
      return <Error />;
    }, 1000);
  }

  return (
    <>
      <div className="product_wrapper">
        <div className="radio_container" data-aos="zoom-out">
          <div className="selector">
            <div
              className="selector-item"
              data-aos-delay="500"
              data-aos="fade-up"
            >
              <input
                type="radio"
                id="radio1"
                name="selector"
                className="selector-item_radio"
                data-type="all"
                onChange={allProducts}
                checked={type === "all"}
              />
              <label htmlFor="radio1" className="selector-item_label basis">
                All
              </label>
            </div>
            <div
              className="selector-item"
              data-aos-delay="500"
              data-aos="fade-up"
            >
              <input
                type="radio"
                id="radio2"
                name="selector"
                className="selector-item_radio"
                data-type="jewelery"
                onChange={handleFilter}
                checked={type === "jewelery"}
              />
              <label htmlFor="radio2" className="selector-item_label">
                Jewelry
              </label>
            </div>
            <div
              className="selector-item"
              data-aos-delay="500"
              data-aos="fade-up"
            >
              <input
                type="radio"
                id="radio3"
                name="selector"
                className="selector-item_radio"
                data-type="women's clothing"
                onChange={handleFilter}
                checked={type === "women's clothing"}
              />
              <label htmlFor="radio3" className="selector-item_label">
                {windowSize > 935 ? "Women's Clothes" : "Women's"}
              </label>
            </div>
            <div
              className="selector-item"
              data-aos-delay="500"
              data-aos="fade-up"
            >
              <input
                type="radio"
                id="radio4"
                name="selector"
                className="selector-item_radio"
                data-type="men's clothing"
                onChange={handleFilter}
                checked={type === "men's clothing"}
              />
              <label htmlFor="radio4" className="selector-item_label basis">
                {windowSize > 935 ? "Men's Clothes" : "Men's"}
              </label>
            </div>
            <div
              className="selector-item"
              data-aos-delay="500"
              data-aos="fade-up"
            >
              <input
                type="radio"
                id="radio5"
                name="selector"
                className="selector-item_radio"
                data-type="electronics"
                onChange={handleFilter}
                checked={type === "electronics"}
              />
              <label htmlFor="radio5" className="selector-item_label">
                Electronics
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="cards_wrapper">
        {filter.map((item) =>
          loading ? (
            <Loading key={item.id} />
          ) : (
            <Cards windowSize={windowSize} {...item} key={item.id} />
          )
        )}
      </div>
    </>
  );
}
