import PostContent from "@atoms/PostContent";
import PostImage from "@atoms/PostImage";
import PostSummary from "@atoms/PostSummary";
import { SyntheticEvent, useRef, useState } from "react";

type Props = {
  data: Post;
};
export default function Post({ data }: Props) {
  const ref = useRef<HTMLDetailsElement>(null);
  const [open, setOpen] = useState(false);

  function onToggle({ target }: SyntheticEvent<HTMLDetailsElement, Event>) {
    const isOpen = (target as HTMLDetailsElement).open;
    setOpen(isOpen);
  }

  return (
    <details
      onToggle={onToggle}
      className="group bg-slate-100 rounded open:shadow-xl open:z-10"
    >
      <PostSummary
        className={open ? "bg-blue-500 group-open:text-white rounded-t" : ""}
      >
        <i
          className={`fa ${open ? "fa-chevron-up" : "fa-chevron-down"} mr-2`}
        />
        {data.name}
      </PostSummary>
      <PostImage src={data.image} alt={`${data.name}'s image`} />
      <PostContent>{data.description}</PostContent>
    </details>
  );
}
