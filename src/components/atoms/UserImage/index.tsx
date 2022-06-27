type Props = {
  data: User;
  className: string;
};
export default function UserImage({ className, data: { image, name } }: Props) {
  return (
    <img
      className={(className || "") + " rounded-full border-2 border-blue-500"}
      src={image}
      alt={`${name}${name.endsWith("s") ? "'" : "'s"} picture`}
    />
  );
}
