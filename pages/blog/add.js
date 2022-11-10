import { useRouter } from "next/router";

const BlogAdd = () => {
  const router = useRouter();

  const publish = () => {
    console.log("Published");

    router.push("/blog");
  };

  return (
    <div>
      <h2>Add New Blog</h2>
      <button onClick={publish}>Publish Blog</button>
    </div>
  );
};

export default BlogAdd;
