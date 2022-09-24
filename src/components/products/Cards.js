import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context";

export default function Cards(props) {
  const { id, title, category, price, description, image, windowSize } = props;
  const { addToBasket } = useContext(ShopContext);

  return (
    <div className="blog-wrapper">
      <div className="blog-wrap">
        <div className="blog-card" data-aos-delay="0" data-aos="zoom-in">
          <div className="blog-img">
            <img src={image} alt={image} />
          </div>
          <div className="blog-content">
            <h3 className="title-sm">
              {title.length > 24 ? `${title.slice(0, 24)}...` : title}
            </h3>
            <p className="blog-text">
              {`This product is ${category} category. Produced in ${new Date().getFullYear()}`}
            </p>
            <div className="flex">
              <Link to={`/products/${id}`} className="btn">
                {windowSize < 653 ? `About ${title.slice(0, 8)}...` : "About"}
              </Link>
              <Link
                to={""}
                className="btn"
                onClick={() =>
                  addToBasket({ id, title, price, image, description })
                }
              >
                Buy Now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
