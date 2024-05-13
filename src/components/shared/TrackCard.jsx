import { Link } from "react-router-dom";
import { AddIcon, PlayIcon, RemoveIcon } from "../icons/Svgs";

const TrackCard = ({ track, showRemoveBtn = false, showAddBtn = false, handleAddTrack, handleRemoveTrack }) => {
  // const artistsList = track.artists.map((artist) => artist.name).join(", ");

  return (
    <article className="flex justify-between items-center hover:bg-white/20 p-2 rounded-md group transition-colors">
      <div className="flex gap-4 items-center">
        <img
          src={track.album.images[2]?.url}
          alt=""
          className="rounded-lg group-hover:shadow-lg group-hover:shadow-black transition-shadow"
        />
        <div className="grid">
          <Link className="text-white hover:text-secondary line-clamp-1">{track.name}</Link>
          <div>
            {track.artists.map((artist, index) => (
              <Link
                key={artist.id}
                className="text-white/40 hover:text-secondary"
              >
                {artist.name}
                {track.artists.length - 1 !== index && ","}{" "}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <button>
          <PlayIcon />
        </button>
        {
          showAddBtn && (
            <button type="button" onClick={() => {handleAddTrack(track)}}>
            <AddIcon />
          </button>
          )
        }
        {
          showRemoveBtn && (
        <button type="button" onClick={() => {handleRemoveTrack(track)}}>
          <RemoveIcon />
        </button>
          )
        }
      </div>
    </article>
  );
};
export default TrackCard;
