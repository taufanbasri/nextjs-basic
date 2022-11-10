import { useRouter } from "next/router";

const Slug = () => {
  const router = useRouter();
  const { slug = [] } = router.query;

  return (
    <div>
      <h2>Slug: {[...slug].join("-")}</h2>
    </div>
  );
};

export default Slug;
