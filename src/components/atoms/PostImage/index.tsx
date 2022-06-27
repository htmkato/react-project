import { ImgHTMLAttributes } from "react";

type Props = ImgHTMLAttributes<HTMLImageElement>;
export default function PostImage(props: Props) {
  return (
    <span className="flex justify-center my-4">
      <img {...props} />
    </span>
  );
}
