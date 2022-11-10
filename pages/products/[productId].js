import { useRouter } from "next/router";

const ProductDetail = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>
        {product.name} - {product.price}
      </h2>
    </div>
  );
};

export default ProductDetail;

export const getStaticPaths = async () => {
  const response = await fetch(`http://localhost:5000/products?_limit=2`);
  const data = await response.json();
  const paths = data.map((product) => ({
    params: {
      productId: `${product.id}`,
    },
  }));

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const response = await fetch(
    `http://localhost:5000/products/${params.productId}`
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: data,
    },
  };
};
