import { Link } from "react-router-dom";
import { AddIcon, PlayIcon } from "../icons/Svgs";

const TrackCard = ({ track }) => {
    const artistsList = track.artists.map((artist) => artist.name).join(", ");
  return (
    <article className="flex justify-between items-center hover:bg-white/20 p-2 rounded-md group transition-colors">
      <div className="flex gap-4 items-center">
        <img
          src={track.album.images[2].url}
          alt=""
          className="rounded-lg group-hover:shadow-lg group-hover:shadow-black transition-shadow"
        />
        <div className="grid">
          <Link className="text-white hover:text-secondary">{track.name}</Link>
          <Link className="text-white/40 hover:text-secondary">{artistsList}</Link>
        </div>
      </div>
      <div className="flex gap-2">
        <button>
          <PlayIcon />
        </button>
        <button>
          <AddIcon />
        </button>
      </div>
    </article>
  );
};
export default TrackCard;
