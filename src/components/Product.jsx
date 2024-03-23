import { useState, useEffect, React } from "react";
import axios from "axios";

const productsAPI = "https://deploying-json-api.adaptable.app/products";

function Product(props) {
  const [products, setProducts] = useState([]);

  const { product } = props;

  useEffect(() => {
    axios
    .get(productsAPI)
    .then((response) => {
        setProducts(response.data);
    });
  }, []);

  return (
  <div>
  {products.map((product) => {

  })}
  </div>;
  )
}

export default Product;
