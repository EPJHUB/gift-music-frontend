import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTrack, resetTracks } from "../../store/slices/playlistRecording.slice";
import { axiosMusic } from "../../utils/configAxios";
import { RotateIcon } from "../icons/Svgs";
import CasseteForm from "../layout/CasseteForm";
import "./PopupRecording.css";
import TrackList from "./TrackList";

const PopupRecording = ({ addedTracks, isRecordPop }) => {
  const [isCasseteFront, setIsCasseteFront] = useState(true);

  const dispatch = useDispatch();

  const handleRemoveTrack = (track) =>{
    dispatch(removeTrack(track));
  }

  const handleRotateCassete = () => {
    setIsCasseteFront(!isCasseteFront);
  };

  const handleCreatePlaylist = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const playlistInfo = Object.fromEntries(formData);
    const playlistToCreate = {
      ...playlistInfo,
      tracks: addedTracks.map((track) => {
        return { id: track.id };
      }),
    };
    axiosMusic
      .post("/api/playlists", playlistToCreate)
      .then(() => {
        e.target.reset();
        dispatch(resetTracks());
        alert("Lista creada correctamente, revisa tus playlist");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form
      onSubmit={handleCreatePlaylist}
      className={`text-white bg-primary-light absolute justify-items-center top-24 p-2 rounded-md grid gap-2 border-secondary border-[1px] z-50 ${
        isRecordPop ? "right-8" : "-right-1 translate-x-full"
      } transition-all max-w-80`}
    >
      <CasseteForm
        isCasseteFront={isCasseteFront}
        setIsCasseteFront={setIsCasseteFront}
      />
      <button
        type="button"
        onClick={handleRotateCassete}
        className="border-2 border-white rounded-full w-32 flex justify-center gap-2"
      >
        LADO {isCasseteFront ? "A" : "B"}
        <RotateIcon />{" "}
      </button>
      <TrackList tracks={addedTracks} allowScroll={true} showRemoveBtn={true} handleRemoveTrack={handleRemoveTrack} />
      {addedTracks.length > 0 && (
        <button
          type="submit"
          className="border-2 border-white rounded-full w-32"
        >
          CREAR
        </button>
      )}
    </form>
  );
};
export default PopupRecording;
