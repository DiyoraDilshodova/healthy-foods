import { useContext } from "react";
import shoppingCart from "../../assets/cart.png";
import favoriteIcon from "../../assets/favorite.png"
import { Link } from "react-router-dom";
import { MainContext } from "../../context/mainContext";
import "./header.css";
const Header = () => {
   const { cartItems, likeItems } = useContext(MainContext);
  return (
    <header className="header">
      <div className="container">
        <div className="content">
           <Link to="/" className="logo">Logo</Link>

          <div className="user-actions">
            <Link to='/cart'>
            {cartItems.length > 0 && <span>{cartItems.length}</span>}
              <img src={shoppingCart} alt="Cart" width="27" height="27" />
            </Link>
            <Link to='/like'>
            {likeItems.length > 0 && <span>{likeItems.length}</span>}
              <img src={favoriteIcon} alt="Favorite" width="27" height="27" />
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
