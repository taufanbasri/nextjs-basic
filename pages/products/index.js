const Products = ({ products }) => {
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

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:5000/products");
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
};
