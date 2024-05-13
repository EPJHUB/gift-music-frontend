import { Link } from "react-router-dom";
import { EditIcon } from "../icons/Svgs";

const CasseteFront = ({index, title, id}) => { 
    const deltaY = index * 50 + "px";
  return (
    <Link className="absolute left-1/2 -translate-x-1/2 w-[238px] hover:-translate-y-3 hover:rotate-3 transition-all" style={{top: deltaY }} to={`/playlists/${id}`}>
      <img src="img/cassete.png" alt="" />
      <div className="absolute top-4 left-6 bg-white flex rounded-md w-[190px] p-1">
        <h3 className="bg-transparent flex-1 text-sm text-black uppercase">{title}</h3>
        <EditIcon />
      </div>
    </Link>
  );
};
export default CasseteFront;
