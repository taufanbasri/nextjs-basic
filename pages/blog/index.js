import { useRouter } from "next/router";

const BlogIndex = () => {
  const router = useRouter();
  const { page, limit } = router.query;

  return (
    <div>
      <h2>This is Blog Page</h2>
      <p>Page: {page}</p>
      <p>Limit: {limit}</p>
    </div>
  );
};

export default BlogIndex;
