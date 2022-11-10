const ProductDetail = ({ product }) => {
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
  const response = await fetch(`http://localhost:5000/products`);
  const data = await response.json();
  const paths = data.map((product) => ({
    params: {
      productId: `${product.id}`,
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const response = await fetch(
    `http://localhost:5000/products/${params.productId}`
  );
  const data = await response.json();

  return {
    props: {
      product: data,
    },
  };
};
