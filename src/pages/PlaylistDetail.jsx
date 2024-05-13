import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RotateIcon } from "../components/icons/Svgs";
import CasseteForm from "../components/layout/CasseteForm";
import MainContainer from "../components/layout/MainContainer";
import TrackList from "../components/shared/TrackList";
import { axiosMusic } from "../utils/configAxios";

const PlaylistDetail = () => {
  const { id: playlistId } = useParams();

  const formRef = useRef(null);

  const handleRotateCassete = () => {
    setIsCasseteFront(!isCasseteFront);
  };

  const handleRemoveTrack = (track) => {
    axiosMusic.delete('/api/playlists/' + playlistId + '/tracks/' + track.id)
      .then(() => {
        const deletedTrack = track.id
        const newTracks = playlistInfo.tracks.filter((track) => track.id != deletedTrack)
        const newPlaylistInfo = {...playlistInfo, tracks: newTracks}
        setPlaylistInfo(newPlaylistInfo);
        
      })
      .catch((err) => {console.log(err)})

  }

  const [playlistInfo, setPlaylistInfo] = useState({});

  const [isCasseteFront, setIsCasseteFront] = useState(true);

  useEffect(() => {
    axiosMusic
      .get("/api/playlists/" + playlistId)
      .then(({ data }) => {
        setPlaylistInfo(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (playlistInfo) {
      formRef.current.title.value = playlistInfo.title;
      formRef.current.to.value = playlistInfo.to;
      formRef.current.message.value = playlistInfo.message;
    }
  }, [playlistInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const playlistData = Object.fromEntries(formData);
    axiosMusic.patch('/api/playlists/'+ playlistInfo.id ,playlistData)
    .then(() => {
    })
    .catch((err) => {console.log(err)})
  };

  return (
    <MainContainer>
      <Link to={-1} className="text-secondary">
        {"<"}Atrás
      </Link>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="grid place-content-center gap-4"
      >
        <CasseteForm
          isCasseteFront={isCasseteFront}
          setIsCasseteFront={setIsCasseteFront}
          isEditable={true}
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
      </form>
      <TrackList tracks={playlistInfo.tracks} showRemoveBtn={true} handleRemoveTrack={handleRemoveTrack} />
    </MainContainer>
  );
};
export default PlaylistDetail;
