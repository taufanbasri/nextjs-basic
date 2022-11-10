import { useRouter } from "next/router";

const BlogId = () => {
  const router = useRouter();
  const { blogId } = router.query;

  return (
    <div>
      <h2>Blog dynamic route: {blogId}</h2>
    </div>
  );
};

export default BlogId;
