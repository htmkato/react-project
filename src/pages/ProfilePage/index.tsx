import UserImage from "@atoms/UserImage";
import { useNavbarContext } from "@organisms/Navbar/context";
import user from "@util/user";

export default function ProfilePage() {
  return (
    <>
      <h1>Profile</h1>
      <div className="grid gap-y-6 w-1/3 mx-auto divide-y">
        <section className="grid justify-center">
          <UserImage data={user} />
          <h4 className="mt-4 text-center">{user.name}</h4>
        </section>
        <section className="grid pt-6">
          <ul>
            <li>
              <a href="#" className="px-4 no-underline">
                <i className="fa fa-pencil mr-2" />
                Editar Perfil
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
