import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/user.slice";
import { LogoutIcon, PlayIconAlt, PlaylistIcon } from "../icons/Svgs";
import PopupRecording from "./PopupRecording";
import { Link } from "react-router-dom";

const Header = () => {
  const tracksRecording = useSelector(
    (store) => store.playlistRecording.tracks
  );
  const [isAccountPop, setisAccountPop] = useState(false);
  const [isRecordPop, setIsRecordPop] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleToogleAccountPop = () => {
    setisAccountPop(!isAccountPop);
    setIsRecordPop(false);
  };

  const handleToogleRecordPop = () => {
    setIsRecordPop(!isRecordPop);
    setisAccountPop(false);
  };
  return (
    <header className="h-min bg-primary-dark text-white flex justify-between px-8 py-4 relative">
      <Link className="text-xl" to={"/"}>GIFT MUSIC</Link>
      <div className="text-white flex gap-6 [&>button]:border-[1px] [&>button]:border-secondary [&>button]:py-2 [&>button]:px-4 [&>button]:rounded-full [&>button]:h-min items-center">
        <button
          onClick={handleToogleAccountPop}
          className="hover:bg-primary-light"
        >
          MI CUENTA
        </button>
        <button
          onClick={handleToogleRecordPop}
          className="flex gap-3 items-center hover:bg-primary-light"
        >
          <PlaylistIcon />
          <span>{tracksRecording.length}</span>
        </button>
        {/* Popup Records */}
        <PopupRecording
          addedTracks={tracksRecording}
          isRecordPop={isRecordPop}
        />
        {/* Pop Account */}
        <section
          className={`text-white bg-primary-light absolute -bottom-24 p-2 rounded-md grid gap-2 border-secondary border-[1px] ${
            isAccountPop ? "right-32" : "-right-1 translate-x-full"
          } transition-all`}
        >
          <button>
            <Link to={"/playlists"} className="flex items-center gap-2">
              <PlayIconAlt />
              <h3>MIS GRABACIONES</h3>
            </Link>
          </button>
          <button onClick={handleLogout} className="flex items-center gap-2">
            <LogoutIcon />
            <h3>CERRAR SESIÓN</h3>
          </button>
        </section>
      </div>
    </header>
  );
};
export default Header;
