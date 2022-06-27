import { NavLink as BaseNavLink, NavLinkProps } from "react-router-dom";

type Props = NavLinkProps & {
  icon: string;
};

export default function NavLink({ icon, ...props }: Props) {
  return (
    <li>
      <BaseNavLink
        className={({ isActive }) =>
          `text-2xl ${
            isActive ? "text-blue-500" : "text-blue-400"
          } transition-colors hover:text-blue-500`
        }
        {...props}
      >
        <i className={`fa fa-${icon}`} />
      </BaseNavLink>
    </li>
  );
}
