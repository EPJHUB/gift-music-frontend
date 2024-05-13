import TrackCard from "./TrackCard";

const TrackList = ({tracks, allowScroll=false, showRemoveBtn = false, showAddBtn=false, handleRemoveTrack, handleAddTrack}) => {
  const scrollConfig = allowScroll? "max-h-[350px] overflow-y-auto":""; 
  return (
    <section className={`grid gap-2 ${scrollConfig}`}>
      {tracks?.map((track) => (
        <TrackCard key={track.id} track={track} showRemoveBtn={showRemoveBtn} showAddBtn={showAddBtn} handleAddTrack={handleAddTrack} handleRemoveTrack={handleRemoveTrack}/>
      ))}
    </section>
  );
};
export default TrackList;
