import { Link } from "react-router-dom";

function Mould_Movies(props) {
  return (
    <>
      <div
        id="wrap"
        key={props.moviekey}
        className="pt-[56.25%] rounded-[10px] shadow-[0_16px_10px_-10px_rgba(0,0,0,0.7)] cursor-pointer 
              overflow-hidden  relative transition-all duration-[250ms]  ease-out
              delay-[0] border-[3px] border-zinc-700
               hover:shadow-[0_40px_58px_-16px_rgba(0,0,0,0.8)] hover:scale-[1.05] hover:border-[#F9F9F9F9] "
      >
        {props.movieId}
        <Link to={`/detail/` + props.movieId}>
          <img
            src={props.image}
            alt={props.movieTitle}
            className=" inset-0 block h-full object-cover opacity-100 absolute 
                   duration-500 ease-in-out delay-[0] transition-opacity w-full z-[1]
                   sm:object-fill  "
          />
        </Link>
      </div>
    </>
  );
}
export default Mould_Movies;

/*
 <Wrap key={key}>
              {movie.id}
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  } */
