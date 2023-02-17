import Mould_Productions from "./Mould_Productions";
import DisneyImage from "../components/images/viewers-disney.png";
import PixarImage from "./images/viewers-pixar.png";
import StarWarsImage from "./images/viewers-starwars.png";
import NationalGeographicImage from "./images/viewers-national.png";
import MarvelImage from "./images/viewers-marvel.png";
import MarvelVideo from "./videos/1564676115-marvel.mp4";

import DisneyVideo from "./videos/1564674844-disney.mp4";
import PixarVideo from "./videos/1564676714-pixar.mp4";
import StarWarsVideo from "./videos/1608229455-star-wars.mp4";
import NationalVideo from "./videos/1564676296-national-geographic.mp4";

function ProductionHouse() {
  return (
    <>
      <div
        id="container"
        className="mt-[30px] pt-[30px] px-0 pb-[26px]  grid gap-[25px] grid-cols-1 
        md:grid-cols-3 lg:grid-cols-5 "
      >
        <Mould_Productions src={DisneyImage} video={DisneyVideo} />

        <Mould_Productions
          src={NationalGeographicImage}
          video={NationalVideo}
        />
        <Mould_Productions src={StarWarsImage} video={StarWarsVideo} />
        <Mould_Productions src={MarvelImage} video={MarvelVideo} />
        <Mould_Productions src={PixarImage} video={PixarVideo} />
      </div>
    </>
  );
}
export default ProductionHouse;

/*const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`; */
