import { useContext } from "react";
import { ShopContext } from "../context";
import "./basket.css";
export default function BasketItem(props) {
  const { id, title, image, price, quantity, description } = props;
  const { decrementQuantity, incrementQuantity, removeFromBasket } =
    useContext(ShopContext);
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
                Remove Product
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
                onClick={() => decrementQuantity(id, title)}
              >
                <ion-icon name="remove-outline"></ion-icon>
              </button>
              <span>{quantity}</span>
              <button
                className="bsk_btn"
                onClick={() => incrementQuantity(id, title)}
              >
                <ion-icon name="add-outline"></ion-icon>
              </button>
              <div className="right_content">
                x{quantity} = ${price * quantity}
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
// <div className="basket_item">
//   <div className="basket_img">
//     <img src={image} alt={title} />
//   </div>
//   <div className="basket_content">
//     <h3 className="basket_title">
//       {title}{" "}
//       <b className="middle">
//         <b>x</b>
//       </b>
//       <div className="right">
//         {quantity} = {price * quantity} <span>$</span>
//       </div>
//     </h3>
//     <p className="basket_text">{description}</p>
//     <div className="buttons">
//       <button className="btn" onClick={() => incrementQuantity(id, title)}>
//         <i className="material-icons left">exposure_plus_1</i>add
//       </button>
//       <button className="btn" onClick={() => decrementQuantity(id, title)}>
//         <i className="material-icons left">exposure_minus_1</i>remove
//       </button>
//       <button
//         className="btn"
//         onClick={() => props.removeFromBasket(id, title)}
//       >
//         <i className="material-icons basket-delete">delete_forever</i>{" "}
//         delete
//       </button>
//     </div>
//   </div>
// </div>
