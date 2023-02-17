import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Mould_Posters from "./Mould_Posters";
import ScaleImage from "../components/images/slider-scale.jpg";
import BadgingImage from "../components/images/slider-badging.jpg";
import ScalesImage from "../components/images/slider-scales.jpg";
import BadagImage from "../components/images/slider-badag.jpg";

function PosterSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <Carousel {...settings} className="mx-5 ">
        <Mould_Posters src={ScaleImage} />
        <Mould_Posters src={BadgingImage} />
        <Mould_Posters src={ScalesImage} />
        <Mould_Posters src={BadagImage} />
      </Carousel>
    </>
  );
}
export default PosterSlider;
const Carousel = styled(Slider)`
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -61px;
  }
  .slick-next {
    right: -61px;
  }
`;
