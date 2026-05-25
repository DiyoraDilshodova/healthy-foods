import React from "react";
import "./style.css";
import { Rating } from "react-simple-star-rating";

const Card = ({ thumbnail, title, description, price, rating }) => {
  function truncate(str, max) {
    return str.length > max ? str.slice(0, max) + "..." : str;
  }

  function formatPrice(price) {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  return (
    <div className="product">
      <img src={thumbnail} alt={title} className="product-img" />
      <div className="product-content">
        <div className="product-info">
          <h2 className="product-title">{truncate(title, 20)}</h2>
          <p className="product-price">{formatPrice(price)}</p>
        </div>
        <p className="product-description">{truncate(description, 80)}</p>

        {/* Reyting yulduzchalari */}
        <div className="product-review">
          <button className="add-btn">+</button>
          <Rating
            initialValue={Number(rating)} 
            readonly={true} 
            allowFraction={true}
            size={22} 
            fillColor="#DC780B" 
          />
        </div>

        <div className="product-action"></div>
      </div>
    </div>
  );
};

export default Card;
