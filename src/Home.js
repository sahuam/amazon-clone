import React from "react";
import "./Home.css";
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg"
        />
      </div>

      <div className="home_row">
        <Product 
        id="000001"
        title="Xbox Wireless Controller - Grey And Blue"
        price={12.80}
        rating={5}
        image="https://m.media-amazon.com/images/I/619+iRxAVqL._AC_UY218_.jpg"
        />
          <Product 
        id="000002"
        title="Logitech G502 SE Hero High Performance RGB Gaming Mouse with 11 Programmable Buttons"
        price={12.80}
        rating={3}
        image="https://m.media-amazon.com/images/I/71ObPf75UVL._AC_UY218_.jpg"
        />
      </div>
      <div className="home_row">
      <Product 
        id="000003"
        title="Elgato Stream Deck - Live Content Creation Controller with 15 Customizable LCD Keys, Adjustable Stand, for Windows 10 and macOS 10.13 or late"
        price={146.35}
        rating={3}
        image="https://m.media-amazon.com/images/I/710R9YpV9nL._AC_UY218_.jpg"
        />
          <Product 
        id="000004"
        title="isterine Total Care Anticavity Fluoride Mouthwash, 6 Benefit Mouthwash to Help Kill 99% of Germs that Cause Bad Breath, Prevent Cavities, Strengthen Enamel & More, Fresh Mint Flavor, 1 L"
        price={5}
        rating={3}
        image="https://images-na.ssl-images-amazon.com/images/I/41z2VjDm1fL._AC_US160_.jpg"
        />
          <Product 
        id="000005"
        title="Dove Body Wash with Pump with Skin Natural Nourishers for Instantly Soft Skin and Lasting Nourishment Deep Moisture Effectively Washes Away Bacteria While Nourishing Your Skin, 34 oz"
        price={12.80}
        rating={3}
        image="https://images-na.ssl-images-amazon.com/images/I/31YWXtNkeKL._AC_US160_.jpg"
        />
      </div>
      <div className="home_row">
      <Product 
        id="000006"
        title="Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black"
        price={12.80}
        rating={3}
        image="https://images-na.ssl-images-amazon.com/images/I/41jSuUHT8eL._AC_US160_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
