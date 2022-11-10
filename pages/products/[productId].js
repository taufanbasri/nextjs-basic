import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const [product, setproduct] = useState({});
  const router = useRouter();
  const { productId } = router.query;

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(
        `http://localhost:5000/products/${productId}`
      );
      const data = await response.json();

      setproduct(data);
    };

    getProduct();
  }, [productId]);

  return (
    <div>
      <h2>
        {product.name} - {product.price}
      </h2>
    </div>
  );
};

export default ProductDetail;
