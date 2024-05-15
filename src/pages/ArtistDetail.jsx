import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MainContainer from "../components/layout/MainContainer";
import { axiosMusic } from "../utils/configAxios";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import TrackList from "../components/shared/TrackList";

const ArtistDetail = () => {
  const { id: artistId } = useParams();

  const [isLoaded, setisLoaded] = useState(false);

  const [dataArtist, setDataArtist] = useState(undefined);

  useEffect(() => {
    axiosMusic
      .get("/api/artists/" + artistId)
      .then(({ data }) => {
        setDataArtist(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [artistId]);

  useEffect(() => {
    if (dataArtist) {
      console.log(dataArtist);
      setisLoaded(true);
    }
  }, [dataArtist]);

  return (
    <MainContainer>
      <Link to={-1} className="text-secondary">
        {"<"}Atrás
      </Link>
      {isLoaded && (
        <article className="text-white grid grid-cols-2 gap-6 justify-self-center  max-w-[550px]">
          <img
            className="rounded-full size-[200px] mx-auto object-cover"
            src={dataArtist.images[2]?.url}
            alt=""
          />
          <main className="grid gap-3">
            <h3>{dataArtist?.name}</h3>
            <div className="grid gap-1">
              <span>Seguidores: {dataArtist?.followers.total}</span>
              <span>Popularidad: {dataArtist?.popularity}</span>
              <span>Generos:</span>
            </div>
            <div>
              {dataArtist?.genres.map((genre) => (
                <span
                  className="uppercase border-2 border-purple-500/50 px-2 py-1 rounded-full inline-block mb-2"
                  key={genre}
                >
                  {genre}
                </span>
              ))}
            </div>
          </main>
        </article>
      )}
      {isLoaded && (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={false}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {dataArtist.albums.map((album) => (
            <SwiperSlide className="text-white" key={album.id}>
              <div>

              <img className="rounded-xl" src={album.images[1].url} />
              <h3 className="line-clamp-1">{album.name}</h3>
              {
                album.artists.map((artist, index) => (
                  <Link
                  to={`/artists/${artist.id}`}
                  key={artist.id}
                  className="text-white/40 hover:text-secondary"
                >
                  {artist.name}
                  {album.artists.length - 1 !== index && ","}{" "}
                </Link>
                ))
              }
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <TrackList tracks={dataArtist?.songsTop ?? []}/>
    </MainContainer>
  );
};
export default ArtistDetail;
