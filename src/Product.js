import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
function Product({ id, title, price, rating, image }) {

  const [{basket}, dispatch] = useStateValue();
  
  const addToBasket = () => {
    //dispatch some item into the data layer
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id:id,
        title:title,
        price:price,
        rating:rating,
        image:image,
      }
    })
  }

  return (
    <div className="product">
      <div className="product_info">
        <p className="product_title">{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => 
             ( <p>⭐</p>)
            )}
        </div>
      </div>

      <img className="product_image" src={image} />

      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
