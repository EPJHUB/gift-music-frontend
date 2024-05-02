import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/user.slice";
import { LogoutIcon, PlayIconAlt, PlaylistIcon } from "../icons/Svgs";
import { useState } from "react";

const Header = () => {
    const [isAccountPop, setisAccountPop] = useState(false);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    const handleToogleAccountPop = () => {
        setisAccountPop(!isAccountPop)
    }
  return (
    <header className="h-min bg-primary-dark text-white flex justify-between px-8 py-4 relative">
    <button className="text-xl">GIFT MUSIC</button>
    <div className="text-white flex gap-6 [&>button]:border-[1px] [&>button]:border-secondary [&>button]:py-2 [&>button]:px-4 [&>button]:rounded-full [&>button]:h-min items-center">
      <button onClick={handleToogleAccountPop} className="hover:bg-primary-light">MI CUENTA</button>
      <button className="flex gap-3 items-center hover:bg-primary-light"><PlaylistIcon /><span>0</span></button>
      <section className={`text-white bg-primary-light [&>button]:flex [&>button]:items-center [&>button]:gap-2  absolute -bottom-24 p-2 rounded-md grid gap-2 border-secondary border-[1px] ${isAccountPop? "right-32":"-right-1 translate-x-full"} transition-all`}>
        <button className="hover:text-black">
          <PlayIconAlt />
          <h3>MIS GRABACIONES</h3>
        </button>
        <button onClick={handleLogout}>
          <LogoutIcon />
          <h3>CERRAR SESIÓN</h3>
        </button>
      </section>
    </div>
  </header>
  
  )
}
export default Header