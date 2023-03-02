import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../loading/Loading";
import { ShopContext } from './../../context/context';
import "./product.css";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [productLoading, setProductLoading] = useState(true);
  const { addToBasket } = useContext(ShopContext);

  const fetchProducts = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((e) => console.log("Error: ", e.message));
    setProduct(await response.data);
    setTimeout(() => setProductLoading(false), 1400);
  };
  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (productLoading) {
    return (
      <div key={product.id} className="product__wrapper">
        <h1 className="product-heading">
          <Loading height={60} />
        </h1>
        <div className="d-grid">
          <div className="product_img">
            <Loading height={500} />
          </div>
          <div className="product_content"></div>
        </div>
      </div>
    );
  }

  const { image, title, price, category, description, rating } = product;
  return (
    <div key={product.id} className="product__wrapper">
      <h1 className="product-heading">{title}.</h1>
      <div className="d-grid">
        <div className="product_img">
          <img src={image} alt="" />
        </div>
        <div className="product_content">
          <h2 className="category">
            {`Category of ${category}`}
            <ion-icon name="checkmark-done-sharp"></ion-icon>
          </h2>
          <h3 className="product_rating">
            <b>Rating:</b> {rating && rating.rate}
            <ion-icon name="star"></ion-icon>
            <span> ~ {rating && rating.count} people liked! </span>
          </h3>
          <h3 className="product_price">${price}</h3>
          <h3 className="product_description">
            <b>Description:</b> {description}
          </h3>
          <div className="basket_btn">
            <button
              className="btn"
              onClick={() =>
                addToBasket({ id, title, price, image, description })
              }
            >
              Add to Cart
            </button>
            <Link to="/basket" className="btn">
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
