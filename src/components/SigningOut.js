function SigningOut(props) {
  return (
    <>
      <img
        className="h-0 w-0 rounded-sm sm:h-8 sm:w-8 sm:rounded-md 
        md:w-14 md:h-14  md:rounded-[50%] md:p-2 md:-mr-9 lg:-mr-5"
        src={props.userPhoto}
        alt={props.name}
      />
      <div
        id="signout"
        className="mr-12 sm:h-12 sm:w-12 flex cursor-pointer items-center justify-center  "
      >
        <div
          id="dropdown"
          className=" top-[3px]  justify-center  absolute
            pt-[3.5px]  sm:pt-[3px] pb-[1px]  bg-[19,19,19] p-2.5 sm:rounded-[4px] tracking-[1px] text-[12px] sm:text-sm md:tex-[17px] "
        >
          <button
            onClick={props.signout}
            className="  border-[#414141] rounded-[6px]  p-2 mt-[12px] ml-8 md:ml-16 lg:ml-14
            hover:border hover:visible"
          >
            SignOut
          </button>
        </div>
      </div>
    </>
  );
}
export default SigningOut;

/*
function SigningOut(props) {
  return (
    <>
      <div
        id="signout"
        className=" relative h-12 w-12 flex cursor-pointer items-center justify-center  "
      >
        <div
          id="dropdown"
          className="absolute  top-12 right-0  bg-[rgb(19,19,19)] border-[1px] border-solid 
          border-[rgb(151, 151, 151)/34] rounder-[4px] shadow-[0_0px_18px_0px_rgba(0,0,0,0.5)]
          p-[10px] text-[14px] tracking-[3px] w-[100px] opacity-0
          hove:opacity-100 hover:duration-1000"
        >
          <img
            className="h-[100%] w-[100%]  rounded-[50%] "
            src={props.userPhoto}
            alt={props.name}
          />
          <span onClick={props.signout} className="  hover:visible">
            SignOut
          </span>
        </div>
      </div>
    </>
  );
}
export default SigningOut;
 */
