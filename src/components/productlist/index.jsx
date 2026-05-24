import { useEffect, useState } from "react";
import "./style.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  async function getData() {
    await fetch(`${import.meta.env.VITE_BASE_URL}products`)
      .then((res) => res.json())
      .then((json) => setProducts(json.products));
  }

  useEffect(() => {
    getData();
  }, []);

  const data = Array.isArray(products) && products.length > 0 && products.slice(0, 6);
  return (
    <div className="products">
      {
        data.map(el => {
          <div className="product" key={el.id}>
            {el.title}
          </div>
        })
      }
    </div>
  );
};

export default ProductList;
