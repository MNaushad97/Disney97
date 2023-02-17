function NavLinks(props) {
  return (
    <>
      <div
        className="
        lg:items-center lg:justify-end  	lg:flex  m-0 p-0 lg:relative lg:mr-auto lg:ml-[25px]
      hover:rounded  hover:border-2 hover:border-x-0 hover:border-t-0 "
      >
        <a href={props.href} className=" sm:flex items-center  px-3 ">
          <img
            src={props.icon}
            alt={props.alt}
            className="h-5 min-w-[20px] w-4 z-auto  "
          />

          <span className="text-[8px] p-1 sm:text-[10px] md:text-[13px] sm:tracking-[1.42px] sm:leading-[1.08] py-2 whitespace-nowrap relative">
            {props.displayName}
          </span>
        </a>
      </div>
    </>
  );
}
export default NavLinks;
