import ProductionHouse from "./ProductionHouse";
import PosterSlider from "./PosterSlider";
import homeBgimage from "../components/images/home-background.png";
import SectionTrending from "./SectionTrending";
import SectionNewToDisney from "./SectionNewToDisney";
import SectionOriginals from "./SectionOriginals";
import SectionRecommendation from "./SectionRecommendation";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../../src/firebase";
import { setMovies } from "../features/Movies/movieSlice";
import { selectUserName } from "../features/user/userSlice";

function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  console.log("hello");
  db.collection("movies").onSnapshot((snapshot) => {
    snapshot.docs.forEach((doc) => {
      console.log(recommends);
      switch (doc.data().type) {
        case "recommend":
          recommends = [...recommends, { id: doc.id, ...doc.data() }];
          break;

        case "new":
          newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
          break;

        case "original":
          originals = [...originals, { id: doc.id, ...doc.data() }];
          break;

        case "trending":
          trending = [...trending, { id: doc.id, ...doc.data() }];
          break;
        default:
          console.log("Your are in default : something went wrong");
      }
    });
    dispatch(
      setMovies({
        recommend: recommends,
        newDisney: newDisneys,
        original: originals,
        trending: trending,
      })
    );
  });

  return (
    <>
      <div
        id="containEr"
        className="overflow-x-hidden block relative top-[72px] px-5 py-5 "
      >
        <PosterSlider className="absolute " />
        <div className="-z-10 absolute  inset-0 ">
          <img
            src={homeBgimage}
            alt="HomeBgImage"
            className="cover bg-repeat bg-center fixed"
          ></img>
        </div>
        <ProductionHouse />
        <SectionRecommendation />
        <SectionNewToDisney />
        <SectionTrending />

        <SectionOriginals />
      </div>
    </>
  );
}
export default Home;
