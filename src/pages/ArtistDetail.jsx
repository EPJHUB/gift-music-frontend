import { Link, useParams } from "react-router-dom";
import MainContainer from "../components/layout/MainContainer";
import ArtistCard from "../components/ArtistCard";
import { axiosMusic } from "../utils/configAxios";
import { useEffect, useState } from "react";

const ArtistDetail = () => {

  const {id:artistId} = useParams();

  const [artistInfo, setArtistInfo] = useState({})

  useEffect(() => {
    axiosMusic.get('/api/artists/' + artistId)
      .then(({data}) => {
        setArtistInfo(data)
      })
      .catch((err) => {console.log(err)})
  }, [])
  

  return (
    <MainContainer>
      <Link to={-1} className="text-secondary">
        {"<"}Atrás
      </Link>
      <ArtistCard artist={artistInfo}/>

    </MainContainer>
  );
};
export default ArtistDetail;
