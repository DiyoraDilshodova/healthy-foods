import ProductList from "../productlist";
import "./menu.css";  

const Menu = () => {
  return (
    <section className="menu">
      <div className="container">
        <span className="menu-text">menu</span>
        <h2 className="menu-title">Food Full of treaty Love</h2>
        <p className="menu-description">
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also specialized
          equipment, Skills to manage Customers,{" "}
        </p>
        <ProductList/>
        <button className="menu-btn">Learn More</button>
      </div>
    </section>
  );
};

export default Menu;
