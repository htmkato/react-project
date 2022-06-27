import user from "@util/user";
import { createContext, PropsWithChildren, useContext } from "react";

type NavbarContextType = {
  user: User;
};

const initialValue: NavbarContextType = {
  user,
};
const NavbarContext = createContext<NavbarContextType>(initialValue);

export const useNavbarContext = () => useContext(NavbarContext);

type NavbarProviderProps = PropsWithChildren;
export default function NavbarProvider({ children }: NavbarProviderProps) {
  return (
    <NavbarContext.Provider value={initialValue}>
      {children}
    </NavbarContext.Provider>
  );
}
