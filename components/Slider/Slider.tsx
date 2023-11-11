import Slider from "react-slick";
import SlideItem from "./Slide";

function Arrow(props) {
  let className =
    props.type === "next"
      ? "slider-arrow right-arrow right-[15px!important] md:right-[25px!important] xl:right-[80px!important] 2xl:right-[90px!important]"
      : "slider-arrow left-arrow left-[15px!important] md:left-[25px!important] xl:left-[80px!important] 2xl:left-[90px!important]";
  className += " arrow";
  const char =
    props.type === "next" ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    );
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}

const settings = {
  dots: true,
  autoplay: true,
  autoplaySpeed: 8000,

  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <Arrow type="next" />,
  prevArrow: <Arrow type="prev" />,
  adaptiveHeight: true,
  dotsClass: "slick-dots custom-dots",
};

const SliderSlick = () => {
  return (
    <Slider className="font-poppins " {...settings}>
      <SlideItem />
      <SlideItem />
      <SlideItem />
    </Slider>
  );
};

export default SliderSlick;
