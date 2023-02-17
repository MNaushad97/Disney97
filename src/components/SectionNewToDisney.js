import { useSelector } from "react-redux";

import { selectNewDisney } from "../features/Movies/movieSlice";
import Mould_Movies from "./Mould_Movies";
function SectionNewToDisney() {
  const movies = useSelector(selectNewDisney);
  console.log(movies, "new:🛢️");

  return (
    <>
      <h4 className="mt-8 px-[3px]">New to Disney</h4>
      <div
        id="container"
        className="mt-6 pt-0 px-0 pb-[26px]  grid gap-[25px] grid-cols-2
         lg:grid-cols-4 "
      >
        {movies &&
          movies.map((movie, key) => (
            <Mould_Movies
              key={key}
              movieId={movie.id}
              image={movie.cardImg}
              movieTitle={movie.title}
            />
          ))}
      </div>
    </>
  );
}
export default SectionNewToDisney;
