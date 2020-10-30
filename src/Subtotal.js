import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
const [{basket}, dispatch] = useStateValue();
let totalAmount = 0;
const getSubTotalAmount = () =>{
  
  basket.map(item => totalAmount+=item?.price);
  return totalAmount;
}

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) : <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        value={getSubTotalAmount()}
        decimalScale={2}
        displayType="text"
        thousandSeperator={true}
        prefix={"$"}
      />
       <button>Procced to Checkout</button>
    </div>
   
  );
}

export default Subtotal;
