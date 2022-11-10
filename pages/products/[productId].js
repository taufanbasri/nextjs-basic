import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const ProductDetail = () => {
  const router = useRouter();
  const { productId } = router.query;

  const { data, error } = useSWR(
    `http://localhost:5000/products/${productId}`,
    fetcher
  );

  if (error) return <div>Failed to load.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>
        {data.name} - {data.price}
      </h2>
    </div>
  );
};

export default ProductDetail;
