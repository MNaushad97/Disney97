function DetailsControlsMeta() {
  return (
    <>
      <div className="max-w-[874px] pl-14 block">
        <div
          id="Controls"
          className="items-center flex flex-row flex-nowrap mt-0 mb-6	mx-0"
        >
          <a href="#YTVideo">
            <div
              id="trailer"
              className="text-[15px] m-0 mr-[22px] py-0 px-6 h-14 cursor-pointer flex
            items-center justify-center tracking-[1.8px] text-center uppercase rounded-[6px]
             bg-black/30 border-[1px] border-solid border-[#F9F9F9]/50 text-[#F9F9F9]/50
             hover:bg-black/90 hover:border-[#F9F9F9]/100 hover:text-[#F9F9F9]/100"
            >
              <img src="./images/play-icon-white.png" alt="" className="" />
              <span>Trailer</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
export default DetailsControlsMeta;
/*
<div
            id="AddList"
            className="mr-4 h-11 w-11 flex justify-center items-center bg-black/60 rounded-[50%] 
            border-[2px] border-solid border-white cursor-pointer"
          >
            <span
              className="bg-[#F9F9F9] inline-block 
            first:h-0.5 first:w-4 first:translate-x-[1px] first:rotate-0 odd:h-4
             odd:-translate-x-[8px] odd:rotate-0 odd:w-0.5"
            />
            <span
              className="bg-[#F9F9F9] inline-block 
            first:h-0.5 first:w-4 first:translate-x-[1px] first:rotate-0 odd:h-4
             odd:-translate-x-[8px] odd:rotate-0 odd:w-0.5"
            />

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;
    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;
  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

 */
