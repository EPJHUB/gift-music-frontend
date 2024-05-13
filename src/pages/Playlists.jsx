import { useEffect, useState } from "react";
import CasseteFront from "../components/layout/CasseteFront";
import MainContainer from "../components/layout/MainContainer";
import { axiosMusic } from "../utils/configAxios";
import { FilterIcon, SearchIcon } from "../components/icons/Svgs";

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);

  const sectionHeigth = 180 + (playlists.length - 1) * 50 + "px";
  const [inputSearch, setInputSearch] = useState("")
  
  const filteredPlaylist = playlists.filter((playlist) => playlist.title.toLowerCase().includes(inputSearch.toLowerCase()));

  useEffect(() => {
    axiosMusic
      .get("/api/playlists/me")
      .then(({ data }) => {
        setPlaylists(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <MainContainer>
      <div
        className="w-full bg-white/20 flex justify-between gap-4 p-4 rounded-xl mx-auto"
      >
        <div type="submit">
          <SearchIcon />
        </div>
        <input
          className="bg-transparent w-full flex-1 text-white outline-none"
          autoComplete="off"
          type="text"
          placeholder="Buscar"
          name="q"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <div>
          <FilterIcon />
        </div>
      </div>
      <section className="relative w-full" style={{ height: sectionHeigth }}>
        {filteredPlaylist.map((playlist, index) => (
          <CasseteFront
            key={playlist.id}
            index={index}
            title={playlist.title}
            id={playlist.id}
          />
        ))}
      </section>
    </MainContainer>
  );
};
export default Playlists;
