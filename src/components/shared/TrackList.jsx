import TrackCard from "./TrackCard";

const TrackList = ({tracks}) => {
    console.log(tracks)
  return (
    <section className="grid gap-2">
      {tracks.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </section>
  );
};
export default TrackList;
