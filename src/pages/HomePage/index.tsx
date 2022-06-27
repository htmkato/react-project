import PostsList from "@organisms/PostsList";
import posts from "@util/posts";

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <PostsList data={posts} />
    </>
  );
}
