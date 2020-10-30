import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  console.log("inside checkout", basket.length, basket);
  
  return (
    <div className="checkout">
      <div className="checkout_left">
        <div className="checkout_head">
          <h4>Hello, {user?.email}</h4>
          <h2 className="checkout_title"> Your Shopping Basket</h2>
        </div>
        <div className="checkout_products">
          {
            basket.map(
              (item) => <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
              elementID={item.key}
              />
            )

          }
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
