import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MainContainer from "../components/layout/MainContainer";
import SearchBar from "../components/shared/SearchBar";
import TrackList from "../components/shared/TrackList";
import { addTrack } from "../store/slices/playlistRecording.slice";
import { axiosMusic } from "../utils/configAxios";

const Home = () => {
  const dispatch = useDispatch();
  const handleAddTrack = (track) => {
    dispatch(addTrack(track));
  }
  const config = {
    headers: {
      Authorization: "JWT " + JSON.parse(localStorage.getItem("user-gm")).token,
    },
  };

  const [renderedTracks, setRenderedTracks] = useState([]);

  useEffect(() => {
    axiosMusic
      .get("/api/tracks/recommendations?seed_genres=reggaeton", config)
      .then(({ data }) => {
        setRenderedTracks(data.tracks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const querySearch = Object.fromEntries(formData);
    axiosMusic.get(`/api/tracks?limit=10&q=${querySearch.q}`, config)
    .then(({data}) => {setRenderedTracks(data.tracks.items)})
    .catch((err) => {console.log(err)})
    }
  return (
    <MainContainer>
      <SearchBar handleSearch={handleSearch}/>
      <TrackList tracks={renderedTracks} showAddBtn={true} handleAddTrack={handleAddTrack}/>
    </MainContainer>
  );
};
export default Home;
