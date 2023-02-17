import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsControlsMeta from "./DetailsControlsMeta";
import db from "../firebase";
import DetailsDescription from "./DetailsDescriptions";
import YTlink from "./YTlink";

function Details() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
          console.log("data is here", doc.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);

  return (
    <>
      <div
        id="ContainerWrapper"
        className=" relative scroll-smooth	h-screen ContainerWrapper min-h-[250px] overflow-hidden  block top-[72px] "
      >
        <div id="header">
          <div
            id="DetailBackgroundImg"
            className="inset-0 opacity-80 fixed -z-[10] DetailBackgroundImg "
          >
            <img
              src={detailData.backgroundImg}
              alt={detailData.title}
              className=" w-[100vw] h-[100vh] "
            />
          </div>
          <div
            id="DetailsImageTitle"
            className="items-end pl-14 block	DetailsImageTitle  justify-start my-0 mx-auto h-[30vw] min-h-[170px]
        pb-[24px] w-full"
          >
            <img
              alt={detailData.title}
              src={detailData.titleImg}
              className="max-w-[600px] min-w-[200px] w-[35vw]"
            />
          </div>
          <DetailsControlsMeta class="DetailsControlsMeta " />

          <DetailsDescription
            className="DetailsDescription "
            subtitle={detailData.subTitle}
            description={detailData.description}
          />
        </div>
      </div>
      <YTlink yt={detailData.yt} />
    </>
  );
}
export default Details;
/*
const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`;



const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;
const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  img {
    width: 100vw;
    height: 100vh;
    @media (max-width: 768px) {
      width: initial;
    }
  }
  const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`; */
