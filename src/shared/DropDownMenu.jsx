import { Link } from "react-router-dom";
import DropDownProfile from "../assets/icons/DropDownProfile";
import DropDownMessage from "../assets/icons/DropDownMessage";
import DropDownLogout from "../assets/icons/DropDownLogout";
import { useLogout } from "../features/auth/useLogout";
import Loader from "./Loader";
import { useUser } from "../features/auth/useUser";

function DropDownMenu({ close }) {
  const { logout, isPending } = useLogout();
  const { user, isLoading } = useUser();

  if (isPending || isLoading || !user) return <Loader />;
  return (
    <>
      <div className="fixed inset-0 z-50" onClick={close} />
      <ul className="absolute right-2 top-20 z-50 h-[154px] w-[200px] rounded-lg bg-white py-4">
        <li onClick={close}>
          <Link to="profile" className="flex items-center gap-5 px-6 py-2">
            <DropDownProfile />
            <span className="text-base text-gray-300">Profile</span>
          </Link>
        </li>
        <li onClick={close}>
          <Link className="flex items-center gap-5 px-6 py-2">
            <DropDownMessage />
            <span className="text-base text-gray-300">Message</span>
          </Link>
        </li>
        <li onClick={close}>
          <Link
            to="/sign-in"
            onClick={logout}
            className="flex items-center gap-5 px-6 py-2"
          >
            <DropDownLogout />
            <span className="text-base text-gray-300">Logout</span>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default DropDownMenu;
