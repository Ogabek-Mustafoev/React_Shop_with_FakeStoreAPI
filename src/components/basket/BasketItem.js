import { useContext } from "react";
import { ShopContext } from '../../context/context';
import "./basket.css";

export default function BasketItem(props) {
  const { id, title, image, price, quantity, description, formatCurrency } = props;
  const { incrDecrQuantity, removeFromBasket } = useContext(ShopContext);

  return (
    <>
      <div className="basketItem_wrapper" data-aos="fade-right">
        <div className="bsk_container">
          <div className="bsk_img">
            <img src={image} alt={title} />
            <div className="darken">
              <h3
                className="bsk_img-remove"
                onClick={() => removeFromBasket(id, title)}
              >
                <i className="fa-solid fa-trash"></i>
              </h3>
            </div>
          </div>
          <div className="bsk_content">
            <div className="info">
              <h3 className="info_title">{title}</h3>
              <span className="info_text">
                {window.innerWidth > 500 ? description : ""}
              </span>
            </div>
            <div className="btns">
              <button
                className="bsk_btn"
                data-type="-1"
                onClick={(e) =>
                  incrDecrQuantity({
                    id,
                    title,
                    plusMinus: e.target.getAttribute("data-type"),
                  })
                }
              >
                <ion-icon data-type="-1" name="remove-outline"></ion-icon>
              </button>
              <span>{quantity}</span>
              <button
                className="bsk_btn"
                data-type="+1"
                onClick={(e) =>
                  incrDecrQuantity({
                    id,
                    title,
                    plusMinus: e.target.getAttribute("data-type"),
                  })}
              >
                <ion-icon data-type="+1" name="add-outline"></ion-icon>
              </button>
              <div className="right_content">
                x{quantity} = {formatCurrency(price * quantity)}
                <a
                  href={`https://www.google.com/search?q=${`buy ${title}`}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn buy"
                >
                  Buy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
