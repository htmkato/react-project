import { PropsWithChildren } from "react";

type Props = PropsWithChildren;
export default function PostContent({ children }: Props) {
  return (
    <div className="p-4 pt-2">
      <p>{children}</p>
    </div>
  );
}
