import { PropsWithChildren } from "react";

type Props = PropsWithChildren;
export default function NavItems({ children }: Props) {
  return <ul className="flex grow justify-center gap-x-16">{children}</ul>;
}
