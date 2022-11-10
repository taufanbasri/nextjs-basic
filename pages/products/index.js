import { useEffect, useState } from "react";

const Products = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();

      setproducts(data);
    };

    getProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
