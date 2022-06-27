import Post from "@molecules/Post";

type Props = {
  data: Array<Post>;
};
export default function PostsList({ data }: Props) {
  return (
    <section className="grid gap-y-2 w-3/4 mx-auto mt-8">
      {data.map((post, index) => (
        <Post key={index} data={post} />
      ))}
    </section>
  );
}
