function ProductionMould(props) {
  return (
    <>
      <div
        id="wrap"
        className="pt-[56.25%] rounded-[10px] shadow-[0_16px_10px_-10px_rgba(0,0,0,0.7)] cursor-pointer 
        overflow-hidden  relative transition-all duration-[250ms]  ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)] 
        delay-[0] border-[3px]  border-zinc-700
        group hover:shadow-[0_30px_22px_-10px_rgba(0,0,0,0.8)] hover:scale-[1.05] hover:border-[#F9F9F9] "
      >
        <img
          src={props.src}
          alt="productionImage"
          className=" inset-0 block h-full object-cover opacity-100 absolute 
           duration-500 ease-in-out delay-[0] transition-opacity w-full z-[1]
          sm:object-fill  "
        />

        <video
          src={props.video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full  absolute top-0 opacity-0 object-cover
           group-hover:opacity-100"
        ></video>
      </div>
    </>
  );
}
export default ProductionMould;
/*
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }
  }
`; */
