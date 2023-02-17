function DetailsDescription(props) {
  return (
    <>
      <div
        id="subTitles"
        className="text-[#F9F9F9] text-[12px]  min-h-[20px] sm:text-[15px] pl-14 block "
      >
        {props.subtitle}
      </div>
      <div
        id="Description"
        className="leading-[1.4] text-[14px] py-4 px-0 pl-14 text-[#F9F9F9] block sm:text-[20px]"
      >
        {props.description}
      </div>
    </>
  );
}
export default DetailsDescription;

/*const SubTitle = styled.div`
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
`; */
