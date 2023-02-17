import { useSelector } from "react-redux";
import { selectRecommend } from "../features/Movies/movieSlice";
import Mould_Movies from "./Mould_Movies";
function SectionRecommendation() {
  const movies = useSelector(selectRecommend);
  console.log(movies, "Recommended:🛢️");
  return (
    <>
      <h4 className="mt-8 px-[3px]">Recommended for You</h4>
      <div
        id="container"
        className="mt-6 pt-0 px-0 pb-[26px]  grid gap-[25px] grid-cols-2
         lg:grid-cols-4 "
      >
        {movies &&
          movies.map((movie, key) => (
            <Mould_Movies
              moviekey={movie.key}
              movieId={movie.id}
              image={movie.cardImg}
              movieTitle={movie.title}
            />
          ))}
      </div>
    </>
  );
}
export default SectionRecommendation;

/* 
{movies &&
          movies.map((movie, key) => (
            <Mould_Movies
              key={key}
              movieId={movie.id}
              image={movie.cardImg}
              movieTitle={movie.title}
            />
          ))}

<Content>
        {movies &&
          movies.map((movie, key) => (
            <Wrap key={key}>
              {movie.id}
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}

<div
        id="container"
        className="mt-[30px] pt-[30px] px-0 pb-[26px]  grid gap-[25px] grid-cols-1 
        md:grid-cols-3 lg:grid-cols-5 "
     
     <div id="container" className="pt-0 px-0 pb-[26px] ">
        > */
