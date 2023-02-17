function Mould_Posters(props) {
  return (
    <div className="rounded-[4px] cursor-pointer relative">
      <a
        href="/"
        className="rounded-[4px] shadow-[0_16px_10px_-10px_rgba(0,0,0,0.7)]  
        cursor-pointer block relative p-1 hover:border-[249, 249, 249, 0.8] hover:p-[0]
         hover:border-solid hover:border-4  hover:duration-[300ms]  "
      >
        <img src={props.src} alt="" className="w-full h-full " />
      </a>
    </div>
  );
}
export default Mould_Posters;
/*
onst Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  } */
