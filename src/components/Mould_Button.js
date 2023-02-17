function Mould_Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="mr-4 rounded text-2xl border-[1px] border-[#3FA5F7] text-[#3FA5F7] py-[8px] px-[16px] hover:bg-[#3FA5F7] hover:text-[#181818]	"
    >
      {props.name}
    </button>
  );
}

export default Mould_Button;
