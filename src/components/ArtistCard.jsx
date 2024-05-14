const ArtistCard = ({ artist }) => {
  return (
    <article className="text-white flex gap-10 justify-center">
      {/* <div className={`bg-[url('${artist.images[2].url}')] w-[150px] h-[150px]`}></div> */}
      <img className="rounded-full size-[200px] object-cover" src={artist.images[2]?.url} alt="" />
      <main className="grid gap-3">
        <h3>{artist.name}</h3>
        <div className="grid gap-1">
          <span>Seguidores: {artist.followers.total}</span>
          <span>Popularidad: {artist.popularity}</span>
          <span>Generos:</span>
        </div>
        <div>
          {artist.genres.map((genre) => (
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
  );
};
export default ArtistCard;
