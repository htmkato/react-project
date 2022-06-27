import { HTMLAttributes, PropsWithChildren } from "react";

type Props = HTMLAttributes<HTMLElement>;
export default function PostSummary({ children, className }: Props) {
  return (
    <summary
      className={
        "p-4 hover:text-blue-400 group-open:text-blue-500 group-open:mb-8 cursor-pointer " +
        (className || "")
      }
    >
      {children}
    </summary>
  );
}
