import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
function CheckoutProduct({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",

      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} />
      <div className="checkoutProduct_info">
        <p>{title}</p>
        <p>{price}</p>
        <p>{rating}</p>
        <button onClick={removeFromBasket}>Remove from cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
