import Slider from "react-slick";
import Container from "../Container";

function Arrow(props) {
  let className =
    props.type === "next"
      ? "slider-arrow right-arrow"
      : "slider-arrow left-arrow ";
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
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <Arrow type="next" />,
  prevArrow: <Arrow type="prev" />,
  adaptiveHeight: true,
  dotsClass: "slick-dots custom-dots",
};

const SliderSlick = () => {
  return (
    <Slider className="font-poppins pt-[95px] " {...settings}>
      <div className="slider  items-center justify-center min-h-[600px] md:min-h-[825px]">
        <Container className="slider-container">
          <div className="slider-content ">
            <h4 className="font-bold md:text-2x mb-3">
              30 % OFF ALL ORDER Living Room
            </h4>
            <h3 className="font-bold text-[40px] md:text-[84px] mb-3">
              Sofa Collection
            </h3>
            <p className="text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>
        </Container>
      </div>

      <div className="slider  items-center justify-center min-h-[825px]">
        <Container>
          <div className="slider-content">
            <h4 className="font-bold text-2x mb-3">
              30 % OFF ALL ORDER Living Room
            </h4>
            <h3 className="font-bold text-[84px] mb-3">Sofa Collection</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>
        </Container>
      </div>

      <div className="slider  items-center justify-center min-h-[825px]">
        <Container>
          <div className="slider-content">
            <h4 className="font-bold text-2x mb-3">
              30 % OFF ALL ORDER Living Room
            </h4>
            <h3 className="font-bold text-[84px] mb-3">Sofa Collection</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default SliderSlick;
