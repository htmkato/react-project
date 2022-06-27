import NavItems from "@molecules/NavList";
import NavLink from "@atoms/NavLink";
import NavUserInfo from "@atoms/NavUserInfo";
import NavbarProvider from "./context";

export default function Navbar() {
  return (
    <NavbarProvider>
      <nav className="h-16 flex items-center gap-x-8 px-4 bg-blue-50 shadow-md">
        <NavItems>
          <NavLink to="/" icon="home" />
          <NavLink to="profile" icon="user" />
          <NavLink to="settings" icon="cog" />
        </NavItems>
        <NavUserInfo />
      </nav>
    </NavbarProvider>
  );
}
