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

export const getServerSideProps = async ({ params }) => {
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
