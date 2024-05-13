import { useEffect, useState } from "react";
import CasseteForm from "../components/layout/CasseteForm";
import MainContainer from "../components/layout/MainContainer";
import { axiosMusic } from "../utils/configAxios";
import { useParams } from "react-router-dom";
import { RotateIcon } from "../components/icons/Svgs";
import TrackList from "../components/shared/TrackList";

const PlaylistPublic = () => {
  const { id } = useParams();

  const [isCasseteFront, setIsCasseteFront] = useState(true);

  const [playlistInfo, setPlaylistInfo] = useState({});

  const handleRotateCassete = () => {
    setIsCasseteFront(!isCasseteFront);
  };

  useEffect(() => {
    axiosMusic
      .get("/api/playlists/" + id)
      .then(({ data }) => {
        setPlaylistInfo(data);
        console.log(playlistInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <MainContainer isPublic={true}>
      <div className="grid place-content-center gap-4">
        <CasseteForm
          isCasseteFront={isCasseteFront}
          setIsCasseteFront={setIsCasseteFront}
          isEditable={true}
          isPublic={true}
          playlistInfo={playlistInfo}
        />
        <button
          type="button"
          onClick={handleRotateCassete}
          className="border-2 border-white rounded-full w-32 flex justify-center gap-2 text-white mx-auto"
        >
          LADO {isCasseteFront ? "A" : "B"}
          <RotateIcon />{" "}
        </button>
      </div>
      <TrackList tracks={playlistInfo.tracks}/>
    </MainContainer>
  );
};
export default PlaylistPublic;
