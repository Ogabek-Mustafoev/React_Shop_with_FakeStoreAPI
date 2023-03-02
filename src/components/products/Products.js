import { useContext, useEffect } from "react";
import { ShopContext } from '../../context/context';
import Error from "../error/Error";
import { Loading } from "../";
import Cards from "./Cards";
import "./products.css";

export default function Products() {
  const { filter, type, loading, setFilter, data, setType, term, getFilteredData, filteredData } = useContext(ShopContext);

  if (!filter.length) {
    setTimeout(() => {
      return <Error />;
    }, 1000);
  }

  const handleFilter = (e) => {
    if (e.target.dataset.type === 'all') {
      setFilter(data)
    } else {
      const updatedList = data.filter((item) => item.category === e.target.dataset.type);
      setFilter(updatedList);
    }
    setType(e.target.dataset.type);
  };

  useEffect(() => {
    if (!term.length) {
      getFilteredData(filter);
    } else {
      getFilteredData(filter.filter(item => item.title.toLowerCase().indexOf(term) > -1));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term, filter]);

  return (
    <>
      <div className="product_wrapper">
        <div className="radio_container" data-aos="zoom-out">
          <div className="selector">
            <div className="selector-item" data-aos-delay="500" data-aos="fade-left"
            >
              <input
                type="radio" id="radio1" name="selector"
                className="selector-item_radio" data-type="all"
                onChange={handleFilter}
                checked={type === "all"}
              />
              <label htmlFor="radio1" className="selector-item_label basis">
                All
              </label>
            </div>
            <div className="selector-item" data-aos-delay="600" data-aos="fade-left"
            >
              <input
                type="radio" id="radio2" name="selector"
                className="selector-item_radio" data-type="jewelery"
                onChange={handleFilter}
                checked={type === "jewelery"}
              />
              <label htmlFor="radio2" className="selector-item_label">
                Jewelry
              </label>
            </div>
            <div className="selector-item" data-aos-delay="700" data-aos="fade-left"
            >
              <input
                type="radio" id="radio3" name="selector"
                className="selector-item_radio" data-type="women's clothing"
                onChange={handleFilter}
                checked={type === "women's clothing"}
              />
              <label htmlFor="radio3" className="selector-item_label">
                {window.innerWidth > 935 ? "Women's Clothes" : "Women's"}
              </label>
            </div>
            <div className="selector-item" data-aos-delay="800" data-aos="fade-left"
            >
              <input
                type="radio" id="radio4" name="selector"
                className="selector-item_radio" data-type="men's clothing"
                onChange={handleFilter}
                checked={type === "men's clothing"}
              />
              <label htmlFor="radio4" className="selector-item_label basis">
                {window.innerWidth > 935 ? "Men's Clothes" : "Men's"}
              </label>
            </div>
            <div className="selector-item" data-aos-delay="900" data-aos="fade-left"
            >
              <input
                type="radio" id="radio5" name="selector"
                className="selector-item_radio" data-type="electronics"
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
        {filteredData.map((item) =>
          loading ? (
            <Loading key={item.id} />
          ) : (
            <Cards {...item} key={item.id} />
          )
        )}
      </div>
    </>
  );
}
