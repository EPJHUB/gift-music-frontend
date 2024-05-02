import { useEffect, useState } from "react";
import {
  FilterIcon,
  SearchIcon
} from "../components/icons/Svgs";
import Header from "../components/shared/Header";
import TrackList from "../components/shared/TrackList";
import { axiosMusic } from "../utils/configAxios";

const Home = () => {
  const config = {
    headers: {
      Authorization: "JWT " + JSON.parse(localStorage.getItem("user-gm")).token,
    },
  };

  const [randomTracks, setRandomTracks] = useState([]);

  useEffect(() => {
    axiosMusic
      .get("/api/tracks/recommendations?seed_genres=reggaeton", config)
      .then(({ data }) => {
        setRandomTracks(data.tracks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="h-screen bg-black flex flex-col gap-20 overflow-x-hidden">
      <Header />
      <main className="h-auto w-[97%] bg-primary-dark rounded-3xl p-8 grid gap-6 self-center">
        <form className="w-full bg-white/20 flex justify-between gap-4 p-4 rounded-xl mx-auto">
          <button>
            <SearchIcon />
          </button>
          <input
            className="bg-transparent w-full flex-1"
            type="text"
            placeholder="Buscar"
          />
          <button htmlFor="">
            <FilterIcon />
          </button>
        </form>
        <TrackList tracks={randomTracks}/>
      </main>
    </section>
  );
};
export default Home;
