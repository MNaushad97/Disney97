import { useSelector } from "react-redux";
import { selectTrending } from "../features/Movies/movieSlice";
import MouldMovies from "./Mould_Movies";
function SectionTrending() {
  const movies = useSelector(selectTrending);

  console.log(movies, "Trending:🛢️");
  return (
    <>
      <h4 className="mt-8 px-[3px]">Trending</h4>
      <div
        id="container"
        className="mt-6 pt-0 px-0 pb-[26px]  grid gap-[25px] grid-cols-2
         lg:grid-cols-4 "
      >
        {movies &&
          movies.map((movie, key) => (
            <MouldMovies
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
export default SectionTrending;
