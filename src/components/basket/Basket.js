import BasketItem from "./BasketItem";
import "./basket.css";
import { Link } from "react-router-dom";
import { useContext, useId } from "react";
import { ShopContext } from "../context";

export default function BasketList() {
  const id = useId();
  console.log(id);
  const { order } = useContext(ShopContext);

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  const taxes = ((5 / 100) * totalPrice).toFixed(2);

  return (
    <div className="basket">
      <div className="basket_header" data-aos="zoom-in" data-aos-delay="100">
        <h1>Shopping cart</h1>
      </div>
      {order.length ? (
        order.map((item) => {
          return <BasketItem key={id} {...item} />;
        })
      ) : (
        <span className="empty" data-aos="fade-up" data-aos-delay="350">
          Basket is empty! Want to buy anything?
          <Link to="/products" className="go_product">
            Go to products
            <ion-icon
              name="open-outline"
              style={{ marginLeft: ".5rem" }}
            ></ion-icon>
          </Link>
        </span>
      )}

      <div className="total_price" data-aos="fade-up" data-aos-delay="350">
        <div className="delivery" data-aos="fade-right" data-aos-delay="400">
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          <h3>Taxes (5%): ${taxes} </h3>
          <h3>Delivery: $0</h3>
        </div>
        <div className="allCost" data-aos="fade-left" data-aos-delay="450">
          <h3>All Costs: ${(+totalPrice + +taxes).toFixed(2)}</h3>
          <button className="btn check">
            Checkout <ion-icon name="shield-checkmark-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
}
