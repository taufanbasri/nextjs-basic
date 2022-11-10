import { useRouter } from "next/router";

const CommentId = () => {
  const router = useRouter();
  const { blogId, commentId } = router.query;

  return (
    <div>
      <h2>
        Blog comment dynamic route: blogId {blogId}, commentId {commentId}
      </h2>
    </div>
  );
};

export default CommentId;
