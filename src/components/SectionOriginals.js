import { useSelector } from "react-redux";
import { selectOriginal } from "../features/Movies/movieSlice";
import Mould_Movies from "./Mould_Movies";
function SectionOriginals() {
  const movies = useSelector(selectOriginal);
  console.log(movies, "Originals:🛢️");
  return (
    <>
      <h4 className="mt-8 px-[3px]">Originals</h4>
      <div
        id="container"
        className="mt-6 pt-0 px-0 pb-[26px]  grid gap-[25px] grid-cols-2
         lg:grid-cols-4 "
      >
        {movies &&
          movies.map((movie, key) => (
            <Mould_Movies
              moviekey={key}
              movieId={movie.id}
              image={movie.cardImg}
              movieTitle={movie.title}
            />
          ))}
      </div>
    </>
  );
}
export default SectionOriginals;
