import { Rating } from "react-simple-star-rating";
import { useContext } from "react";
import "./style.css";
import { reducer } from "../../store";
import {
  ADD_ONE,
  ADD_TO_CART,
  ADD_TO_LIKE,
  REMOVE_FROM_CART,
  REMOVE_FROM_LIKE,
  REMOVE_ONE,
} from "../../store/type";
import { MainContext } from "../../context/mainContext";
import favoriteIcon from "../../assets/favorite.png";
import like_red from "../../assets/heart.png";

const Card = ({
  thumbnail,
  title,
  description,
  price,
  rating,
  isContainedCartItems,
  isContainedLikeItems,
}) => {
  function truncate(str, max) {
    return str.length > max ? str.slice(0, max) + "..." : str;
  }

  function formatPrice(price) {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  const { addToCart, addToLike, removeFromCart, removeFromLike } =
    useContext(MainContext);

  return (
    <div className="product">
      <button
        className="like_btn"
        onClick={() =>
          isContainedLikeItems
            ? removeFromLike(id)
            : addToLike({ thumbnail, title, price, rating, description, id })
        }
      >
        {isContainedLikeItems ? (
          <img src={like_red} width="24" height="24" />
        ) : (
          <img src={favoriteIcon} width="24" height="24" />
        )}
      </button>

      <img src={thumbnail} alt={title} className="product-img" />
      <div className="product-content">
        <div className="product-info">
          <h2 className="product-title">{truncate(title, 20)}</h2>
          <p className="product-price">{formatPrice(price)}</p>
        </div>
        <p className="product-description">{truncate(description, 80)}</p>

        {/* Reyting yulduzchalari */}
        <div className="product-review">
          <button
            className="add-btn"
            onClick={() =>
              isContainedCartItems
                ? removeFromCart(id)
                : addToCart({
                    thumbnail,
                    title,
                    price,
                    rating,
                    description,
                    id,
                  })
            }
          >
            +
          </button>

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
