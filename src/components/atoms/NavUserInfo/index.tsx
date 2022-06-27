import UserImage from "@atoms/UserImage";
import { useNavbarContext } from "@organisms/Navbar/context";

export default function NavUserInfo() {
  const { user } = useNavbarContext();
  return (
    <section className="flex items-center gap-x-2">
      <UserImage data={user} className="w-12 h-12" />
      <span className="font-medium">{user.name}</span>
    </section>
  );
}
