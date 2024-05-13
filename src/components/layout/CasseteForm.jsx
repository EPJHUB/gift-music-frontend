import { Link, useNavigate } from "react-router-dom";
import { axiosMusic } from "../../utils/configAxios";
import {
  AddBigIcon,
  DeleteIcon,
  EditIcon,
  SaveIcon,
  ShareIcon,
} from "../icons/Svgs";

const CasseteForm = ({
  isCasseteFront,
  setIsCasseteFront,
  isEditable = false,
  isPublic = false,
  playlistInfo,
}) => {
  const navigate = useNavigate();

  const handleDeletePlaylist = () => {
    axiosMusic
      .delete("/api/playlists/" + playlistInfo?.id)
      .then(({ data }) => {
        console.log(data);
        navigate("/playlists");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className={`relative cassete mx-auto ${
        isCasseteFront ? "front" : "back"
      }`}
    >
      {/*  CasseteForm Front */}
      <div className={`relative front`}>
        <img src="/img/cassete.png" alt="" />
        {isPublic ? (
          <div className="absolute top-4 left-6 bg-white flex rounded-md w-[190px] p-1">
            {playlistInfo?.title}
          </div>
        ) : (
          <label className="absolute top-4 left-6 bg-white flex rounded-md w-[190px] p-1">
            <input
              type="text"
              placeholder="Titulo:"
              required
              name="title"
              className="bg-transparent flex-1 text-sm text-black outline-none"
              onFocus={() => {
                setIsCasseteFront(true);
              }}
            />
            <EditIcon />
          </label>
        )}

        {isEditable && (
          <div
            className={`absolute bottom-[0px] flex w-[238px] ${
              isPublic ? "justify-end gap-2" : "justify-between"
            } p-3`}
          >
            {!isPublic && (
              <div className="flex gap-3">
                <button type="button" onClick={handleDeletePlaylist}>
                  <DeleteIcon />
                </button>
                <button type="submit">
                  <SaveIcon />
                </button>
              </div>
            )}
            <Link to={`/playlists/public/${playlistInfo?.id}`}>
              <ShareIcon />
            </Link>
            {isPublic && (
              <button>
                <AddBigIcon />
              </button>
            )}
          </div>
        )}
      </div>

      {/*  CasseteForm Back */}
      <div className="absolute top-0 back">
        <img src="/img/cassete.png" alt="" />
        {isPublic ? (
          <div className="absolute top-4 left-6 bg-white flex rounded-md w-[190px] p-1">
            {playlistInfo?.to}
          </div>
        ) : (
          <label className="absolute top-4 left-6 bg-white flex rounded-md w-[190px] p-1">
            <input
              type="text"
              placeholder="Para:"
              required
              name="to"
              className="bg-transparent flex-1 text-sm text-black outline-none"
              onFocus={() => {
                setIsCasseteFront(false);
              }}
            />
            <EditIcon />
          </label>
        )}
        {isPublic ? (
          <div className="absolute top-14 left-6 bg-white flex rounded-md w-[190px] p-1 h-20 overflow-y-auto">
            {playlistInfo?.message}
          </div>
        ) : (
          <label className="absolute top-14 left-6 bg-white flex rounded-md w-[190px] p-1">
          <textarea
            placeholder="Mensaje:"
            required
            name="message"
            className="bg-transparent text-black h-20 resize-none"
            onFocus={() => {
              setIsCasseteFront(false);
            }}
          />
          <EditIcon className="absolute top-20" />
        </label>
        )}
      </div>
    </div>
  );
};
export default CasseteForm;
